define(function() {
    'use strict';
    Service.$inject = ['$http', '$q', "$state", "AuthorizationSvc"];
    /*@ngInject*/
    function Service($http, $q, $state, AuthorizationSvc) {
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
            $http.get("src/data/categories-default.json")
                .then(function(response) {
                    future.resolve(response.data);
                })
                .catch(function(error) {
                    future.reject(error);
                    console.error(error);
                    $state.go("game.start", {}, {reload: true});
                });
            return future.promise;
        }
    }

    return Service;
});