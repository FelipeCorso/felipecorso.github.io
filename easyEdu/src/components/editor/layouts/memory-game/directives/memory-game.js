define([], function() {
    'use strict';
    function Component() {
        return {
            restrict: 'E',
            templateUrl: 'src/components/editor/layouts/memory-game/view/_memory-game.html',
            controller: function() {},
            controllerAs: 'vm',
            bindToController: true,
            scope: {
            }
        };
    }

    return Component;
});