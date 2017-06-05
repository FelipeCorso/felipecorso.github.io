define([
    '../../../config/namespace',
    './directives/pictures-layout'
], function(namespace, picturesLayout) {
    'use strict';
    angular.module(namespace + '.components.game.pictures-layout', [namespace + '.game'])
        .directive('gamePicturesLayout', picturesLayout);
});