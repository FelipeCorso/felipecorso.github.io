define(function () {
    'use strict';

    function ModuleRoutes() {
        var partialPath = "src/modules/editor/my-gallery/view/";
        return [
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
    }

    MyGalleryData.$inject = ["LoadGApi", "MyGallerySvc", "AuthorizationSvc"];
    function MyGalleryData(LoadGApi, MyGallerySvc,AuthorizationSvc) {
        if (AuthorizationSvc.isSignedInGoogle()) {
            AuthorizationSvc.isLoading = true;
            return AuthorizationSvc.isExistRootFolder()
                .then(function (rootFolder) {
                    if (rootFolder) {
                        return MyGallerySvc.searchMetadataRoot(rootFolder.id);
                    }
                    return [];
                })
                .then(function (metadataRoot) {
                    if (metadataRoot) {
                        return MyGallerySvc.getMyGalleryData(metadataRoot.id);
                    }
                    return [];
                })
                .catch(function (error) {
                    console.error(error);
                })
                .finally(function () {
                    AuthorizationSvc.isLoading = false;
                });
        }
        return [];
    }

    return ModuleRoutes;
});