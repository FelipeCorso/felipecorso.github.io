define(function() {
    'use strict';
    function ModuleRoutes() {
        var partialPath = "src/modules/editor/views/";
        var routes = [
            {
                state: 'editor',
                config: {
                    url: "/editor",
                    // controller: 'contactsCtrl as vm',
                    // abstract: true,
                    templateUrl: partialPath + "index.html"
                    // template: '<div ui-view></div>'
                    ,
                    resolve: {
                        LoadAuth: LoadAuth
                    }
                }
            }
        ];

        LoadAuth.$inject = ["AuthorizationSvc"];
        /*@ngInject*/
        function LoadAuth(AuthorizationSvc) {
            return AuthorizationSvc.initialized
        }

        return routes;
    }

    return ModuleRoutes;
});