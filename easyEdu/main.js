requirejs.config({
    baseUrl: './',
    paths: {
        jquery: 'vendor/jquery/dist/jquery.min',
        angular: 'vendor/angular/angular.min',
        'angular-route': 'vendor/angular-route/angular-route.min',
        'angular-ui-router': 'vendor/angular-ui-router/release/angular-ui-router.min',
        moment: 'vendor/moment/min/moment.min',
        'angular-moment': 'vendor/angular-moment/angular-moment.min',
        lodash: 'vendor/lodash/dist/lodash.min',
        DragDropTouch: 'src/components/game/pictures-layout/vendor/DragDropTouch',
        qrcode: 'vendor/qrcode-generator/js/qrcode',
        'qrcode-utf8': 'vendor/qrcode-generator/js/qrcode_UTF8',
        'monospaced.qrcode': 'vendor/angular-qrcode/angular-qrcode',
        'angular-qrcode': 'vendor/angular-qrcode/angular-qrcode',
        qrcode_UTF8: 'vendor/qrcode-generator/js/qrcode_UTF8',
        Hammer: "vendor/hammerjs/hammer.min"
    },
    packages: [

    ],
    shim: {
        jquery: {
            exports: 'jQuery'
        },
        angular: {
            exports: 'angular',
            deps: [
                'jquery'
            ]
        },
        app: {
            deps: [
                'angular',
                'jquery'
            ]
        },
        'angular-ui-router': {
            deps: [
                'angular',
                'angular-route'
            ]
        },
        'angular-route': {
            deps: [
                'angular'
            ]
        },
        moment: {
            exports: 'moment'
        },
        'angular-moment': {
            deps: [
                'moment',
                'angular'
            ]
        },
        qrcode: {
            exports: 'qrcode'
        },
        'qrcode-utf8': {
            deps: [
                'qrcode'
            ]
        }
    }
});

/*require([
 'angular',
 'angular-ui-router',
 'angular-route',
 'lodash',
 'moment',
 'angular-moment'
 ], function () {
 require(['app'], function (app) {
 angular.bootstrap(document, [app.name]);
 });
 });*/
require([
    'jquery',
    'app'
], function($, app) {
    angular.bootstrap(document, [app.name], {
        strictDi: false
    });
});
