define(function() {
    'use strict';
    var partialPath = "src/modules/core/views/";
    return [
        {
            state: 'error',
            config: {
                url: '/error',
                controller: ['$rootScope', function($rootScope) {
                    $rootScope.errorPage = true;
                }],
                controllerAs: 'vm',
                templateUrl: partialPath + "error/index.html",
                data: {
                    pageTitle: 'Ops, não foi possível mostrar as informações...',
                    subTitle: 'Algo inesperado aconteceu'
                }
            }
        },
        {
            state: 'error.accessdenied',
            config: {
                parent: 'error',
                url: '/accessdenied',
                data: {
                    pageTitle: 'Ops!',
                    subTitle: 'Houve uma confusão...'
                },
                views: {
                    "error-content": {
                        templateUrl: partialPath + "error/accessdenied.html"
                    }
                }
            }
        },
        {
            state: 'error.500',
            config: {
                parent: 'error',
                url: '/500',
                data: {
                    roles: ['public'],
                    pageTitle: 'Ops, não foi possível mostrar as informações...',
                    subTitle: 'Algo inesperado aconteceu'
                },
                views: {
                    "error-content": {
                        templateUrl: partialPath + "error/500.html"
                    }
                }
            }
        },
        {
            state: 'error.404',
            config: {
                url: "/404",
                data: {
                    pageTitle: 'Oops...',
                    subTitle: 'Parece que estamos perdidos'
                },
                views: {
                    "error-content": {
                        templateUrl: partialPath + "error/404.html"
                    }
                }
            }
        }
    ];
});