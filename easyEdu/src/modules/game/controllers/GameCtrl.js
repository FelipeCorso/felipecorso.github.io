define([], function() {
    'use strict';
    Controller.$inject = ["$rootScope", "$scope", "$state", "$stateParams", "CategoriesData", "CategoryData"];
    /*@ngInject*/
    function Controller($rootScope, $scope, $state, $stateParams,  CategoriesData, CategoryData) {

        var difficultyLevels = ["EASY", "MEDIUM", "HARD", "IMPOSSIBLE"];
        var currentLevel;
        var currentLevelIndex;

        var vm = this;

        vm.categories = CategoriesData;
        vm.category = CategoryData;
        vm.categoryBase64 = undefined;
        vm.selectedActivity = {};
        vm.gameMode = $stateParams.gameMode || "SINGLE_PLAYER";

        vm.getCategories = getCategories;
        vm.setCategories = setCategories;
        vm.setCategory = setCategory;
        vm.setGameMode = setGameMode;
        vm.play = play;
        vm.actionNextPhase = actionNextPhase;
        vm.areThereMorePhases = areThereMorePhases;
        vm.handleJsonSelect = handleJsonSelect;
        vm.goToPlay = goToPlay;

        function getCategories() {
            return vm.categories;
        }

        function setCategories(categories) {
            vm.categories = categories;
        }

        function setCategory(category) {
            vm.category = category;
            //$state.go("game.game-mode");
        }

        function setGameMode(gameMode) {
            vm.gameMode = gameMode;
        }

        function raffleActivity(category) {
            var rafflesActivities = category.activities.filter(function(item) {
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
            vm.selectedActivity = raffleActivity(vm.category);
        }

        function play() {
            initLevel();
            selectActivity();
        }

        function actionNextPhase() {
            defineNextLevel();
            if (currentLevel) {
                selectActivity();
                if (!vm.selectedActivity) {
                    actionNextPhase();
                }
                // createTimer(); // pictures
                /*if (vm.activity) {
                 game.state.restart(); // letters
                 vm.isWinMatch = false; // pictures
                 } else {
                 actionNextPhase();
                 }*/
            }
        }

        function areThereMorePhases() {
            var nextLevel = getNextLevel();
            var nextPhaseActivities = vm.category.activities.filter(function(activity) {
                return activity.level === nextLevel;
            });
            return nextPhaseActivities && nextPhaseActivities.length;
        }

        function handleJsonSelect() {
            $scope.$watch('vm.categoryBase64', function() {
                var unwantedText = "data:;base64,";
                if (vm.categoryBase64 && vm.categoryBase64.startsWith(unwantedText)) {
                    vm.categoryBase64 = atob(vm.categoryBase64.replace(unwantedText, ""));
                    vm.category = JSON.parse(vm.categoryBase64);
                    $state.go("game.mode", {category: vm.category, categoryId: vm.category.id, loaded: true});
                }
            });
        }

        function getPlayParams(gameMode) {
            return {category: JSON.stringify(vm.category), gameMode: gameMode};
        }

        function goToPlay(gameMode) {
            $state.go("game.play", getPlayParams(gameMode))
        }

        /*vm.categories = [
         {
         "name": "Figuras geométricas",
         "alphabet": "",
         "type": "PICTURES",
         "image": {"link": "http://escolakids.uol.com.br/public/images/legenda/10c1181b437fed906146f859a4b9f898.jpg"},
         "activities": [
         {
         "tip": "Arraste apenas as figuras que representam quadrados",
         level: "EASY",
         answers: [],
         correctAnswers: 4,
         answerOptions: [
         {
         "image": {
         "link": "http://192.168.0.105:7070/uploads/bandeira Santa Catarina.jpg",
         "name": "bandeira Santa Catarina.jpg"
         },
         type: 'correct'
         },
         {
         "image": {
         "link": "http://192.168.0.105:7070/uploads/bandeira-rio-grande-do-sul.jpg",
         "name": "bandeira-rio-grande-do-sul.jpg"
         },
         type: 'incorrect'
         },
         {
         "image": {
         "link": "http://192.168.0.105:7070/uploads/bandeira_parana.jpg",
         "name": "bandeira parana.jpg"
         },
         type: 'correct'
         },
         {
         "image": {
         "link": "http://192.168.0.105:7070/uploads/bandeira Santa Catarina.jpg",
         "name": "bandeira Santa Catarina.jpg"
         },
         type: 'correct'
         },
         {
         "image": {
         "link": "http://192.168.0.105:7070/uploads/bandeira-rio-grande-do-sul.jpg",
         "name": "bandeira-rio-grande-do-sul.jpg"
         },
         type: 'incorrect'
         },
         {
         "image": {
         "link": "http://192.168.0.105:7070/uploads/bandeira_parana.jpg",
         "name": "bandeira parana.jpg"
         },
         type: 'correct'
         }
         ]
         },
         {
         "tip": "Arraste apenas as figuras que representam retângulos",
         level: "MEDIUM",
         answers: [],
         correctAnswers: 2,
         answerOptions: [
         {
         "image": {
         "link": "http://192.168.0.105:7070/uploads/bandeira Santa Catarina.jpg",
         "name": "bandeira Santa Catarina.jpg"
         },
         type: 'correct'
         },
         {
         "image": {
         "link": "http://192.168.0.105:7070/uploads/bandeira-rio-grande-do-sul.jpg",
         "name": "bandeira-rio-grande-do-sul.jpg"
         },
         type: 'incorrect'
         },
         {
         "image": {
         "link": "http://192.168.0.105:7070/uploads/bandeira_parana.jpg",
         "name": "bandeira parana.jpg"
         },
         type: 'correct'
         },
         {
         "image": {
         "link": "http://192.168.0.105:7070/uploads/bandeira Santa Catarina.jpg",
         "name": "bandeira Santa Catarina.jpg"
         },
         type: 'correct'
         },
         {
         "image": {
         "link": "http://192.168.0.105:7070/uploads/bandeira-rio-grande-do-sul.jpg",
         "name": "bandeira-rio-grande-do-sul.jpg"
         },
         type: 'incorrect'
         },
         {
         "image": {
         "link": "http://192.168.0.105:7070/uploads/bandeira_parana.jpg",
         "name": "bandeira parana.jpg"
         },
         type: 'correct'
         }
         ]
         }
         ]
         },
         {
         "name": "Bandeiras estados do Sul",
         "alphabet": "",
         "type": "LETTERS",
         "image": {"link": "https://upload.wikimedia.org/wikipedia/commons/0/09/Mapa_Regiao_Sul_do_Brasil_(somente).PNG"},
         "activities": [
         {
         "answer": "Paraná",// "Paraná"
         //"answer": "P",// "Paraná"
         "level": "EASY",
         "tip": "Estado sul brasileiro",
         "time": "05:00",
         "files": {
         "image": {
         "link": "http://192.168.0.105:7070/uploads/bandeira_parana.jpg",
         "name": "bandeira parana.jpg"
         }
         }
         },
         {
         "export": true,
         "$$hashKey": "object:35",
         "answer": "Santa Catarina",
         "tip": "Estado sul brasileiro",
         "time": "15:00",
         "level": "MEDIUM",
         "files": {
         "image": {
         "link": "http://192.168.0.105:7070/uploads/bandeira Santa Catarina.jpg",
         "name": "bandeira Santa Catarina.jpg"
         }
         }
         },
         {
         "export": true,
         "$$hashKey": "object:70",
         "answer": "Rio Grande do Sul",
         "tip": "Estado sul brasileiro",
         "time": "20:00",
         "level": "HARD",
         "files": {
         "image": {
         "link": "http://192.168.0.105:7070/uploads/bandeira-rio-grande-do-sul.jpg",
         "name": "bandeira-rio-grande-do-sul.jpg"
         }
         }
         }]
         }];*/

    }

    return Controller;
});