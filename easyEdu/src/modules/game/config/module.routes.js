define(function () {
    'use strict';

    function ModuleRoutes() {
        var partialPath = "src/modules/game/views/";
        var routes = [
            {
                state: 'game',
                config: {
                    url: "/game",
                    template: '<div ui-view></div>',
                    resolve: {
                        LoadGApi: LoadGApi,
                        UserInformationData: UserInformationData
                    }
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
                        CategoryData: ["UserInformationData", function () {
                            return {};
                        }]
                    },
                    templateUrl: partialPath + "category.html",
                    onEnter: ["$state", "$stateParams", function ($state, $stateParams) {
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
                        CategoriesData: ["UserInformationData", function () {
                            return [];
                        }],
                        CategoryData: CategoryData
                    },
                    url: "/mode/{categoryId}?{loaded:boolean}",
                    params: {
                        category: undefined
                    },
                    templateUrl: partialPath + "game-mode.html",
                    controller: "GameCtrl",
                    controllerAs: "vm",
                    onEnter: ["$state", "$stateParams", function ($state, $stateParams) {
                        if (!$stateParams.categoryId) {
                            $state.go("game.category", {}, {reload: true});
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
                        CategoriesData: ["UserInformationData", function () {
                            return [];
                        }],
                        CategoryData: ["UserInformationData", "$stateParams", function (UserInformationData, $stateParams) {
                            return $stateParams.category ? JSON.parse($stateParams.category) : undefined;
                        }]
                    },
                    url: "/play?gameMode?category",
                    templateUrl: partialPath + "play.html",
                    controller: "GameCtrl",
                    controllerAs: "vm",
                    onEnter: ["$state", "$stateParams", function ($state, $stateParams) {
                        if (!$stateParams.category) {
                            $state.go("game.category", {}, {reload: true});
                        } else {
                            $(".menu-toggler.sidebar-toggler").click();
                        }
                    }]
                }
            }
        ];

        LoadGApi.$inject = ["AuthorizationSvc"];
        /*@ngInject*/
        function LoadGApi(AuthorizationSvc) {
            AuthorizationSvc.isLoading = true;
            return AuthorizationSvc.init()
                .then(function (response) {
                    console.log(response);
                    return true;
                })
                .catch(function (error) {
                    console.error(error);
                    return false;
                })
                .finally(function () {
                    AuthorizationSvc.isLoading = false;
                });
        }

        UserInformationData.$inject = ["LoadGApi", "AuthorizationSvc", "$rootScope"];
        /*@ngInject*/
        function UserInformationData(LoadGApi, AuthorizationSvc, $rootScope) {
            if (LoadGApi && AuthorizationSvc.isSignedInGoogle()) {
                AuthorizationSvc.isLoading = true;
                return AuthorizationSvc.getUserInformation()
                    .then(function (response) {
                        $rootScope.$emit("setUserInformation", response);
                        return response;
                    })
                    .catch(function (error) {
                        console.error(error);
                        return {};
                    })
                    .finally(function () {
                        AuthorizationSvc.isLoading = false;
                    });
            }
            return {};
        }

        CategoriesData.$inject = ["UserInformationData", "$state", "$stateParams", 'GameSvc', "AuthorizationSvc"];
        /*@ngInject*/
        function CategoriesData(UserInformationData, $state, $stateParams, GameSvc, AuthorizationSvc) {
            if (!$stateParams.categoryId) {
                AuthorizationSvc.isLoading = true;
                return GameSvc.getDefaultCategories()
                    .then(function (response) {
                        return response;
                    })
                    .catch(function (error) {
                        console.error(error);
                        return $state.go("error.404", {}, {reload: true});
                    })
                    .finally(function () {
                        AuthorizationSvc.isLoading = false;
                    });
            }
            return [];
        }

        CategoryData.$inject = ["UserInformationData", "$state", "$stateParams", 'GameSvc', "AuthorizationSvc"];
        /*@ngInject*/
        function CategoryData(UserInformationData, $state, $stateParams, GameSvc, AuthorizationSvc) {
            if (!$stateParams.loaded) {
                AuthorizationSvc.isLoading = true;
                return GameSvc.getCategory($stateParams.categoryId)
                    .then(function (response) {
                        return response;
                    })
                    .catch(function (error) {
                        console.error(error);
                        return $state.go("error.404", {}, {reload: true});
                    })
                    .finally(function () {
                        AuthorizationSvc.isLoading = false;
                    });
            }
            return $stateParams.category;
        }

        return routes;
    }

    return ModuleRoutes;
});