define([
    '../../../config/namespace',
    './controllers/MyGalleryCtrl',
    './services/MyGallerySvc',
    './config/module.routes'
], function (namespace,
             MyGalleryCtrl,
             MyGallerySvc,
             moduleRoutes) {
    'use strict';
    angular.module(namespace + '.editor.my-gallery', ['ui.router', namespace + '.navigation'])
        .controller('MyGalleryCtrl', MyGalleryCtrl)
        .factory('MyGallerySvc', MyGallerySvc)
        .run(['PrimaryNavigation', 'RouterHelper', function (PrimaryNavigation, RouterHelper) {
            RouterHelper.configureStates(moduleRoutes());
            PrimaryNavigation.add(
                {
                    title: "My gallery",
                    stateName: "editor.my-gallery",
                    order: 1,
                    icon: "fa-book"
                }
            );
        }]);
});