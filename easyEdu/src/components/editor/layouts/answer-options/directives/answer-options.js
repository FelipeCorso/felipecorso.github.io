define([], function() {
    'use strict';
    function Component() {
        return {
            restrict: 'E',
            templateUrl: 'src/components/editor/layouts/answer-options/view/_answer-options.html',
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                selectedActivity: "=",
                onSaveAction: "&",
                onDeleteAction: "&"
            }
        };
    }

    Controller.$inject = ["$window", "$state", 'DifficultyLevels'];
    /*@ngInject*/
    function Controller($window, $state, DifficultyLevels) {
        var vm = this;

        vm.difficultyLevels = DifficultyLevels.getLevels();

        vm.saveAction = saveAction;
        vm.deleteAction = deleteAction;
        vm.cancelAction = cancelAction;
        vm.testSelectedActivity = testSelectedActivity;

        function saveAction() {
            vm.onSaveAction();
        }

        function deleteAction() {
            vm.onDeleteAction();
        }

        function cancelAction() {
            vm.selectedActivity = undefined;
        }

        function testSelectedActivity() {
            var category = {activities: [vm.selectedActivity]};
            var url = $state.href("game.play", {category: JSON.stringify(category)});
            $window.open(url, '_blank');
        }

    }

    return Component;
});