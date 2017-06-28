define(function () {
    'use strict';
    appConfig.$inject = ['$urlRouterProvider', '$urlMatcherFactoryProvider'];
    /*@ngInject*/
    function appConfig($urlRouterProvider, $urlMatcherFactory) {
        $urlRouterProvider
            .when('', '/game/category')
            .when('/editor', '/editor/gallery')
            .when('/editor/', '/editor/gallery')
            .when('/game', '/game/category')

            /**
             * Redirect to root
             */
            .otherwise('/game/category');

        $urlMatcherFactory.type('boolean',
            {
                name: 'boolean',
                decode: function (val) {
                    return val == true ? true : val == "true" ? true : false
                },
                encode: function (val) {
                    return val ? 1 : 0;
                },
                equals: function (a, b) {
                    return this.is(a) && a === b;
                },
                is: function (val) {
                    return [true, false, 0, 1].indexOf(val) >= 0
                },
                pattern: /bool|true|0|1/
            });
    }

    return appConfig;
});