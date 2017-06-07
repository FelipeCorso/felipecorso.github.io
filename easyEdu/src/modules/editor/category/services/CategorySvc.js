define(function () {
    'use strict';
    Service.$inject = ['$http', '$q', "AuthorizationSvc"];
    /*@ngInject*/
    function Service($http, $q, AuthorizationSvc) {
        var categories = {};
        var service = {};

        service.add = add;
        service.createQrCodeJson = createQrCodeJson;
        service.getCategory = getCategory;
        service.updateCategory = updateCategory;
        service.deleteCategory = deleteCategory;
        service.renameCategory = renameCategory;
        service.getMetadataRoot = getMetadataRoot;
        service.updateMetadataRoot = updateMetadataRoot;

        categories = {};

        return service;

        function add(category) {
            categories[category.id] = category;
        }

        function createQrCodeJson(category) {
            return AuthorizationSvc.createQrCodeJson(category);
        }

        function getCategory(categoryId) {
            if (!categoryId) {
                var future = $q.defer();
                future.reject("The parameter 'categoryId' must be passed");
                return future.promise;
            }
            return AuthorizationSvc.getFile(categoryId)
        }

        function updateCategory(category) {
            return AuthorizationSvc.updateJson(category.id, category, category.parent);
        }

        function deleteCategory(parentId) {
            return AuthorizationSvc.deleteFile(parentId);
        }

        function renameCategory(parentId, categoryNewName) {
            return AuthorizationSvc.renameFile(parentId, categoryNewName);
        }

        function getMetadataRoot(metadataRootId) {
            return AuthorizationSvc.getFile(metadataRootId);
        }

        function updateMetadataRoot(metadataRootId, metadataRoot) {
            return AuthorizationSvc.updateJson(metadataRootId, metadataRoot);
        }


    }

    return Service;
});