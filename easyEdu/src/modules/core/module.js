define([
    '../../config/namespace',
    './config/module.routes',
    './provider/RouterHelperProvider',
    './services/AuthorizationSvc'
], function (
    namespace,
    moduleRoutes,
    RouterHelperProvider,
    AuthorizationSvc
) {
    'use strict';
    angular.module(namespace + '.core', ['ui.router'])
        .service("AuthorizationSvc", AuthorizationSvc)
        .provider('RouterHelper',RouterHelperProvider)
        .run(['RouterHelper', function(RouterHelper) {
            RouterHelper.configureStates(moduleRoutes);
        }]);
});