define(function () {
    'use strict';
    function ModuleRoutes() {
        var partialPath = "src/modules/editor/views/";
        return [
            {
                state: 'editor',
                config: {
                    url: "/editor",
                    controller: 'EditorCtrl as vm',
                    // abstract: true,
                    template: '<div ui-view></div>',
                    resolve: {
                        LoadGApi: LoadGApi,
                        UserInformationData: UserInformationData
                    }
                }
            }
        ];
    }

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

    return ModuleRoutes;
});