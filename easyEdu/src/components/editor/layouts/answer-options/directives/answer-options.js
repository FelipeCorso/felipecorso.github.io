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
        vm.doneAnswerOptions = doneAnswerOptions;
        vm.doneFile = doneFile;
        vm.removeFile = removeFile;

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

        function doneAnswerOptions(files, activity, answerType) {
            if (!files || !files.length) {
                return;
            }

            if (!activity.answerOptions) {
                activity.answerOptions = [];
            }

            angular.forEach(files, function(file) {
                var answerOption = angular.fromJson(file._xhr.response);
                answerOption.type = answerType;
                activity.correctAnswers += answerType === "CORRECT" ? 1 : 0;
                activity.answerOptions.push(answerOption);
            });
        }

        /**
         * Upload Callback
         * @param files
         */
        function doneFile(files, activity) {
            if (!files || !files.length) {
                return;
            }

            if (!activity.files) {
                activity.files = {};
            }

            var file = files[0];
            var fileType = file._file.type;
            if (/\/(png|jpeg|jpg|gif)$/.test(fileType)) {
                activity.files.image = angular.fromJson(file._xhr.response);
            } else {
                if (/\/(mp3)$/.test(fileType)) {
                    activity.files.audio = angular.fromJson(file._xhr.response);
                }
            }


            //activity.file = {link: 'http://localhost:8080/uploads/IMG_20140730_161209825_HDR.jpg'};

            // if (uploadType) {
            //     if (uploadType.toUpperCase() === 'ANSWER') {
            //         vm.answer = angular.fromJson(files[0]._xhr.response);
            //     } else {
            //         if (uploadType.toUpperCase() === 'ANSWER_OPTIONS') {
            //             var length = files.length;
            //             for (i = 0; i < length; i++) {
            //                 var item = angular.fromJson(files[i]._xhr.response);
            //                 vm.answerOptions.push(item[0]);
            //             }
            //         }
            //     }
            // }
            // vm.queueList = [];
            // vm.uploadIsDone = true;
        }

        /**
         * Remove Callback
         * @param file
         */
        function removeFile(file, activity) {
            if (!file) {
                return;
            }

            if (!activity.files) {
                activity.files = {};
            }

            var fileType = file._file.type;
            if (/\/(png|jpeg|jpg|gif)$/.test(fileType)) {
                activity.files.image = {};
            } else {
                if (/\/(mp3)$/.test(fileType)) {
                    activity.files.audio = {};
                }
            }
        }

    }

    return Component;
});