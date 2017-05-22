define([], function() {
    'use strict';
    function Component() {
        return {
            restrict: 'E',
            templateUrl: 'src/components/editor/category/activity-type/view/_activity-type.html',
            controller: function() {
                var vm = this;

                vm.setType = setType;

                function setType(type) {
                    vm.selectedActivity.type = type;
                }

            },
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                selectedActivity: "="
            }
        };
    }

    return Component;
});