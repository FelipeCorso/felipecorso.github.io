define(function() {
    'use strict';

    function ModuleRoutes() {
        var partialPath = "src/modules/editor/category/views/";
        var routes = [
            {
                state: 'editor.category',
                config: {
                    abstract: true,
                    url: "/category",
                    template: "<div ui-view></div>"
                }
            },
            {
                state: 'editor.category.add',
                config: {
                    controller: "CategoryCtrl",
                    controllerAs: "vm",
                    resolve: {
                        CategoryData: function() {
                            return {};
                        }
                    },
                    url: "/add",
                    templateUrl: partialPath + "add.html"
                }
            },
            {
                state: 'editor.category.edit',
                config: {
                    controller: "CategoryCtrl",
                    controllerAs: "vm",
                    resolve: {
                        CategoryData: CategoryData
                    },
                    url: "/edit/{id}",
                    templateUrl: partialPath + "edit.html"
                }
            }
        ];

        CategoryData.$inject = ["LoadGApi", "$state", "$stateParams", 'AuthorizationSvc'];
        /*@ngInject*/
        function CategoryData(LoadGApi, $state, $stateParams, AuthorizationSvc) {
            if ($stateParams.id) {
                AuthorizationSvc.isLoading = true;
                return AuthorizationSvc.getFile($stateParams.id)
                    .then(function(response) {
                        return response;
                    })
                    .catch(function(error) {
                        console.error(error);
                        return $state.go("error.404", {}, {reload: true});
                    })
                    .finally(function() {
                        AuthorizationSvc.isLoading = false;
                    });
            }
            return $state.go("error.404", {}, {reload: true});
        }

        return routes;
    }

    return ModuleRoutes;
});