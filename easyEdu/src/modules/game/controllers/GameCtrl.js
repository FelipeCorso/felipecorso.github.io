define([], function () {
    'use strict';
    Controller.$inject = ["$rootScope", "$scope", "$state", "$stateParams", "CategoriesData", "CategoryData"];
    /*@ngInject*/
    function Controller($rootScope, $scope, $state, $stateParams, CategoriesData, CategoryData) {

        var difficultyLevels = ["EASY", "MEDIUM", "HARD", "IMPOSSIBLE"];
        var currentLevel;
        var currentLevelIndex;

        var vm = this;

        vm.categories = CategoriesData;
        vm.category = CategoryData;
        vm.categoryBase64 = undefined;
        vm.selectedActivity = {};
        vm.gameMode = $stateParams.gameMode || "SINGLE_PLAYER";
        vm.gameModes = [
            {
                icon: "fa-user",
                label: "Único jogador",
                type: "SINGLE_PLAYER"
            },
            {
                icon: "fa-users",
                label: "Multijogador",
                type: "MULTIPLAYER"
            }];
        vm.isWonMatch = false;
        vm.isWonGame = false;
        vm.isGameOver = false;
        vm.isLeftWonMatch = false;
        vm.isLeftWonGame = false;
        vm.isLeftGameOver = false;
        vm.isRightWonMatch = false;
        vm.isRightWonGame = false;
        vm.isRightGameOver = false;
        var collectionLeft = ["vm.isLeftWonMatch", "vm.isLeftWonGame"];
        var collectionRight = ["vm.isRightWonMatch", "vm.isRightWonGame"];

        vm.setGameMode = setGameMode;
        vm.play = play;
        vm.actionNextPhase = actionNextPhase;
        vm.areThereMorePhases = areThereMorePhases;
        vm.handleJsonSelect = handleJsonSelect;
        vm.goToPlay = goToPlay;

        function setGameMode(gameMode) {
            vm.gameMode = gameMode;
        }

        function raffleActivity(category) {
            var rafflesActivities = category.activities.filter(function (item) {
                return item.level === currentLevel;
            });
            if (rafflesActivities && rafflesActivities.length) {
                var activity = _.shuffle(angular.copy(rafflesActivities))[0];
                if (activity.type === "PICTURES") {
                    activity.answerOptions = raffleAnswerOptions(activity.answerOptions);
                }
                return activity;
            }

            return undefined;
        }

        function raffleAnswerOptions(answerOptions) {
            if (answerOptions) {
                answerOptions = _.shuffle(answerOptions);
            }
            return answerOptions;
        }

        function initLevel() {
            currentLevelIndex = 0;
            currentLevel = difficultyLevels[currentLevelIndex];
        }

        function getNextLevel() {
            return difficultyLevels[currentLevelIndex + 1];
        }

        function defineNextLevel() {
            currentLevelIndex += 1;
            currentLevel = difficultyLevels[currentLevelIndex];
        }

        function selectActivity() {
            if (vm.gameMode && vm.gameMode === "MULTIPLAYER") {
                vm.selectedActivityLeft = raffleActivity(vm.category);
                vm.selectedActivityRight = raffleActivity(vm.category);
            } else {
                vm.selectedActivity = raffleActivity(vm.category);
            }
        }

        function play() {
            initLevel();
            selectActivity();
            cleanGameStatus();
            watchGameOver();
        }

        function actionNextPhase() {
            defineNextLevel();
            if (currentLevel) {
                selectActivity();
                if (!vm.selectedActivity) {
                    actionNextPhase();
                } else {
                    if (vm.gameMode && vm.gameMode === "MULTIPLAYER") {
                        cleanGameStatus();
                    }
                }
            }
        }

        function watchGameOver() {
            createWatchGroup(collectionLeft, vm.isRightGameOver);
            createWatchGroup(collectionRight, vm.isLeftGameOver);
        }

        function createWatchGroup(collection, variable) {
            $scope.$watchGroup(collection, function (newValues) {
                variable = newValues[0] || newValues[1];
            });
        }

        function cleanWatchGroup(collection) {
            $scope.$watchGroup(collection, function () {
            });
        }

        $scope.$on("$destroy", function () {
            cleanWatchGroup(collectionLeft);
            cleanWatchGroup(collectionRight);
        });

        function cleanGameStatus() {
            vm.isLeftWonMatch = false;
            vm.isLeftWonGame = false;
            vm.isRightWonMatch = false;
            vm.isRightWonGame = false;
        }

        function areThereMorePhases() {
            var nextLevel = getNextLevel();
            var nextPhaseActivities = vm.category.activities.filter(function (activity) {
                return activity.level === nextLevel;
            });
            return nextPhaseActivities && nextPhaseActivities.length;
        }

        function handleJsonSelect() {
            $scope.$watch('vm.categoryBase64', function () {
                var unwantedText = "data:;base64,";
                if (vm.categoryBase64 && vm.categoryBase64.startsWith(unwantedText)) {
                    vm.categoryBase64 = atob(vm.categoryBase64.replace(unwantedText, ""));
                    vm.category = JSON.parse(vm.categoryBase64);
                    $state.go("game.mode", {category: vm.category, categoryId: vm.category.id, loaded: true});
                }
            });
        }

        /**
         * O stringify é necessário para passar o assunto para a rota game.play.
         * Nessa rota é feito o parse para um objeto novamente.
         *
         * @param gameMode
         * @returns {{category, gameMode: *}}
         */
        function getPlayParams(gameMode) {
            return {category: JSON.stringify(vm.category), gameMode: gameMode};
        }

        function goToPlay(gameMode) {
            $state.go("game.play", getPlayParams(gameMode));
        }
    }

    return Controller;
});