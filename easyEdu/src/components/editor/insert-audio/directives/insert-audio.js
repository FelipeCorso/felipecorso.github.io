define([], function () {
    'use strict';
    function Component() {
        return {
            restrict: 'E',
            templateUrl: 'src/components/editor/insert-audio/view/_insert-audio.html',
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                model: "="
            }
        };
    }

    Controller.$inject = ["$rootScope", "AuthorizationSvc"];
    /*@ngInject*/
    function Controller($rootScope, AuthorizationSvc) {
        var vm = this;

        vm.authSvc = AuthorizationSvc;
        vm.hasAudio = hasAudio;
        vm.audioSelected = audioSelected;
        vm.audioRemoved = audioRemoved;
        vm.getAudioSrc = getAudioSrc;

        // A simple callback implementation.
        function audioSelected(data) {
            if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
                var doc = data[google.picker.Response.DOCUMENTS][0];
                vm.model.audio = newAudio(doc);

                $rootScope.$apply();
            }
        }

        function newAudio(doc) {
            var audio = {};
            audio.id = doc[google.picker.Document.ID];
            audio.name = doc[google.picker.Document.NAME];

            return audio;
        }

        function audioRemoved() {
            vm.model.audio = {};
        }

        function hasAudio() {
            return vm.model && vm.model.audio && vm.model.audio.id;
        }

        function getAudioSrc() {
            return hasAudio() ? "https://drive.google.com/uc?export=view&id=" + vm.model.audio.id : "";
        }

    }

    return Component;
});