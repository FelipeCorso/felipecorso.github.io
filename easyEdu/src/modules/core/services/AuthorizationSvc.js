define(function () {
    'use strict';
    Service.$inject = ['$http', '$q', "$rootScope"];
    /*@ngInject*/
    function Service($http, $q, $rootScope) {

        // The Browser API key obtained from the Google Developers Console.
        var DEVELOPER_KEY = 'AIzaSyBSklh1MWow4DDwhL1bna7vKA4LR1RmHQY';

        // Client ID and API key from the Developer Console
        var CLIENT_ID = '661558756492-p0agpbu1e13ac7npde96ts04mb6mv9o4.apps.googleusercontent.com';

        // Array of API discovery doc URLs for APIs used by the quickstart
        var DISCOVERY_DOCS = [
            "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
            "https://people.googleapis.com/$discovery/rest?version=v1"];
        var DRIVE_FILES = "https://www.googleapis.com/drive/v3/files";

        // Replace with your own project number from console.developers.google.com.
        // See "Project number" under "IAM & Admin" > "Settings"
        var APP_ID = "661558756492";

        // Authorization scopes required by the API; multiple scopes can be
        // included, separated by spaces.
        var SCOPES =
            "https://www.googleapis.com/auth/drive " +
            "https://www.googleapis.com/auth/userinfo.profile";
        /*+
         "https://www.googleapis.com/auth/drive.appdata " +
         "https://www.googleapis.com/auth/drive.file " +
         "https://www.googleapis.com/auth/drive.metadata " +
         "https://www.googleapis.com/auth/drive.metadata.readonly " +
         "https://www.googleapis.com/auth/drive.photos.readonly " +
         "https://www.googleapis.com/auth/drive.readonly " +
         "https://www.googleapis.com/auth/drive.scripts ";
         */
        var GOOGLE_DRIVE_NAME_ROOT_FOLDER = "EasyEdu";

        var GOOGLE_DRIVE_MIME_TYPE_PHOTO = "application/vnd.google-apps.photo";
        var GOOGLE_DRIVE_MIME_TYPE_JSON = "application/vnd.google-apps.script";
        var APPLICATION_JSON = "application/json";

        var API_MYJSON = "https://api.myjson.com/bins";
        var gApiClientFuture = $q.defer();
        var gApiAuthFuture = $q.defer();
        var gApiPickerFuture = $q.defer();
        var picker;
        var gApiLoaded = false;
        var oauthToken;
        var isSignedIn = false;
        var service = {};

        service.createFile = createFile;
        service.createFolder = createFolder;
        service.createImage = createImage;
        service.createJson = createJson;
        service.createPicker = createPicker;
        service.createQrCodeJson = createQrCodeJson;
        service.createRootFolder = createRootFolder;
        service.defineFilePublic = defineFilePublic;
        service.deleteFile = deleteFile;
        service.getFile = getFile;
        service.getQrCodeJson = getQrCodeJson;
        service.getUserInformation = getUserInformation;
        service.handleAuthClick = handleAuthClick;
        service.handleSignOutClick = handleSignOutClick;
        service.init = init;
        service.isExistRootFolder = isExistRootFolder;
        service.isSignedInGoogle = isSignedInGoogle;
        service.renameFile = renameFile;
        service.searchFile = searchFile;
        service.searchFolder = searchFolder;
        service.updateFile = updateFile;
        service.updateJson = updateJson;

        return service;

        /**
         *  On load, called to load the auth2 library and API client library.
         *
         * @returns {Promise}
         */
        function init() {
            var initialized = $q.defer();
            if (!gApiLoaded) {
                service.isLoading = true;
                initClient()
                    .then(function (response) {
                        console.log(response);
                        return initAuth();
                    })
                    .then(function (response) {
                        console.log(response);
                        return loadGApiPicker();
                    })
                    .then(function (response) {
                        console.log(response);
                        initialized.resolve("gapi was loaded");
                    })
                    .catch(function (error) {
                        console.error("An error occurred while loading gapi", error);
                        initialized.reject("An error occurred while loading gapi", error);
                    })
                    .finally(function () {
                        service.isLoading = false;
                    });
            } else {
                initialized.resolve("gapi was loaded");
            }
            return initialized.promise;
        }

        /**
         *  Initializes the API client library and sets up sign-in state
         *  listeners.
         */
        function initClient() {
            gapi.client.init({
                    apiKey: DEVELOPER_KEY,
                    discoveryDocs: DISCOVERY_DOCS,
                    clientId: CLIENT_ID,
                    scope: SCOPES
                })
                .then(function () {
                    gApiClientFuture.resolve("gapi client was loaded");
                    // Listen for sign-in state changes.
                    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);

                    // Handle the initial sign-in state.
                    updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
                }, function () {
                    gApiClientFuture.reject("gapi client was not loaded");
                });
            return gApiClientFuture.promise;
        }

        function initAuth() {
            gapi.auth2.authorize(
                {
                    'client_id': CLIENT_ID,
                    'scope': SCOPES,
                    'immediate': false
                },
                handleAuthResult);
            return gApiAuthFuture.promise;
        }

        function handleAuthResult(authResult) {
            if (authResult && !authResult.error) {
                oauthToken = authResult.access_token;
                gApiAuthFuture.resolve("gapi auth was loaded");
            } else {
                gApiAuthFuture.reject("gapi auth was not loaded");
            }
        }

        function loadGApiPicker() {
            gapi.load('picker', {'callback': onPickerApiLoad});
            return gApiPickerFuture.promise;
        }

        function onPickerApiLoad() {
            gApiLoaded = true;
            gApiPickerFuture.resolve("gapi picker was loaded");
        }

        // Create and render a Picker object for searching images.
        function createPicker(parentId, callback, multipleSelect, viewTypes) {
            if (gApiLoaded && oauthToken) {
                // var viewImages = new google.picker.View(google.picker.ViewId.DOCS_IMAGES);
                var view = new google.picker.View(google.picker.ViewId.DOCS);
                view.setMimeTypes(viewTypes || "image/png,image/jpeg,image/jpg");
                view.setParent(parentId);

                var uploadView = new google.picker.DocsUploadView();
                uploadView.setParent(parentId);

                var pickerBuilder = new google.picker.PickerBuilder()
                    .setAppId(APP_ID)
                    .setOAuthToken(oauthToken)
                    .addView(view)
                    .addView(uploadView)
                    .setDeveloperKey(DEVELOPER_KEY)
                    .setCallback(callback);

                if (multipleSelect) {
                    pickerBuilder.enableFeature(google.picker.Feature.MULTISELECT_ENABLED);
                }

                picker = pickerBuilder.build();
                picker.setVisible(true);
            }
        }

        // A simple callback implementation.
        function pickerCallback(data) {
            /*
             if (data.action == google.picker.Action.PICKED) {
             var fileId = data.docs[0].id;
             alert('The user selected: ' + fileId);
             */
            var url = 'nothing';
            if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
                var doc = data[google.picker.Response.DOCUMENTS][0];
                url = doc[google.picker.Document.URL];
            }
            var message = 'You picked: ' + url;
            // document.getElementById('result').innerHTML = message;
            // picker.dispose();
        }

        /**
         *  Called when the signed in status changes, to update the UI
         *  appropriately. After a sign-in, the API is called.
         */
        function updateSignInStatus(_isSignedIn) {
            isSignedIn = _isSignedIn;
            $rootScope.$apply();
        }

        function isSignedInGoogle() {
            return isSignedIn || (angular.isDefined(gapi) && angular.isDefined(gapi.auth2) && gapi.auth2.getAuthInstance().isSignedIn.get());
        }

        /**
         *  Sign in the user upon button click.
         */
        function handleAuthClick(event) {
            gapi.auth2.getAuthInstance().signIn()
                .then(function () {
                    $rootScope.$emit("signedInGoogle");
                    $rootScope.$apply();
                });
        }

        /**
         *  Sign out the user upon button click.
         */
        function handleSignOutClick(event) {
            gapi.auth2.getAuthInstance().signOut()
                .then(function () {
                    $rootScope.$emit("signedOutGoogle");
                    $rootScope.$apply();
                });
        }

        /**
         * Cria uma pasta e retorna o ID no callback
         */
        function createFolder(folderName, parentId) {
            var future = $q.defer();
            var body = {
                'mimeType': "application/vnd.google-apps.folder"
            };
            if (folderName) {
                body.name = folderName;
            } else {
                future.reject("The parameter 'folderName' must be passed");
            }
            if (parentId) {
                body.parents = [parentId];
            }

            var request = gapi.client.drive.files.create({
                'resource': body
            });

            request
                .then(function (response) {
                    console.log('Folder ID: ' + response.id);
                    future.resolve(response.result);
                }, function (error) {
                    future.reject(error);
                });
            return future.promise;
        }

        /**
         * Insert a new image
         *
         * @param {string} fileName  The name of file.
         * @param {File} fileData File object to read data from.
         * @param {string} folderId The id of parent. Must be informed.
         * @returns {*}
         */
        function createImage(fileName, fileData, folderId) {
            return createFile(fileName, fileData, folderId, GOOGLE_DRIVE_MIME_TYPE_PHOTO);
        }

        /**
         * Insert a new json
         *
         * @param {string} fileName  The name of file.
         * @param {File} fileData File object to read data from.
         * @param {string} folderId The id of parent. Must be informed.
         * @returns {*}
         */
        function createJson(fileName, fileData, folderId) {
            return createFile(fileName, JSON.stringify(fileData), folderId, APPLICATION_JSON);
        }

        /**
         * Cria o JSON que representa o QR Code e envia para um repositório público.
         *
         * @param {File} fileData File object to write data.
         * @returns {*}
         */
        function createQrCodeJson(fileData) {
            var future = $q.defer();
            $http.post(API_MYJSON, JSON.stringify(fileData),
                {
                    contentType: "application/json; charset=utf-8",
                    dataType: "json"
                })
                .then(function (response) {
                    var data = response.data;
                    if (data && data.uri) {
                        var id = data.uri.substr(data.uri.lastIndexOf("/") + 1);
                        future.resolve(id);
                    }
                })
                .catch(function (error) {
                    future.reject(error);
                });

            return future.promise;
        }

        /**
         * Insert new file
         *
         * @param {string} fileName  The name of file.
         * @param {File} fileData File object to read data from.
         * @param {string} folderId The id of parent. Must be informed.
         * @param {string} mimeType The mimeType of file.
         */
        function createFile(fileName, fileData, folderId, mimeType) {
            const boundary = '-------314159265358979323846';
            const delimiter = "\r\n--" + boundary + "\r\n";
            const close_delim = "\r\n--" + boundary + "--";

            //var reader = new FileReader();
            //reader.readAsBinaryString(fileData);
            //reader.onload = function(e) {
            var future = $q.defer();
            var contentType = "text/plain" || 'application/octet-stream';
            var metadata = {};
            if (fileName) {
                metadata.name = fileName;
                metadata.name += mimeType === APPLICATION_JSON ? ".json" : "";
            } else {
                future.reject("The parameter 'fileName' must be passed");
            }
            if (folderId) {
                metadata.parents = [folderId];
            } else {
                future.reject("The parameter 'folderId' must be passed");
            }
            if (mimeType) {
                metadata.mimeType = mimeType;
            }

            var base64Data = btoa(fileData);
            var multipartRequestBody =
                delimiter +
                'Content-Type: application/json\r\n\r\n' +
                JSON.stringify(metadata) +
                delimiter +
                'Content-Type: ' + contentType + '\r\n' +
                'Content-Transfer-Encoding: base64\r\n' +
                '\r\n' +
                base64Data +
                close_delim;

            var request = gapi.client.request({
                'path': '/upload/drive/v3/files',
                'method': 'POST',
                'params': {'uploadType': 'multipart'},
                'headers': {
                    'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
                },
                'body': multipartRequestBody
            });

            request
                .then(function (response) {
                        future.resolve(response.result);
                    },
                    function (error) {
                        future.reject(error);
                    }
                );

            return future.promise;
        }

        function getFile(fileId) {
            var future = $q.defer();

            if (!fileId) {
                future.reject("The parameter 'fileId' must be passed");
                return future.promise;
            }

            gapi.client.drive.files.get({
                fileId: fileId,
                alt: "media"
            }).then(success, error);

            function success(response) {
                future.resolve(response.result);
            }

            function error(response) {
                future.reject(response.result);
            }

            return future.promise;
        }

        function getQrCodeJson(fileId) {
            var future = $q.defer();
            if (!fileId) {
                future.reject("The parameter 'fileId' must be passed");
                return future.promise;
            }
            $http.get(API_MYJSON + "/" + fileId)
                .then(function (response) {
                    future.resolve(response.data);
                })
                .catch(function (error) {
                    future.reject(error);
                });

            return future.promise;
        }

        function searchFolder(parentId, name) {
            return _searchFile(parentId, true, name);
        }

        function searchFile(parentId, name) {
            return _searchFile(parentId, false, name);
        }

        function isExistRootFolder() {
            return searchFolder("root", GOOGLE_DRIVE_NAME_ROOT_FOLDER);
        }

        function createRootFolder() {
            return createFolder(GOOGLE_DRIVE_NAME_ROOT_FOLDER, "root");
        }

        function _searchFile(parentId, isFolder, fileName) {
            var future = $q.defer();
            var q = [];
            if (parentId) {
                q.push("'" + parentId + "' in parents");
            }
            q.push("mimeType " + (isFolder ? "=" : "!=") + " 'application/vnd.google-apps.folder'");
            q.push("name = '" + fileName + "'");
            gapi.client.drive.files.list({
                    q: q.join(" and "),
                    spaces: "drive",
                    pageSize: 1
                })
                .then(function (response) {
                    if (response.result && response.result.files) {
                        future.resolve(response.result.files[0]);
                    } else {
                        future.resolve(undefined);
                    }
                }, function (error) {
                    future.reject(error);
                });

            return future.promise;
        }

        /**
         * Update json
         *
         * @param {string} fileName  The name of file.
         * @param {File} fileData File object to read data from.
         * @param {string} folderId The id of parent. Must be informed.
         * @returns {*}
         */
        function updateJson(fileName, fileData, folderId) {
            // return updateFile(fileName, JSON.stringify(fileData), folderId, APPLICATION_JSON);
            return updateFile(fileName, JSON.stringify(fileData));
        }

        function _updateFile(fileId, fileData, folderId, mimeType) {
            const boundary = '-------314159265358979323846';
            const delimiter = "\r\n--" + boundary + "\r\n";
            const close_delim = "\r\n--" + boundary + "--";

            //var reader = new FileReader();
            //reader.readAsBinaryString(fileData);
            //reader.onload = function(e) {
            var future = $q.defer();
            var contentType = mimeType || 'application/octet-stream';
            var metadata = {};
            if (folderId) {
                metadata.parents = [folderId];
            } else {
                future.reject("The parameter 'folderId' must be passed");
            }
            if (mimeType) {
                metadata.mimeType = mimeType;
            }

            var base64Data = btoa(fileData);
            var multipartRequestBody =
                delimiter +
                'Content-Type: application/json\r\n\r\n' +
                JSON.stringify(metadata) +
                delimiter +
                'Content-Type: ' + contentType + '\r\n' +
                'Content-Transfer-Encoding: base64\r\n' +
                '\r\n' +
                base64Data +
                close_delim;

            var request = gapi.client.request({
                'path': '/upload/drive/v3/files/' + fileId,
                'method': 'PUT',
                'params': {'uploadType': 'multipart'},
                'headers': {
                    'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
                },
                'body': multipartRequestBody
            });

            request
                .then(function (response) {
                        future.resolve(response.result);
                    },
                    function (error) {
                        future.reject(error);
                    }
                );

            return future.promise;

            /*  var future = $q.defer();

             gapi.client.drive.files.update({
             fileId: fileId
             }).then(success, error);

             function success(response) {
             future.resolve(response.result);
             }

             function error(response) {
             future.reject(response.result);
             }

             return future.promise;*/
        }

        /**
         * Update an existing file's metadata and content.
         *
         * @param {String} fileId ID of the file to update.
         * @param {Object} fileMetadata existing Drive file's metadata.
         */
        function updateFile(fileId, fileMetadata) {
            const boundary = '-------314159265358979323846';
            const delimiter = "\r\n--" + boundary + "\r\n";
            const close_delim = "\r\n--" + boundary + "--";

            var future = $q.defer();
            var contentType = APPLICATION_JSON || 'application/octet-stream';
            // Updating the metadata is optional and you can instead use the value from drive.files.get.
            var base64Data = btoa(fileMetadata);
            var multipartRequestBody =
                delimiter +
                'Content-Type: application/json\r\n\r\n' +
                JSON.stringify(fileMetadata) +
                delimiter +
                'Content-Type: ' + contentType + '\r\n' +
                'Content-Transfer-Encoding: base64\r\n' +
                '\r\n' +
                base64Data +
                close_delim;

            var request = gapi.client.request({
                'path': '/upload/drive/v2/files/' + fileId,
                'method': 'PUT',
                'params': {'uploadType': 'multipart', 'alt': 'json'},
                'headers': {
                    'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
                },
                'body': multipartRequestBody
            });

            request
                .then(function (response) {
                        future.resolve(response.result);
                    },
                    function (error) {
                        future.reject(error);
                    }
                );

            return future.promise;
        }

        /**
         * Permanently delete a file, skipping the trash.
         *
         * @param {String} fileId ID of the file to delete.
         */
        function deleteFile(fileId) {
            var future = $q.defer();
            if (!fileId) {
                future.reject("The parameter 'fileId' must be passed");
                return future.promise;
            }

            var request = gapi.client.drive.files.delete({
                'fileId': fileId
            });
            request.execute(function (resp) {
                future.resolve(resp);
            }, function (error) {
                future.reject(error);
            });

            return future.promise;
        }

        /**
         * Rename a file.
         *
         * @param {String} fileId <span style="font-size: 13px; ">ID of the file to rename.</span><br>
         * @param {String} newTitle New title for the file.
         */
        function renameFile(fileId, newTitle) {
            var body = {'title': newTitle};
            return updateFile(fileId, body);
        }

        function defineFilePublic(fileId) {
            var future = $q.defer();
            gapi.client.drive.permissions.create({
                'fileId': fileId,
                'resource': {
                    "withLink": true,
                    "role": "reader",
                    "type": "anyone"
                }
            }).then(success, error);

            function success(response) {
                future.resolve(response.result);
            }

            function error(response) {
                future.reject(response.result);
            }

            return future.promise;
        }

        function getUserInformation() {
            var future = $q.defer();

            gapi.client.people.people.get({
                'resourceName': 'people/me',
                'requestMask.includeField': 'person.names,person.photos'
            }).then(success, error);

            function success(response) {
                var result = response.result;
                var userinfo = {};
                if (result.names && result.names.length) {
                    userinfo.name = result.names[0].displayName;
                }
                if (result.photos && result.photos.length) {
                    userinfo.urlPhoto = result.photos[0].url;
                }
                future.resolve(userinfo);
            }

            function error(error) {
                future.reject(error.result);
            }

            return future.promise;

        }

    }

    return Service;
});