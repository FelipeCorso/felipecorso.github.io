define([
    '../../../../config/namespace',
    './directives/list-activities'
], function(namespace, listActivities) {
    'use strict';
    angular.module(namespace + '.components.editor.category.list-activities', [namespace + '.editor'])
        .directive('editorCategoryListActivities', listActivities);
});