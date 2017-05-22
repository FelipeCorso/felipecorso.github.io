define([
    '../../config/namespace',
    './controllers/GameCtrl',
    './services/GameSvc',
    './config/module.routes'
], function(namespace,
            GameCtrl,
            GameSvc,
            moduleRoutes) {
    'use strict';
    angular.module(namespace + '.game', [
        'ui.router'
        , namespace + '.navigation'
    ])
        .controller('GameCtrl', GameCtrl)
        .factory('GameSvc', GameSvc)
        .run(['RouterHelper', function(RouterHelper) {
            RouterHelper.configureStates(moduleRoutes());
        }]);
});