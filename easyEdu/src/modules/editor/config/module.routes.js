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
                    templateUrl: partialPath + "index.html",
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
        return AuthorizationSvc.init()
            .then(function (response) {
                console.log(response);
                return true;
            })
            .catch(function (error) {
                console.error(error);
                return false;
            });
    }

    UserInformationData.$inject = ["LoadGApi", "AuthorizationSvc"];
    /*@ngInject*/
    function UserInformationData(LoadGApi, AuthorizationSvc) {
        if (LoadGApi && AuthorizationSvc.isSignedInGoogle()) {
            return AuthorizationSvc.getUserInformation()
                .then(function (response) {
                    return response;
                })
                .catch(function (error) {
                    console.error(error);
                    return {};
                });
        }
        return {};
    }

    return ModuleRoutes;
});