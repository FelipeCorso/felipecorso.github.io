define([], function () {
    'use strict';
    function Component() {
        return {
            restrict: 'E',
            templateUrl: 'src/components/game/letters-layout/view/_letters-layout.html',
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                actionNextPhase: "&",
                activity: "=",
                gameMode: "=",
                areThereMorePhases: "=",
                play: "&",
                customClass: "@",
                isWonMatch: "=wonMatch",
                isWonGame: "=wonGame",
                isGameOver: "=gameOver"
            }
        }
    }

    Controller.$inject = ["$scope", "moment", "$interval"];
    /*@ngInject*/
    function Controller($scope, moment, $interval) {
        var _ = require('lodash');
        var vm = this;
        var DEFAULT_TIMER = "59:59";
        var timerPromise;
        vm.customClass = vm.customClass || "single-player";
        var NODE_ANSWERS = "answers_" + vm.customClass;
        var NODE_ANSWER_OPTIONS = "answerOptions_" + vm.customClass;
        var shuffledLetters;
        var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        vm.init = init;
        vm.actionPlayAgain = actionPlayAgain;
        vm.getTimeResult = getTimeResult;
        vm.playSong = playSong;

        function checkWonGame() {
            vm.isWonMatch = $("#" + NODE_ANSWERS).find("li.answered.letter-answer-option").length === vm.activity.answer.length;
            if (vm.isWonMatch) {
                if (!vm.areThereMorePhases) {
                    vm.isWonGame = true;
                }
            }
        }

        function checkGameOver() {
            vm.isGameOver = vm.isGameOver || (!vm.timer.get("minute") && !vm.timer.get("second"));
        }

        /**
         * Limpa as respostas da partida anterior.
         */
        function cleanChildNodes(id) {
            var node = document.getElementById(id);
            if (node) {
                while (node.hasChildNodes()) {
                    node.removeChild(node.lastChild);
                }
            }
        }

        function actionPlayAgain() {
            if (vm.isWonGame) {
                vm.play();
            } else {
                cleanChildNodes(NODE_ANSWERS);
                cleanChildNodes(NODE_ANSWER_OPTIONS);
                init();
            }
            vm.isWonMatch = false;
            vm.isWonGame = false;
            vm.isGameOver = false;
        }

        function createTimer() {
            if (timerPromise) {
                cancelTimer();
            }
            vm.timer = new moment();
            vm.timer.startOf('year');

            if (!vm.activity.time) {
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
            timerPromise = $interval(function () {
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
            var timer = moment.utc(moment(vm.activity.time, "mm:ss").diff(vm.timer, "mm:ss")).format("mm:ss");
            //return moment(vm.activity.time, "mm:ss").diff(vm.timer, "mm:ss");
            console.log("vm.activity.time", moment(vm.activity.time, "mm:ss").format("mm:ss"));
            console.log("vm.timer", moment(vm.timer, "mm:ss").format("mm:ss"));
            console.log(timer);
            return timer;
        }

        $scope.$on("$destroy", function () {
            cancelTimer();
        });

        function initAnswerKeys(answer) {
            var answerWithoutSpaces = removeAnswerSpaces(answer);
            answerWithoutSpaces = answerWithoutSpaces.toUpperCase().split('');
            var raffledLetters = raffleLetters(answerWithoutSpaces, 20 - answerWithoutSpaces.length);
            shuffledLetters = shuffleLetters(raffledLetters);
        }

        function removeAnswerSpaces(answer) {
            return answer.replace(new RegExp(' ', 'g'), '');
        }

        /**
         *
         * @param answerKeys
         * @param amountLetters Quantidade de letras que serão exibidas no jogo.
         */
        function raffleLetters(answerKeys, amountLetters) {
            var raffledLetters = [].concat(answerKeys);
            for (var i = 0; i < amountLetters; i++) {
                raffledLetters.push(getRandomLetter().toUpperCase());
            }
            return raffledLetters;
        }

        function getRandomLetter() {
            return letters[Math.floor(Math.random() * letters.length)];
        }

        function shuffleLetters(raffledLetters) {
            return _.shuffle(raffledLetters);
        }

        function loadAnswerKeys(answer) {
            var answerKeys = answer.toUpperCase().split("");
            var answerKeysOut = "";

            var answerKeysLength = answerKeys.length;
            for (var i = 0; i < answerKeysLength; i++) {
                var answerKey = answerKeys[i];
                var letterAnswerClass = answerKey === " " ? " answered letter-answer-option" : " letter-answer";
                var character = answerKey === " " ? "-" : "?";
                answerKeysOut += "<li class='" + answerKey + " " + vm.customClass + letterAnswerClass + "'>" + character + "</li>";
            }
            var elmAnswer = $("#" + NODE_ANSWERS);
            $(elmAnswer).append(answerKeysOut);
        }

        function loadAnswerOptions(answerOptions) {
            var answerOptionsOut = "";
            var answerOptionsLength = answerOptions.length;
            for (var i = 0; i < answerOptionsLength; i++) {
                var answerOption = answerOptions[i];
                answerOptionsOut +=
                    "<li class='letter-answer-option " + answerOption + " " + vm.customClass + "'>" + answerOption + "</li>";
            }

            var elmAnswerOptions = $("#" + NODE_ANSWER_OPTIONS);
            $(elmAnswerOptions).append(answerOptionsOut);

            $("#" + NODE_ANSWER_OPTIONS + " > li.letter-answer-option").each(function () {
                handleTouch(this);
            });
        }

        function handleTouch(picture) {
            var mc = new Hammer.Manager(picture, {});

            mc.add(new Hammer.Pan({direction: Hammer.DIRECTION_ALL, threshold: 0}));

            mc.on("pan", function (event) {
                var elem = event.target;

                $(elem).css({'transform': 'translate(' + event.deltaX + 'px,' + event.deltaY + 'px)'});

                if (event.isFinal) {
                    $(event.target).css({'transform': 'translate(0,0)'});
                    var dropEl = document.elementFromPoint(event.pointers[0].pageX, event.pointers[0].pageY);

                    console.log('dropped on', dropEl);

                    var elemClass = elem.getAttribute("class").split(" ");
                    var elemChecker = elemClass[1];
                    var elemSide = elemClass[2];

                    var dropElemClass = dropEl.getAttribute("class").split(" ");
                    var dropElemChecker = dropElemClass[0];
                    var dropElemSide = dropElemClass[1];
                    var dropElemValid = dropElemClass[2];
                    var dropElemAnswered = dropElemClass[3];

                    if (dropElemAnswered !== "answered" && dropElemValid === "letter-answer" && dropElemSide === elemSide) {
                        if (dropElemChecker === elemChecker) {
                            // processar acerto
                            dropEl.innerText = elem.innerText;
                            dropEl.classList.add("answered"); // Não alterar essa ordem, se alterar verificar os índices
                            dropEl.classList.add("letter-answer-option"); // Não alterar essa ordem, se alterar verificar os índices
                            elem.classList.add("hidden");
                            checkWonGame();
                        }
                    }
                }
            });
        }

        function playSong() {
            document.getElementById("audio_" + vm.customClass).play();
        }

        function restart() {
            cleanChildNodes(NODE_ANSWERS);
            cleanChildNodes(NODE_ANSWER_OPTIONS);
            init();
        }

        function init() {
            createTimer();
            initAnswerKeys(vm.activity.answer);
            loadAnswerKeys(vm.activity.answer);
            loadAnswerOptions(shuffledLetters);
        }

        $scope.$watch("vm.activity", function () {
            if (vm.activity) {
                restart();
            }
        });

        angular.element(document).ready(function () {
            init();
        });
    }

    return Component;
});