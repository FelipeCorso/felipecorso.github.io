define(function() {
    'use strict';

    function ModuleRoutes() {
        var partialPath = "src/modules/game/views/";
        var routes = [
            {
                state: 'game',
                config: {
                    url: "/game",
                    template: '<div class="container" ui-view></div>'
                }
            },
            {
                state: 'game.start',
                config: {
                    url: "/start?categoryId",
                    controller: "GameCtrl",
                    controllerAs: "vm",
                    resolve: {
                        CategoriesData: function() {
                            return [];
                        },
                        CategoryData: function() {
                            return {};
                        }
                    },
                    templateUrl: partialPath + "start.html",
                    onEnter: ["$state", "$stateParams", function($state, $stateParams) {
                        if ($stateParams.categoryId) {
                            $state.go("game.mode", {categoryId: $stateParams.categoryId});
                        }
                    }]
                }
            },
            {
                state: 'game.category',
                config: {
                    url: "/category?categoryId",
                    controller: "GameCtrl",
                    controllerAs: "vm",
                    resolve: {
                        CategoriesData: CategoriesData,
                        CategoryData: function() {
                            return {};
                        }
                    },
                    templateUrl: partialPath + "category.html",
                    onEnter: ["$state", "$stateParams", function($state, $stateParams) {
                        if ($stateParams.categoryId) {
                            $state.go("game.mode", {categoryId: $stateParams.categoryId});
                        }
                    }]
                }
            },
            {
                state: 'game.mode',
                config: {
                    resolve: {
                        CategoriesData: function() {
                            return [];
                        },
                        CategoryData: CategoryData
                    },
                    url: "/mode/{categoryId}?{loaded:boolean}",
                    params: {
                        category: undefined
                    },
                    templateUrl: partialPath + "game-mode.html",
                    controller: "GameCtrl",
                    controllerAs: "vm",
                    onEnter: ["$state", "$stateParams", function($state, $stateParams) {
                        if (!$stateParams.categoryId) {
                            $state.go("game.start", {}, {reload: true});
                        }
                        /* if (!$stateParams.category) {
                         // TODO: remover o comentário quando finalizar
                         // isSmartPhone only single player
                         // $state.go("error.404", {}, {reload: true});
                         }*/
                    }]
                }
            },
            {
                state: 'game.play',
                config: {
                    resolve: {
                        CategoriesData: function() {
                            return [];
                        },
                        CategoryData: function($stateParams) {
                            return $stateParams.category ? JSON.parse($stateParams.category) : undefined;
                        }
                    },
                    url: "/play?gameMode?category",
                    templateUrl: partialPath + "play.html",
                    controller: "GameCtrl",
                    controllerAs: "vm",
                    onEnter: ["$state", "$stateParams", function($state, $stateParams) {
                        if (!$stateParams.category) {
                            $state.go("game.start", {}, {reload: true});
                        }
                    }]
                }
            }
        ];

        CategoriesData.$inject = ["$state", "$stateParams", 'GameSvc'];
        /*@ngInject*/
        function CategoriesData($state, $stateParams, GameSvc) {
            if (!$stateParams.categoryId) {
                return GameSvc.getDefaultCategories()
                    .then(function(response) {
                        return response;
                    })
                    .catch(function(error) {
                        console.error(error);
                        return $state.go("error.404", {}, {reload: true});
                    });
            }
            return [];
        }

        CategoryData.$inject = ["$state", "$stateParams", 'GameSvc'];
        /*@ngInject*/
        function CategoryData($state, $stateParams, GameSvc) {
            if (!$stateParams.loaded) {
                return GameSvc.getCategory($stateParams.categoryId)
                    .then(function(response) {
                        return response;
                    })
                    .catch(function(error) {
                        console.error(error);
                        return $state.go("error.404", {}, {reload: true});
                    });
            }
            return $stateParams.category;
        }

        return routes;
    }

    return ModuleRoutes;
});