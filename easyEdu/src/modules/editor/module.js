define([
    '../../config/namespace',
    './config/module.routes'
], function(namespace,
            moduleRoutes) {
    'use strict';
    angular.module(namespace + '.editor', ['ui.router', namespace + '.navigation'])
        .run(['RouterHelper', function(RouterHelper) {
            RouterHelper.configureStates(moduleRoutes());
        }]);
});
// define([
//     '../../config/namespace',
//     './gallery/controllers/GalleryCtrl',
//     './my-gallery/controllers/MyGalleryCtrl',
//     './gallery/services/GallerySvc',
//     './my-gallery/services/MyGallerySvc',
//     './config/module.routes'
// ], function(namespace,
//             GalleryCtrl,
//             MyGalleryCtrl,
//             GallerySvc,
//             MyGallerySvc,
//             moduleRoutes) {
//     'use strict';
//     angular.module(namespace + '.editor', ['ui.router', namespace + '.navigation'])
//         .controller('GalleryCtrl', GalleryCtrl)
//         .controller('MyGalleryCtrl', MyGalleryCtrl)
//         .factory('GallerySvc', GallerySvc)
//         .factory('MyGallerySvc', MyGallerySvc)
//         .run(['PrimaryNavigation', 'RouterHelper', function(PrimaryNavigation, RouterHelper) {
//             RouterHelper.configureStates(moduleRoutes);
//             PrimaryNavigation.add(
//                 {
//                     title: "Gallery",
//                     // stateName: "editor.gallery",
//                     stateName: "editor",
//                     order: 0
//                 }
//             );
//             PrimaryNavigation.add(
//                 {
//                     title: "My gallery",
//                     stateName: "editor.my-gallery",
//                     order: 1
//                 }
//             );
//         }]);
// });