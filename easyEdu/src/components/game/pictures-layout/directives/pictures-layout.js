define([], function () {
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
        var NODE_ANSWERS = "answers";
        var NODE_ANSWER_OPTIONS = "answerOptions";
        var vm = this;
        vm.isWonMatch = false;
        vm.isWonGame = false;
        vm.isGameOver = false;
        var answerOptions;

        vm.init = init;
        vm.actionPlayAgain = actionPlayAgain;
        vm.getTimeResult = getTimeResult;

        function checkWonGame() {
            vm.isWonMatch = vm.activity.answers === vm.activity.correctAnswers;
            if (vm.isWonMatch) {
                if (!vm.areThereMorePhases) {
                    // if (!areThereMorePhases()) {
                    vm.isWonGame = true;
                }
            }
        }

        function checkGameOver() {
            vm.isGameOver = !vm.timer.get("minute") && !vm.timer.get("second");
        }

        /**
         * Limpa as respostas da partida anterior.
         */
        function cleanChildNodes(id) {
            var node = document.getElementById(id);
            while (node.hasChildNodes()) {
                node.removeChild(node.lastChild);
            }
        }

        function actionPlayAgain() {
            if (vm.isWonGame) {
                vm.play();
                init();
            } else {
                //vm.activity.answerOptions = vm.activity.answerOptions.concat(vm.activity.answers);
                vm.activity.answers = 0;
                cleanChildNodes(NODE_ANSWERS);
                cleanChildNodes(NODE_ANSWER_OPTIONS);
                vm.activity.answerOptions = _.shuffle(vm.activity.answerOptions);
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

        function loadPictures(answerOptions) {
            var img_out = "";
            var pictures = $("#" + NODE_ANSWER_OPTIONS);

            var answerOptionsLength = answerOptions.length;

            for (var i = 0; i < answerOptionsLength; i++) {
                var answerOption = answerOptions[i];
                img_out += "<div class='col-xs-4 col-sm-2'>" +
                    "<img src='https://drive.google.com/uc?export=view&id=" + answerOption.image.id + "' class='picture " + answerOption.type + " img-responsive' alt='" + answerOption.image.name + "'/>"
                    + "</div>";
            }

            $(pictures).append(img_out);

            $(".picture").each(function () {
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

                    var dropElemId = dropEl ? dropEl.getAttribute('id') : dropEl;

                    if (dropElemId === NODE_ANSWERS) {
                        if (elemChecker === "CORRECT") {
                            // processar acerto
                            dropEl.appendChild(angular.copy(elem.parentElement));
                            elem.classList.add("hidden");
                            dropEl.style.background = "green";
                            vm.activity.answers += 1;
                            checkWonGame();
                        } else {
                            dropEl.style.background = "red";
                        }
                    }
                }
            });
        }

        function init() {
            createTimer();
            loadPictures(vm.activity.answerOptions);
        }
    }

    return Component;
});