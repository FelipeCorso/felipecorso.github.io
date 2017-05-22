define([
    '../../../config/namespace',
    './directives/letters-layout'
], function(namespace, lettersLayout) {
    'use strict';
    angular.module(namespace + '.components.game.letters-layout', [namespace + '.game'])
        .directive('gameLettersLayout', lettersLayout);
});