define([
    '../../../config/namespace',
    './directives/audio-src'
], function(namespace, embedSrc) {
    'use strict';
    angular.module(namespace + '.components.editor.audio-src', [namespace + '.editor'])
        .directive('embedSrc', embedSrc);
});