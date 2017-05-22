define(function () {
    'use strict';

    Service.$inject = [];
    /*@ngInject*/
    function Service() {

        this.getLevels = getLevels;

        var difficultyLevels = [
            {
                value: "EASY",
                label: "Fácil"
            },
            {
                value: "MEDIUM",
                label: "Médio"
            },
            {
                value: "HARD",
                label: "Difícil"
            },
            {
                value: "IMPOSSIBLE",
                label: "Impossível"
            }
        ];

        function getLevels() {
            return difficultyLevels;
        }

    }

    return Service;
});