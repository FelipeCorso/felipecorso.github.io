define([
    '../../../config/namespace',
    './directives/pictures-layout',
    'dndLists'
], function(namespace, picturesLayout) {
    'use strict';
    angular.module(namespace + '.components.game.pictures-layout', [namespace + '.game', 'dndLists'])
        .directive('gamePicturesLayout', picturesLayout);
});