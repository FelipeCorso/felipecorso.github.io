define([
    '../../../../config/namespace',
    './directives/activity-type'
], function(namespace, activityType) {
    'use strict';
    angular.module(namespace + '.components.editor.category.activity-type', [namespace + '.editor'])
        .directive('editorCategoryActivityType', activityType);
});