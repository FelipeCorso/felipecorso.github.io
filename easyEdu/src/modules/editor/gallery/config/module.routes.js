define(function () {
    'use strict';

    function ModuleRoutes() {
        var partialPath = "src/modules/editor/gallery/view/";
        return [
            {
                state: 'editor.gallery',
                config: {
                    url: "/gallery",
                    controller: 'GalleryCtrl as vm',
                    templateUrl: partialPath + "index.html",
                    resolve: {
                        GalleryData: GalleryData
                    }
                }
            }
        ];
    }

    GalleryData.$inject = ["LoadGApi", "GallerySvc", "AuthorizationSvc"];
    /*@ngInject*/
    function GalleryData(LoadGApi, GallerySvc, AuthorizationSvc) {
        AuthorizationSvc.isLoading = true;
        return GallerySvc.getDefaultCategories()
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.error(error);
                return {};
            })
            .finally(function () {
                AuthorizationSvc.isLoading = false;
            });
    }

    return ModuleRoutes;
});