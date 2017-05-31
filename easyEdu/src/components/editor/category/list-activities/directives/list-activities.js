define([], function() {
    'use strict';
    function Component() {
        return {
            restrict: 'E',
            templateUrl: 'src/components/editor/category/list-activities/view/_list-activities.html',
            controller: function() {
                var vm = this;

                vm.selectActivity = selectActivity;
                vm.getType = getType;

                function selectActivity(activity) {
                    vm.selectedActivity = angular.copy(activity);
                }

                function getType(type) {
                    var typeStr = "";
                    switch (type) {
                        case "LETTERS":
                            typeStr = "Letras";
                            break;
                        case "PICTURES":
                            typeStr = "Imagens";
                            break;
                        case "PUZZLE":
                            typeStr = "Quebra-cabeça";
                            break;
                        default:
                            typeStr = "";
                    }
                    return typeStr;
                }
            },
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                activities: "=",
                isAllSelected: "=allSelected",
                selectedActivity: "=",
                toggleAll: "&",
                optionToggled: "&"
            }
        };
    }

    return Component;
});