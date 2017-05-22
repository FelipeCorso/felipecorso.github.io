define([
    '../../../config/namespace',
    './directives/insert-image'
], function(namespace, insertImage) {
    'use strict';
    angular.module(namespace + '.components.editor.insert-image', [namespace + '.editor'])
        .directive('editorInsertImage', insertImage);
});