define(function() {
    'use strict';
    Service.$inject = ['$http', '$q', "AuthorizationSvc"];
    /*@ngInject*/
    function Service($http, $q, AuthorizationSvc) {
        var category = undefined;

        var service = {
            getCategory: getCategory,
            setCategory: setCategory,
            getDefaultCategories: getDefaultCategories
        };

        return service;

        function getCategory(categoryId) {
            if (!categoryId) {
                var future = $q.defer();
                future.reject("The parameter 'categoryId' must be passed");
                return future.promise;
            }
            return AuthorizationSvc.getQrCodeJson(categoryId);
        }

        function setCategory(categoriesParam) {
            category = categoriesParam;
        }

        function getDefaultCategories() {
            var future = $q.defer();
            future.resolve([]);
            return future.promise;
        }
    }

    return Service;
});