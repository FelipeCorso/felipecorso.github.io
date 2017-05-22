define([
    '../../../../config/namespace',
    './directives/multiple-uploads',
    'angular-file-upload'
], function(namespace, Directive) {
    'use strict';
    angular.module(namespace + '.components.editor.layouts.multiple-uploads', [namespace + '.editor', 'angularFileUpload'])
        .directive('editorMultipleUploads', Directive);
});