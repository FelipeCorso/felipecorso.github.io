define(function() {
    'use strict';
    appConfig.$inject = ['$urlRouterProvider'];
    /*@ngInject*/
    function appConfig($urlRouterProvider) {
      $urlRouterProvider
        .when('', '/game/start')
        .when('/editor', '/editor/gallery')
        .when('/editor/', '/editor/gallery')
        .when('/game', '/game/start')

        /**
         * Redirect to root
         */
        .otherwise('/game/start');
    }

    return appConfig;
});
