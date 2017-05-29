define([
    '../../../config/namespace',
    './directives/file-reader'
], function(namespace, fileReader) {
    'use strict';
    angular.module(namespace + '.components.game.file-reader', [namespace + '.game'])
        .directive('gameFileReader', fileReader);
});