define([
    '../../../config/namespace',
    './directives/insert-audio'
], function(namespace, insertAudio) {
    'use strict';
    angular.module(namespace + '.components.editor.insert-audio', [namespace + '.editor'])
        .directive('editorInsertAudio', insertAudio);
});