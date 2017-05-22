define([
    '../../../../config/namespace',
    './directives/memory-game'
], function(namespace, memoryGame) {
    'use strict';
    angular.module(namespace + '.components.editor.layouts.memory-game', [namespace + '.editor'])
        .directive('editorMemoryGame', memoryGame);
});