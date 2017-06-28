define([], function() {
    'use strict';
    function Component() {
        return {
            restrict: 'E',
            templateUrl: 'src/components/editor/category/create-category/view/_create-category.html',
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                category: "="
            }
        };
    }

    Controller.$inject = ["$state", "moment", "AuthorizationSvc"];
    function Controller($state, moment, AuthorizationSvc) {
        var METADATA_FILE_NAME = "metadata";
        var vm = this;
        vm.rootFolder = {};
        vm.metadata = {};
        vm.categoryMetadata = {};

        vm.saveCategory = saveCategory;

        function saveCategory() {
            if (AuthorizationSvc.isSignedInGoogle()) {
                AuthorizationSvc.isLoading = true;
                return AuthorizationSvc.isExistRootFolder()
                    .then(function(rootFolder) {
                        if (rootFolder) {
                            return rootFolder;
                        }
                        return AuthorizationSvc.createRootFolder()
                            .then(function(rootFolder) {
                                return AuthorizationSvc.createJson(METADATA_FILE_NAME, [], rootFolder.id)
                                    .then(function(metadata) {
                                        vm.metadata = metadata;
                                        return rootFolder;
                                    })
                                    .catch(function(error) {
                                        console.log(error);
                                    });
                            });
                    })
                    .then(function(rootFolder) {
                        vm.rootFolder = rootFolder;
                        return AuthorizationSvc.createFolder(vm.category.name, rootFolder.id);
                    })
                    .then(function(categoryFolder) {
                        vm.category.parent = categoryFolder.id;
                        vm.category.createdTime = moment().valueOf();
                        return AuthorizationSvc.createJson(METADATA_FILE_NAME, vm.category, categoryFolder.id);
                    })
                    .then(function(categoryMetadata) {
                        vm.category.id = categoryMetadata.id;
                        return AuthorizationSvc.searchFile(vm.rootFolder.id, "metadata.json");
                    })
                    .then(function(metadataRoot) {
                        vm.metadata = metadataRoot;
                        return AuthorizationSvc.getFile(vm.metadata.id);
                    })
                    .then(function(metadataContent) {
                        metadataContent.push({
                            id: vm.category.id,
                            name: vm.category.name,
                            createdTime: vm.category.createdTime
                        });
                        return AuthorizationSvc.updateJson(vm.metadata.id, metadataContent, vm.rootFolder.id);
                    })
                    .then(function() {
                        vm.category.metadataRoot = {
                            id: vm.metadata.id,
                            parent: vm.rootFolder.id
                        };
                        return AuthorizationSvc.updateJson(vm.category.id, vm.category, vm.category.parent);
                    })
                    .then(function() {
                        $state.go("editor.category.edit", {id: vm.category.id});
                    })
                    .catch(function(error) {
                        console.log(error);
                    })
                    .finally(function() {
                        AuthorizationSvc.isLoading = false;
                    });
            }
        }
    }

    return Component;
});