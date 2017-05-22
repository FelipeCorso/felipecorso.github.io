define([], function() {
    'use strict';
    function Component() {
        return {
            restrict: 'E',
            templateUrl: 'src/components/editor/layouts/puzzle/view/_puzzle.html',
            controller: function() {},
            controllerAs: 'vm',
            bindToController: true,
            scope: {
            }
        };
    }

    return Component;
});