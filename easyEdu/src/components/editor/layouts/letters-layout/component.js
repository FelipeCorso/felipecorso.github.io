define([
    '../../../../config/namespace',
    './directives/letters-layout'
], function(namespace, lettersLayout) {
    'use strict';
    angular.module(namespace + '.components.editor.layouts.letters-layout', [namespace + '.editor'])
        .directive('editorLettersLayout', lettersLayout);
});