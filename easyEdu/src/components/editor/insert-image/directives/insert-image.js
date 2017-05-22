define([], function() {
    'use strict';
    function Component() {
        return {
            restrict: 'E',
            templateUrl: 'src/components/editor/insert-image/view/_insert-image.html',
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                answerType: "@",
                altImage: "@",
                model: "=",
                multipleSelect: "="
            }
        };
    }

    Controller.$inject = ["$scope", "AuthorizationSvc"];
    /*@ngInject*/
    function Controller($scope, AuthorizationSvc) {
        var vm = this;

        vm.authSvc = AuthorizationSvc;
        vm.hasImage = hasImage;
        vm.imageSelected = imageSelected;
        vm.imageRemoved = imageRemoved;
        vm.removeImage = removeImage;

        // A simple callback implementation.
        function imageSelected(data) {
            if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
                if (vm.multipleSelect) {
                    if (!vm.model.answerOptions) {
                        vm.model.answerOptions = [];
                    }
                    var docs = data[google.picker.Response.DOCUMENTS];
                    var docsLength = docs.length;
                    for (var i = 0; i < docsLength; i++) {
                        var answerOption = {};
                        answerOption.image = newImage(docs[i]);
                        answerOption.type = vm.answerType;
                        vm.model.answerOptions.push(answerOption);
                        vm.model.correctAnswers += vm.answerType === "CORRECT" ? 1 : 0;
                    }
                } else {
                    var doc = data[google.picker.Response.DOCUMENTS][0];
                    vm.model.image = newImage(doc);
                }


                $scope.$apply();
            }
        }

        function newImage(doc) {
            var image = {};
            image.id = doc[google.picker.Document.ID];
            image.name = doc[google.picker.Document.NAME];

            return image;
        }

        function hasImage() {
            return vm.model.image && vm.model.image.id;
        }

        function imageRemoved() {
            vm.model.image = {};
        }

        function removeImage(image) {
            if (image.type === "CORRECT") {
                vm.model.correctAnswers -= 1;
            }
            vm.model.answerOptions =
                vm.model.answerOptions.filter(function(item) {
                    return !angular.equals(item, image);
                });
        }
    }

    return Component;
});