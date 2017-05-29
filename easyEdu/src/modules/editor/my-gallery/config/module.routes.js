define(function() {
    'use strict';

    function ModuleRoutes() {
        var partialPath = "src/modules/editor/my-gallery/view/";
        var routes = [
            {
                state: 'editor.my-gallery',
                config: {
                    url: "/my-gallery",
                    controller: 'MyGalleryCtrl as vm',
                    templateUrl: partialPath + "index.html",
                    resolve: {
                        MyGalleryData: MyGalleryData
                    }
                }
            }
        ];

        MyGalleryData.$inject = ["LoadGApi", "AuthorizationSvc"];
        function MyGalleryData(LoadGApi, AuthorizationSvc) {
            if (AuthorizationSvc.isSignedInGoogle()) {
                AuthorizationSvc.isLoading = true;
                return AuthorizationSvc.isExistRootFolder()
                    .then(function(rootFolder) {
                        if (rootFolder) {
                            return AuthorizationSvc.searchFile(rootFolder.id, 'metadata.json');
                        }
                        return [];
                    })
                    .then(function(metadataRoot) {
                        if (metadataRoot) {
                            return AuthorizationSvc.getFile(metadataRoot.id);
                        }
                        return [];
                    })
                    .catch(function(error) {
                        console.error(error);
                    })
                    .finally(function() {
                        AuthorizationSvc.isLoading = false;
                    });
            }
            return [];
        }

        return routes;
    }

    return ModuleRoutes;
});