define([
    '../../../../config/namespace',
    './directives/puzzle'
], function(namespace, puzzle) {
    'use strict';
    angular.module(namespace + '.components.editor.layouts.puzzle', [namespace + '.editor'])
        .directive('editorPuzzle', puzzle);
});