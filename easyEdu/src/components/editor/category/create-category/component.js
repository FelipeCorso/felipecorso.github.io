define([
    '../../../../config/namespace',
    './directives/create-category'
], function(namespace, createCategory) {
    'use strict';
    angular.module(namespace + '.components.editor.category.create-category', [namespace + '.editor'])
        .directive('editorCategoryCreateCategory', createCategory);
});