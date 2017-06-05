define(function () {
    'use strict';
    Service.$inject = ['$http', '$q'];
    /*@ngInject*/
    function Service($http, $q) {

        var service = {};
        service.getDefaultCategories = getDefaultCategories;

        return service;

        function getDefaultCategories() {
            var future = $q.defer();
            $http.get("src/data/default-categories.json")
                .then(function (response) {
                    future.resolve(response.data);
                })
                .catch(function (error) {
                    future.reject(error);
                    console.error(error);
                });
            return future.promise;
        }
    }

    return Service;
});