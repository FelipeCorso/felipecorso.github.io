define([], function() {
    'use strict';
    Controller.$inject = ["$scope", "$state", "$stateParams", "moment", "CategoryData", "CategorySvc", "AuthorizationSvc"];
    /*@ngInject*/
    function Controller($scope, $state, $stateParams, moment, CategoryData, CategorySvc, AuthorizationSvc) {
        var vm = this;

        vm.isAllSelected = false;
        vm.selectedActivity = undefined;
        vm.category = CategoryData;
        vm.categoryNewName = "";
        vm.isLoading = false;

        vm.optionToggled = optionToggled;
        vm.toggleAll = toggleAll;
        vm.addActivity = addActivity;
        vm.isEnabledBtnExport = isEnabledBtnExport;
        vm.getActivitiesToExport = getActivitiesToExport;
        vm.exportJSON = exportJSON;
        vm.generateQrCode = generateQrCode;
        vm.saveCategory = saveCategory;
        vm.deleteCategory = deleteCategory;
        vm.saveActivity = saveActivity;
        vm.deleteActivity = deleteActivity;
        vm.categoryImageSelected = categoryImageSelected;
        vm.categoryImageRemoved = categoryImageRemoved;
        vm.hasImage = hasImage;

        function optionToggled() {
            vm.isAllSelected = vm.category.activities.every(function(item) {
                return item.export;
            });
        }

        function toggleAll() {
            angular.forEach(vm.category.activities, function(activity) {
                activity.export = vm.isAllSelected;
            });
        }

        function addActivity() {
            vm.selectedActivity = {
                answers: [],
                correctAnswers: 0,
                export: vm.isAllSelected,
                level: "EASY",
                parent: vm.category.parent
            }
        }

        function isEnabledBtnExport() {
            return vm.category.activities ? vm.category.activities.filter(function(activity) {
                return activity.export;
            }).length : 0;
        }

        function getActivitiesToExport() {
            var selectedActivities = vm.category.activities.filter(function(activity) {
                return activity.export;
            });

            var category = angular.copy(vm.category);
            category.activities = selectedActivities;
            return category;
        }

        function exportJSON() {
            var category = getActivitiesToExport();

            var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(category));
            var dlAnchorElem = document.getElementById('downloadAnchorElem');
            dlAnchorElem.setAttribute("href", dataStr);
            dlAnchorElem.setAttribute("download", "activities.json");
            dlAnchorElem.click();
        }

        function generateQrCode() {
            var category = getActivitiesToExport();
            CategorySvc.createQrCodeJson(category)
                .then(function(categoryId) {
                    vm.qrCodeData = window.location.origin + window.location.pathname + "#/game/start?categoryId=" + categoryId;
                });
        }

        function saveCategory() {
            var newName = false;
            if (vm.categoryNewName && !angular.equals(vm.category.name, vm.categoryNewName)) {
                vm.category.name = vm.categoryNewName;
                newName = true;
            } else {
                vm.categoryNewName = vm.category.name;// Nome não pode ser ""
            }

            vm.isLoading = true;
            AuthorizationSvc.updateJson($stateParams.id, vm.category, vm.category.parent)
                .then(function() {
                    return AuthorizationSvc.getFile(vm.category.metadataRoot.id);
                })
                .then(function(metadata) {
                    angular.forEach(metadata, function(item) {
                        if (item.id === vm.category.id) {
                            item.image = vm.category.image;
                            item.name = vm.category.name;
                        }
                    });
                    return AuthorizationSvc.updateJson(vm.category.metadataRoot.id, metadata);
                })
                .then(function() {
                    if (newName) {
                        AuthorizationSvc.renameFile(vm.category.parent, vm.categoryNewName);
                    }
                })
                .catch(function(error) {
                    console.log(error);
                })
                .finally(function() {
                    vm.isLoading = false;
                });
        }

        function deleteCategory() {
            var result = confirm("Você tem certeza que deseja deletar a categoria?\nEssa ação não poderá ser desfeita!");
            if (result) {
                vm.isLoading = true;
                AuthorizationSvc.deleteFile(vm.category.parent)
                    .then(function() {
                        return AuthorizationSvc.getFile(vm.category.metadataRoot.id);
                    })
                    .then(function(metadata) {
                        angular.forEach(metadata, function(item, index) {
                            if (item.id === vm.category.id) {
                                metadata.splice(index, 1);
                            }
                        });
                        return AuthorizationSvc.updateJson(vm.category.metadataRoot.id, metadata);
                    })
                    .then(function() {
                        $state.go("editor.my-gallery");
                    })
                    .catch(function(error) {
                        console.error(error);
                    })
                    .finally(function() {
                        vm.isLoading = false;
                    });
            }
        }

        function saveActivity() {
            if (!vm.category.activities) {
                vm.category.activities = [];
            }
            if (vm.selectedActivity.id) {
                var i = 0;
                var length = vm.category.activities.length;
                for (; i < length; i++) {
                    var item = vm.category.activities[i];
                    if (item.id === vm.selectedActivity.id) {
                        vm.category.activities[i] = vm.selectedActivity;
                        break;
                    }
                }
            } else {
                vm.selectedActivity.id = moment().valueOf();
                vm.category.activities.push(vm.selectedActivity);
            }
            vm.selectedActivity = undefined;
        }

        function deleteActivity() {
            var result = confirm("Você tem certeza que deseja deletar esta atividade?\nEssa ação não poderá ser desfeita!");
            if (result && vm.selectedActivity.id) {
                var i = 0;
                var length = vm.category.activities.length;
                for (; i < length; i++) {
                    var item = vm.category.activities[i];
                    if (item.id === vm.selectedActivity.id) {
                        vm.category.activities.splice(i, 1);
                        break;
                    }
                }
                vm.selectedActivity = undefined;
            }
        }

        // A simple callback implementation.
        function categoryImageSelected(data) {
            if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
                var doc = data[google.picker.Response.DOCUMENTS][0];
                vm.category.image = {};
                vm.category.image.id = doc[google.picker.Document.ID];
                vm.category.image.name = doc[google.picker.Document.NAME];
                $scope.$apply();
            }
        }

        function hasImage() {
            return vm.category.image && vm.category.image.id;
        }

        function categoryImageRemoved() {
            vm.category.image = {};
        }
    }

    return Controller;
});