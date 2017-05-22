define([], function () {
    'use strict';
    function Component() {
        return {
            restrict: 'E',
            templateUrl: 'src/components/editor/layouts/letters-layout/view/_letters-layout.html',
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                activity: "="
            }
        };
    }

    Controller.$inject = [];
    /*@ngInject*/
    function Controller() {
        var ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var vm = this;

        vm.getSplitAnswer = getSplitAnswer;
        vm.leftLetters = getRandomLetters(9);
        vm.rightLetters = getRandomLetters(9);

        function getSplitAnswer() {
            return vm.activity && vm.activity.answer ? vm.activity.answer.replace(new RegExp(' ', 'g'), '-').split('') : [];
        }

        function getRandomLetter() {
            return ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
        }

        function getRandomLetters(length) {
            var array = [];
            var i = 0;
            for (; i < length; i++) {
                array.push(getRandomLetter());
            }
            return array;
        }
    }

    return Component;
});