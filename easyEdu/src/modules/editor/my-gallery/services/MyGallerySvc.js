define(function () {
    'use strict';
    Service.$inject = ["AuthorizationSvc"];
    /*@ngInject*/
    function Service(AuthorizationSvc) {

        var service = {};
        service.getMyGalleryData = getMyGalleryData;
        service.searchMetadataRoot = searchMetadataRoot;

        return service;

        function getMyGalleryData(metadataId) {
            return AuthorizationSvc.getFile(metadataId);
        }

        function searchMetadataRoot(rootFolderId) {
            return AuthorizationSvc.searchFile(rootFolderId, 'metadata.json');
        }
    }

    return Service;
});