define([], function() {
    'use strict';
    Controller.$inject = ["$rootScope", "$state", "MyGalleryData", "MyGallerySvc", "AuthorizationSvc"];
    /*@ngInject*/
    function Controller($rootScope, $state, MyGalleryData, MyGallerySvc, AuthorizationSvc) {
        var vm = this;
        vm.categories = MyGalleryData;

        $rootScope.$on("signedInGoogle", loadMyGalleryData);
        $rootScope.$on("signedOutGoogle", cleanMyGalleryData);

        function loadMyGalleryData() {
            if (($state.current.name === "editor.my-gallery") && AuthorizationSvc.isSignedInGoogle()) {
                AuthorizationSvc.isExistRootFolder()
                    .then(function(rootFolder) {
                        if (rootFolder) {
                            return MyGallerySvc.searchMetadataRoot(rootFolder.id);
                        }
                        return [];
                    })
                    .then(function(metadataRoot) {
                        if (metadataRoot) {
                            AuthorizationSvc.getFile(metadataRoot.id)
                                .then(function(myCategories) {
                                    vm.categories = myCategories;
                                });
                        }
                    });
            }
        }

        function cleanMyGalleryData() {
            vm.categories = [];
        }
    }

    return Controller;
});