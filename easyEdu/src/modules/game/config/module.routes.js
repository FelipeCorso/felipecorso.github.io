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
                    templateUrl: partialPath + "start.html",
                    controller: "GameCtrl",
                    controllerAs: "vm",
                    resolve: {
                        CategoriesData: CategoriesData,
                        CategoryData: function() {
                            return {};
                        }
                    },
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
                    url: "/category",
                    templateUrl: partialPath + "category.html",
                    onEnter: ["$state", "$stateParams", function($state, $stateParams) {
                        // if (!$stateParams.categoryId) {
                        //     $state.go("game.start", {}, {reload: true});
                        // }
                    }]
                }
            },
            {
                state: 'game.mode',
                config: {
                    url: "/mode?categoryId",
                    params: {
                        category: undefined
                    },
                    templateUrl: partialPath + "game-mode.html",
                    controller: "GameCtrl",
                    controllerAs: "vm",
                    resolve: {
                        CategoriesData: function() {
                            return [];
                        },
                        CategoryData: CategoryData
                    },
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
                    url: "/play",
                    params: {
                        category: undefined,
                        gameMode: undefined
                    },
                    templateUrl: partialPath + "play.html",
                    controller: "GameCtrl",
                    controllerAs: "vm",
                    resolve: {
                        CategoriesData: function() {
                            return [];
                        },
                        CategoryData: function($stateParams) {
                            return $stateParams.category;
                        }
                    },
                    onEnter: ["$state", "$stateParams", function($state, $stateParams) {
                        if (!$stateParams.category || !$stateParams.gameMode) {
                            // TODO: remover o comentário quando finalizar
                            // $state.go("error.404", {}, {reload: true});
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
            if ($stateParams.categoryId) {
                return GameSvc.getCategory($stateParams.categoryId)
                    .then(function(response) {
                        return response;
                    })
                    .catch(function(error) {
                        console.error(error);
                        return $state.go("error.404", {}, {reload: true});
                    });
            }
            return {};
        }

        return routes;
    }

    return ModuleRoutes;
});