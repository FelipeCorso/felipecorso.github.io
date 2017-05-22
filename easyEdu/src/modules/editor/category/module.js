define([
    '../../../config/namespace',
    './controllers/CategoryCtrl',
    './services/CategorySvc',
    './config/module.routes'
], function(namespace,
            CategoryCtrl,
            CategorySvc,
            moduleRoutes) {
    'use strict';
    angular.module(namespace + '.editor.category', [
        'ui.router'
        , namespace + '.navigation'
    ])
        .controller('CategoryCtrl', CategoryCtrl)
        .factory('CategorySvc', CategorySvc)
        .run(['RouterHelper', function(RouterHelper) {
            RouterHelper.configureStates(moduleRoutes());
        }]);
});