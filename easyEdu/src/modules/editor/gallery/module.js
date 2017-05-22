define([
    '../../../config/namespace',
    './controllers/GalleryCtrl',
    './services/GallerySvc',
    './config/module.routes'
], function (namespace,
             GalleryCtrl,
             GallerySvc,
             moduleRoutes) {
    'use strict';
    angular.module(namespace + '.editor.gallery', ['ui.router', namespace + '.navigation'])
        .controller('GalleryCtrl', GalleryCtrl)
        .factory('GallerySvc', GallerySvc)
        .run(['PrimaryNavigation', 'RouterHelper', function (PrimaryNavigation, RouterHelper) {
            RouterHelper.configureStates(moduleRoutes);
            PrimaryNavigation.add(
                {
                    title: "Gallery",
                    stateName: "editor.gallery",
                    order: 0
                }
            );
        }]);
});