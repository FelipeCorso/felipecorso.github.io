define([], function() {
    'use strict';
    function Component() {
        return {
            restrict: 'E',
            templateUrl: 'src/components/game/pictures-layout/view/_pictures-layout.html',
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                actionNextPhase: "&",
                activity: "=",
                category: "=",
                gameMode: "=",
                areThereMorePhases: "=",
                play: "&",
                customClass: "@"
            }
        }
    }

    Controller.$inject = ["$scope", "moment", "$interval"];
    /*@ngInject*/
    function Controller($scope, moment, $interval) {
        var _ = require('lodash');
        var timerPromise;
        var vm = this;
        vm.isWinMatch = false;
        vm.isWinGame = false;
        vm.isGameOver = false;
        var answerOptions;
        /*
         var difficultyLevels = ["EASY", "MEDIUM", "HARD", "IMPOSSIBLE"];
         var currentLevel;
         var currentLevelIndex = 0;
         */

        init();

        vm.actionPlayAgain = actionPlayAgain;
        // vm.actionNextPhase = actionNextPhase;
        vm.dndDragEnd = dndDragEnd;
        vm.getTimeResult = getTimeResult;

        vm.lists = [
            {
                label: "Men",
                allowedTypes: ['man'],
                max: 4,
                people: [
                    {name: "Bob", type: "man"},
                    {name: "Charlie", type: "man"},
                    {name: "Dave", type: "man"}
                ]
            },
            {
                label: "Women",
                allowedTypes: ['woman'],
                max: 4,
                people: [
                    {name: "Alice", type: "woman"},
                    {name: "Eve", type: "woman"},
                    {name: "Peggy", type: "woman"}
                ]
            },
            {
                label: "People",
                allowedTypes: ['man', 'woman'],
                max: 6,
                people: [
                    {name: "Frank", type: "man"},
                    {name: "Mallory", type: "woman"},
                    {name: "Alex", type: "unknown"},
                    {name: "Oscar", type: "man"},
                    {name: "Wendy", type: "woman"}
                ]
            }
        ];

        vm.containers = [
            [
                {
                    "items": [
                        {
                            "label": "all 10",
                            "effectAllowed": "all"
                        },
                        {
                            "label": "all 11",
                            "effectAllowed": "all"
                        },
                        {
                            "label": "all 13",
                            "effectAllowed": "all"
                        },
                        {
                            "label": "all 14",
                            "effectAllowed": "all"
                        },
                        {
                            "label": "all 15",
                            "effectAllowed": "all"
                        },
                        {
                            "label": "all 12",
                            "effectAllowed": "all"
                        },
                        {
                            "label": "all 16",
                            "effectAllowed": "all"
                        }
                    ],
                    "effectAllowed": "all"
                },
                {
                    "items": [
                        {
                            "label": "copy 24",
                            "effectAllowed": "copy"
                        },
                        {
                            "label": "copy 25",
                            "effectAllowed": "copy"
                        },
                        {
                            "label": "copy 26",
                            "effectAllowed": "copy"
                        },
                        {
                            "label": "copy 27",
                            "effectAllowed": "copy"
                        },
                        {
                            "label": "copy 28",
                            "effectAllowed": "copy"
                        },
                        {
                            "label": "copy 29",
                            "effectAllowed": "copy"
                        },
                        {
                            "label": "copy 30",
                            "effectAllowed": "copy"
                        },
                        {
                            "label": "copy 26",
                            "effectAllowed": "copy"
                        }
                    ],
                    "effectAllowed": "copy"
                },
                {
                    "items": [
                        {
                            "label": "copyLink 38",
                            "effectAllowed": "copyLink"
                        },
                        {
                            "label": "copyLink 39",
                            "effectAllowed": "copyLink"
                        },
                        {
                            "label": "copyLink 40",
                            "effectAllowed": "copyLink"
                        },
                        {
                            "label": "copyLink 41",
                            "effectAllowed": "copyLink"
                        },
                        {
                            "label": "copyLink 42",
                            "effectAllowed": "copyLink"
                        },
                        {
                            "label": "copyLink 43",
                            "effectAllowed": "copyLink"
                        },
                        {
                            "label": "copyLink 44",
                            "effectAllowed": "copyLink"
                        },
                        {
                            "label": "copyLink 40",
                            "effectAllowed": "copyLink"
                        }
                    ],
                    "effectAllowed": "copyLink"
                }
            ],
            [
                {
                    "items": [
                        {
                            "label": "move 17",
                            "effectAllowed": "move"
                        },
                        {
                            "label": "move 18",
                            "effectAllowed": "move"
                        },
                        {
                            "label": "move 23",
                            "effectAllowed": "move"
                        },
                        {
                            "label": "move 19",
                            "effectAllowed": "move"
                        },
                        {
                            "label": "move 20",
                            "effectAllowed": "move"
                        },
                        {
                            "label": "move 21",
                            "effectAllowed": "move"
                        },
                        {
                            "label": "move 22",
                            "effectAllowed": "move"
                        }
                    ],
                    "effectAllowed": "move"
                },
                {
                    "items": [
                        {
                            "label": "link 31",
                            "effectAllowed": "link"
                        },
                        {
                            "label": "link 32",
                            "effectAllowed": "link"
                        },
                        {
                            "label": "link 33",
                            "effectAllowed": "link"
                        },
                        {
                            "label": "link 34",
                            "effectAllowed": "link"
                        },
                        {
                            "label": "link 35",
                            "effectAllowed": "link"
                        },
                        {
                            "label": "link 36",
                            "effectAllowed": "link"
                        },
                        {
                            "label": "link 37",
                            "effectAllowed": "link"
                        },
                        {
                            "label": "link 33",
                            "effectAllowed": "link"
                        }
                    ],
                    "effectAllowed": "link"
                },
                {
                    "items": [
                        {
                            "label": "copyMove 45",
                            "effectAllowed": "copyMove"
                        },
                        {
                            "label": "copyMove 46",
                            "effectAllowed": "copyMove"
                        },
                        {
                            "label": "copyMove 51",
                            "effectAllowed": "copyMove"
                        },
                        {
                            "label": "copyMove 47",
                            "effectAllowed": "copyMove"
                        },
                        {
                            "label": "copyMove 48",
                            "effectAllowed": "copyMove"
                        },
                        {
                            "label": "copyMove 49",
                            "effectAllowed": "copyMove"
                        },
                        {
                            "label": "copyMove 50",
                            "effectAllowed": "copyMove"
                        }
                    ],
                    "effectAllowed": "copyMove"
                }
            ]
        ];

        vm.dragoverCallback = function(index, external, type, callback) {
            vm.logListEvent('dragged over', index, external, type);
            // Invoke callback to origin for container types.
            if (type == 'container' && !external) {
                console.log('Container being dragged contains ' + callback() + ' items');
            }
            return index < 10; // Disallow dropping in the third row.
        };

        vm.dropCallback = function(index, item, external, type) {
            vm.logListEvent('dropped at', index, external, type);
            // Return false here to cancel drop. Return true if you insert the item yourself.
            return item;
        };

        vm.logEvent = function(message) {
            console.log(message);
        };

        function dndDragEnd() {
            vm.isWinMatch = vm.activity.answers && vm.activity.answers.length === vm.activity.correctAnswers;
            if (vm.isWinMatch) {
                if (!vm.areThereMorePhases) {
                    // if (!areThereMorePhases()) {
                    vm.isWinGame = true;
                }
            }
        }

        /*function areThereMorePhases() {
         var nextLevel = getNextLevel();
         var nextPhaseActivities = vm.category.activities.filter(function(activity) {
         return activity.level === nextLevel;
         });
         return nextPhaseActivities && nextPhaseActivities.length;
         }*/

        vm.logListEvent = function(action, index, external, type) {
            var message = external ? 'External ' : '';
            message += type + ' element was ' + action + ' position ' + index;
            console.log(message);
        };

        // Initialize model
        var id = 10;
        angular.forEach(['all', 'move', 'copy', 'link', 'copyLink', 'copyMove'], function(effect, i) {
            var container = {items: [], effectAllowed: effect};
            for (var k = 0; k < 7; ++k) {
                container.items.push({label: effect + ' ' + id++, effectAllowed: effect});
            }
            vm.containers[i % vm.containers.length].push(container);
        });

        function checkGameOver() {
            vm.isGameOver = !vm.timer.get("minute") && !vm.timer.get("second");
        }

        function actionPlayAgain() {
            if (vm.isWinGame) {
                vm.play();
                init();
            } else {
                vm.activity.answerOptions = vm.activity.answerOptions.concat(vm.activity.answers);
                vm.activity.answerOptions = _.shuffle(vm.activity.answerOptions);
                vm.activity.answers = [];
                createTimer();
            }
            vm.isWinMatch = false;
            vm.isWinGame = false;
            vm.isGameOver = false;
        }

        /*        function initLevel() {
         currentLevelIndex = 0;
         currentLevel = difficultyLevels[currentLevelIndex];
         }

         function getNextLevel() {
         return difficultyLevels[currentLevelIndex + 1];
         }

         function defineNextLevel() {
         currentLevelIndex += 1;
         currentLevel = difficultyLevels[currentLevelIndex];
         }*/

        /*        function actionNextPhase() {
         defineNextLevel();
         if (currentLevel) {
         selectActivity();
         createTimer();
         if (vm.activity) {
         vm.isWinMatch = false;
         } else {
         actionNextPhase();
         }
         }
         }*/

        /*    function raffleActivity(category) {
         var rafflesActivities = category.activities.filter(function(item) {
         return item.level === currentLevel;
         });
         if (rafflesActivities) {
         var activity = _.shuffle(angular.copy(rafflesActivities))[0];
         activity.answerOptions = raffleAnswerOptions(activity.answerOptions);
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
         */
        function createTimer() {
            if (timerPromise) {
                cancelTimer();
            }
            vm.timer = new moment();
            vm.timer.startOf('year');

            if (!vm.activity.time) {
                var DEFAULT_TIMER = "59:59";
                vm.activity.time = DEFAULT_TIMER;
            }

            var splitTime = vm.activity.time.split(":");
            vm.timer.set("minute", splitTime[0]);
            vm.timer.set("second", splitTime[1]);
            timerExec();
        }

        function cancelTimer() {
            $interval.cancel(timerPromise);
        }

        function timerExec() {
            timerPromise = $interval(function() {
                checkGameOver();
                if (!vm.isWonMatch && !vm.isGameOver) {
                    vm.timer.subtract(1, 'second');
                    checkGameOver();
                } else {
                    cancelTimer();
                }
            }, 1000);
        }

        function getTimeResult() {
            // return moment.utc(moment(vm.activity.time, "mm:ss").diff(vm.timer, "mm:ss")).format("mm:ss");
            return moment(vm.activity.time, "mm:ss").diff(vm.timer, "mm:ss");
        }

        $scope.$on("$destroy", function() {
            cancelTimer();
        });

        /*function selectActivity() {
         vm.activity = raffleActivity(vm.category);
         }*/

        function init() {
            /*initLevel();
             selectActivity();*/
            createTimer();
        }
    }

    return Component;
});