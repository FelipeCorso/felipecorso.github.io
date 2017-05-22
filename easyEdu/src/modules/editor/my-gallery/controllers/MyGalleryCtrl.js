define([], function() {
    'use strict';
    Controller.$inject = ["$rootScope", "$state", "MyGalleryData", "AuthorizationSvc"];
    /*@ngInject*/
    function Controller($rootScope, $state, MyGalleryData, AuthorizationSvc) {
        var vm = this;
        vm.categories = MyGalleryData;

        $rootScope.$on("getMyGalleryData", getMyGalleryData);

        function getMyGalleryData() {
            if (($state.current.name === "editor.my-gallery") && AuthorizationSvc.isSignedInGoogle()) {
                AuthorizationSvc.isExistRootFolder()
                    .then(function(rootFolder) {
                        if (rootFolder) {
                            return AuthorizationSvc.searchFile(rootFolder.id, 'metadata.json');
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
    }

    return Controller;
});