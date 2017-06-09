define([], function() {
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
                category: "=",
                gameMode: "=",
                areThereMorePhases: "=",
                customClass: "@"
            }
        };
    }

    Controller.$inject = ["$scope", "$interval", "$timeout", "moment"];
    /*@ngInject*/
    function Controller($scope, $interval, $timeout, moment) {
        var _ = require('lodash');
        var vm = this;
        var transparent = true;

        vm.isGameOver = false;
        vm.timer;
        vm.getSplitAnswer = undefined;

        //  The Google WebFont Loader will look for this object, so create it before loading the script.
        window.WebFontConfig = {

            //  'active' means all requested fonts have finished loading
            //  We set a 1 second delay before calling 'createText'.
            //  For some reason if we don't the browser cannot render the text the first time it's created.
            active: function() {
                //game.time.events.add(Phaser.Timer.SECOND, showTextWinMatch, this);
            },

            //  The Google Fonts we want to load (specify as many as you like in the array)
            google: {
                families: ['Finger Paint']
            }

        };

        var game = new Phaser.Game("100%", "100%", Phaser.AUTO, 'gameCanvas_' + vm.customClass, {
            preload: preload,
            create: create,
            update: update,
            render: render
        }, transparent);


        function preload() {

            // selectActivity();
            initAnswerKeysNew(vm.activity.answer);

            game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

            game.load.crossOrigin = "anonymous";
            // game.load.image('centerImage', vm.activity.files.image.link);
            //game.load.image('centerImage', 'assets/img/phaser/exemple/Bandeira_Santa_Catarina.jpg');
            game.load.image('btnPlayAgain', 'assets/img/playAgain.png');
            game.load.image('btnNextPhase', 'assets/img/nextPhase.png');
            game.load.image('underscore', 'assets/img/underscore.png');
            game.load.image('letter_a', 'assets/img/alphabet/A_LARGE.png');
            game.load.image('letter_b', 'assets/img/alphabet/B_LARGE.png');
            game.load.image('letter_c', 'assets/img/alphabet/C_LARGE.png');
            game.load.image('letter_d', 'assets/img/alphabet/D_LARGE.png');
            game.load.image('letter_e', 'assets/img/alphabet/E_LARGE.png');
            game.load.image('letter_f', 'assets/img/alphabet/F_LARGE.png');
            game.load.image('letter_g', 'assets/img/alphabet/G_LARGE.png');
            game.load.image('letter_h', 'assets/img/alphabet/H_LARGE.png');
            game.load.image('letter_i', 'assets/img/alphabet/I_LARGE.png');
            game.load.image('letter_j', 'assets/img/alphabet/J_LARGE.png');
            game.load.image('letter_k', 'assets/img/alphabet/K_LARGE.png');
            game.load.image('letter_l', 'assets/img/alphabet/L_LARGE.png');
            game.load.image('letter_m', 'assets/img/alphabet/M_LARGE.png');
            game.load.image('letter_n', 'assets/img/alphabet/N_LARGE.png');
            game.load.image('letter_o', 'assets/img/alphabet/O_LARGE.png');
            game.load.image('letter_p', 'assets/img/alphabet/P_LARGE.png');
            game.load.image('letter_q', 'assets/img/alphabet/Q_LARGE.png');
            game.load.image('letter_r', 'assets/img/alphabet/R_LARGE.png');
            game.load.image('letter_s', 'assets/img/alphabet/S_LARGE.png');
            game.load.image('letter_t', 'assets/img/alphabet/T_LARGE.png');
            game.load.image('letter_u', 'assets/img/alphabet/U_LARGE.png');
            game.load.image('letter_v', 'assets/img/alphabet/V_LARGE.png');
            game.load.image('letter_w', 'assets/img/alphabet/W_LARGE.png');
            game.load.image('letter_x', 'assets/img/alphabet/X_LARGE.png');
            game.load.image('letter_y', 'assets/img/alphabet/Y_LARGE.png');
            game.load.image('letter_z', 'assets/img/alphabet/Z_LARGE.png');
            game.load.image('sky', 'assets/img/phaser/sky.png');
            game.load.image('ground', 'assets/img/phaser/platform.png');
            game.load.image('space-ground', 'assets/img/phaser/space-platform.png');
            game.load.image('star', 'assets/img/phaser/star.png');
            game.load.spritesheet('dude', 'assets/img/phaser/dude.png', 32, 48);

        }

        var MAX_LETTERS_BREAK_LINE = 10;
        var player;
        var tip;
        var platforms;
        var underscore;
        /*var difficultyLevels = ["EASY", "MEDIUM", "HARD", "IMPOSSIBLE"];
         var currentLevel;
         var currentLevelIndex;*/
        var answerKeys;
        var lettersKeys = ['letter_a', 'letter_b', 'letter_c', 'letter_d', 'letter_e', 'letter_f', 'letter_g', 'letter_h', 'letter_i', 'letter_j', 'letter_k', 'letter_l', 'letter_m', 'letter_n', 'letter_o', 'letter_p', 'letter_q', 'letter_r', 'letter_s', 'letter_t', 'letter_u', 'letter_v', 'letter_w', 'letter_x', 'letter_y', 'letter_z'];
        var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var raffledLetters;
        var alphabet;

        var dropZones;
        var cursors;
        var centerImage;
        var btnPlayAgain;
        var btnNextPhase;

        var textGameResult;
        var stars;
        var score = 0;
        var scoreText;
        var timer;
        var timerText;
        var timerPromise;

        // initLevel();

        function create() {


            //  We're going to be using physics, so enable the Arcade Physics system
            game.physics.startSystem(Phaser.Physics.ARCADE);

            //  A simple background for our game
            // game.add.sprite(0, 0, 'sky');

            centerImage = game.add.sprite(game.world.centerX, game.world.centerY, 'centerImage');
            //centerImage.width = 200;
            //centerImage.height = 150;
            centerImage.anchor.setTo(0.5, 0.5);

            alphabet = game.add.group(undefined, "alphabet");
            initAlphabet(raffledLetters);

            dropZones = game.add.group(undefined, "dropZones");
            dropZones.enableBody = true;
            initAnswerSpaces();

            createTipText();

            goFullScreen();

            timerText = game.add.text(game.world.centerX, 16, '', {fontSize: '1.5em', fill: '#000'});
            timerText.anchor.x = 0.5;
            createTimer();

            /*

             //  The platforms group contains the ground and the 2 ledges we can jump on
             platforms = game.add.group();

             //  We will enable physics for any object that is created in this group
             platforms.enableBody = true;

             // Here we create the ground.
             var ground = platforms.create(0, game.world.height - 64, 'ground');

             //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
             ground.scale.setTo(2, 2);

             //  This stops it from falling away when you jump on it
             ground.body.immovable = true;

             //  Now let's create two ledges
             var ledge = platforms.create(400, 400, 'ground');
             ledge.body.immovable = true;

             ledge = platforms.create(-150, 250, 'ground');
             ledge.body.immovable = true;

             // The player and its settings
             player = game.add.sprite(32, game.world.height - 150, 'dude');

             //  We need to enable physics on the player
             game.physics.arcade.enable(player);

             //  Player physics properties. Give the little guy a slight bounce.
             player.body.bounce.y = 0.2;
             player.body.gravity.y = 300;
             player.body.collideWorldBounds = true;

             //  Our two animations, walking left and right.
             player.animations.add('left', [0, 1, 2, 3], 10, true);
             player.animations.add('right', [5, 6, 7, 8], 10, true);

             //  Finally some stars to collect
             stars = game.add.group();

             //  We will enable physics for any star that is created in this group
             stars.enableBody = true;

             //  Here we'll create 12 of them evenly spaced apart
             for (var i = 0; i < 12; i++) {
             //  Create a star inside of the 'stars' group
             var star = stars.create(i * 70, 0, 'star');

             //  Let gravity do its thing
             star.body.gravity.y = 300;

             //  This just gives each star a slightly random bounce value
             star.body.bounce.y = 0.7 + Math.random() * 0.2;
             }

             //  The score
             scoreText = game.add.text(16, 16, 'score: 0', {fontSize: '32px', fill: '#000'});

             //  Our controls.
             cursors = game.input.keyboard.createCursorKeys();
             */
        }

        function update() {

            if (vm.isGameOver) {
                gameOver();
            }

            /*
             //  Collide the player and the stars with the platforms
             game.physics.arcade.collide(player, platforms);
             game.physics.arcade.collide(stars, platforms);

             //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
             game.physics.arcade.overlap(player, stars, collectStar, null, this);

             //  Reset the players velocity (movement)
             player.body.velocity.x = 0;

             if (cursors.left.isDown) {
             //  Move to the left
             player.body.velocity.x = -150;

             player.animations.play('left');
             }
             else if (cursors.right.isDown) {
             //  Move to the right
             player.body.velocity.x = 150;

             player.animations.play('right');
             }
             else {
             //  Stand still
             player.animations.stop();

             player.frame = 4;
             }

             //  Allow the player to jump if they are touching the ground.
             if (cursors.up.isDown && player.body.touching.down) {
             player.body.velocity.y = -350;
             }
             */
        }

        function initLetter(letter, width, height) {
            letter.width = width;
            letter.height = height;
            letter.inputEnabled = true;
            letter.input.enableDrag();

            letter.events.onInputOver.add(onOver, this);
            letter.events.onInputOut.add(onOut, this);
            letter.events.onDragStart.add(onDragStart, this);
            letter.events.onDragStop.add(onDragStop, this);
        }

        function initGround(dropZone, x, y, key, letter, width, height) {
            var ground = dropZone.create(x, y, key);
            //dropZone = game.add.sprite(x, game.world.height - y, key);

            ground.width = width;
            ground.height = height;
            ground.letter = letter.toUpperCase();
            ground.isEmpty = true;
        }

        function render() {

            //game.world.rotation = +1;
            //game.world.camera.x =+5;

            /*dropZones.alignTo(
             {
             centerX: game.world.centerX,
             bottom: game.world.height
             },
             Phaser.BOTTOM_CENTER, 0, -100);*/
            dropZones.centerX = game.world.centerX;
            dropZones.centerY = game.world.centerY;
            dropZones.setAll('centerX', game.world.centerX);
            tip.alignTo(dropZones, Phaser.BOTTOM_CENTER);
            alphabet.alignTo(
                {
                    centerX: game.world.centerX,
                    top: game.world.height
                },
                Phaser.TOP_CENTER, 0, 20);
        }

        // function to scale up the game to full screen
        function goFullScreen() {
            // setting a background color
            // game.stage.backgroundColor = "#555555";
            game.scale.pageAlignHorizontally = true;
            game.scale.pageAlignVertically = true;
            // using RESIZE scale mode
            //game.scale.scaleMode = Phaser.ScaleManager.RESIZE;

            //game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
            //game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
            // deprecated
            //screen size will be set automatically
            // game.scale.setScreenSize(true);
        }

        function onOver(sprite, pointer) {

            sprite.tint = 0xff7777;

        }

        function onOut(sprite, pointer) {

            sprite.tint = 0xffffff;

        }

        function onDragStart(sprite, pointer) {
            sprite.originalX = sprite.x;
            sprite.originalY = sprite.y;
        }

        function onDragStop(sprite, pointer) {
            //game.physics.arcade.overlap(player, stars, collectStar, null, this);

            var _answerSpaces = [];
            angular.forEach(dropZones.children, function(item) {
                _answerSpaces = _answerSpaces.concat(item.children);
            });

            var length = _answerSpaces.length;
            var overlap = false;
            for (var i = 0; i < length; i++) {
                var dropZone = _answerSpaces[i];
                if (dropZone.isEmpty && (sprite._text === dropZone.letter) && sprite.overlap(dropZone)) {
                    overlap = true;
                    dropZone.isEmpty = false;
                    sprite.input.disableDrag();
                    // sprite.centerX = dropZone.worldPosition.x + (getSize(game.world.width, _40px_1024px) / 2);
                    // sprite.centerY = dropZone.worldPosition.y + getSize(game.world.height, _10px_768px);
                    dropZone.parent.addChild(sprite);
                    sprite.centerX = dropZone.centerX;
                    // sprite.centerY = dropZone.centerY;
                    sprite.bottom = dropZone.top;

                    checkUserWinMatch();
                    return;
                }
            }
            if (!overlap) {
                game.add.tween(sprite).to({x: sprite.originalX, y: sprite.originalY}, 500, "Back.easeOut", true);
            }
        }

        function createTipText() {
            var style = {font: "28px Arial", align: "center", fontStyle: "italic"};
            tip = game.add.text(game.world.centerX, game.world.centerY, "Dica: " + vm.activity.tip, style);
        }


        function collectStar(player, star) {

            // Removes the star from the screen
            star.kill();

            //  Add and update the score
            score += 10;
            scoreText.text = 'Score: ' + score;

        }

        function checkUserWinMatch() {
            if (isWinMatch()) {
                disableAlphabet();
                // Verificar se tem mais fases, para exibir "Parabéns!\nVocê ganhou a partida", "Parabéns!\nVocê ganhou o jogo"
                if (vm.areThereMorePhases) {
                    // if (areThereMorePhases()) {
                    showTextWinMatch();
                    showButtonPlayAgain();
                    showButtonNextPhase();
                } else {
                    showTextWinGame();
                }
                showTextScore();
            }
        }

        function isWinMatch() {

            var _answerSpaces = [];
            angular.forEach(dropZones.children, function(item) {
                _answerSpaces = _answerSpaces.concat(item.children);
            });

            var filterDropZones = _answerSpaces.filter(function(dropZone) {
                return dropZone.isEmpty;
            });

            return !filterDropZones.length;
        }

        /*function areThereMorePhases() {
         var nextLevel = getNextLevel();
         var nextPhaseActivities = vm.category.activities.filter(function(activity) {
         return activity.level === nextLevel;
         });
         return nextPhaseActivities && nextPhaseActivities.length;
         }*/

        function showButtonPlayAgain() {
            btnPlayAgain = game.add.button(game.world.centerX - 350, 400, 'btnPlayAgain', actionPlayAgain);
            btnPlayAgain.right = game.world.centerX - 25;
            btnPlayAgain.top = tip.centerY + 50;
        }

        function actionPlayAgain() {
            game.state.restart();
        }

        function showButtonNextPhase() {
            btnNextPhase = game.add.button(game.world.centerX + 10, 400, 'btnNextPhase', actionNextPhase);
            btnNextPhase.left = game.world.centerX + 25;
            btnNextPhase.top = tip.centerY + 50;
        }

        function actionNextPhase() {
            $timeout(vm.actionNextPhase(), 1000);
            // game.destroy();
            /*   defineNextLevel();
             if (currentLevel) {
             selectActivity();
             if (vm.activity) {
             game.state.restart();
             } else {
             actionNextPhase();
             }
             }*/
        }

        /*
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
         */

        function showTextWinMatch() {
            showGameResultText("Parabéns!\nVocê ganhou a partida.");
        }

        function showTextWinGame() {
            showGameResultText("Parabéns!\nVocê ganhou o jogo.");
        }

        function checkGameOver() {
            vm.isGameOver = !timer.get("minute") && !timer.get("second");
        }

        function gameOver() {
            showGameResultText("Que pena!\nVocê perdeu o jogo.");
            disableAlphabet();
            showButtonPlayAgain();
        }

        function showGameResultText(text) {
            textGameResult = game.add.text(game.world.centerX, game.world.centerY - 100, text);
            textGameResult.anchor.setTo(0.5);

            textGameResult.font = 'Finger Paint';
            textGameResult.fontSize = 60;

            //  If we don't set the padding the font gets cut off
            //  Comment out the line below to see the effect
            textGameResult.padding.set(10, 16);

            var grd = textGameResult.context.createLinearGradient(0, 0, 0, textGameResult.canvas.height);
            grd.addColorStop(0, '#8ED6FF');
            grd.addColorStop(1, '#004CB3');
            textGameResult.fill = grd;

            textGameResult.align = 'center';
            textGameResult.stroke = '#000000';
            textGameResult.strokeThickness = 2;
            textGameResult.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
        }


        /*

         Fase Impossível pode ter um cronômetro regressivo...
         Para que o desafio seja resolvido no máximo naquele tempo.

         */


        function showTextScore() {
            // O seu tempo foi de 00:30.
            scoreText = game.add.text(game.world.centerX, game.world.centerY);
            scoreText.top = textGameResult.bottom + 50;
            scoreText.anchor.setTo(0.5);
            scoreText.text = "O seu tempo foi de ";
            scoreText.text += moment.utc(moment(vm.activity.time, "mm:ss").diff(timer, "mm:ss")).format("mm:ss");

            scoreText.font = 'Finger Paint';
            scoreText.fontSize = 36;
        }

        function disableAlphabet() {
            alphabet.setAll('inputEnabled', false);//  (key, value, checkAlive, checkVisible, operation, force)
        }

        $scope.$on("$destroy", function() {
            game.destroy(); // Clean up the game when we leave this scope
        });

        function raffleActivity(category) {
            var rafflesActivities = category.activities.filter(function(item) {
                return item.level === currentLevel;
            });
            if (rafflesActivities) {
                return _.shuffle(rafflesActivities)[0];
            }

            return undefined;
        }

        function getSplitAnswer() {
            return vm.activity && vm.activity.answer ? vm.activity.answer.replace(new RegExp(' ', 'g'), '-').split('') : [];
        }

        function initAnswerKeys(answer) {
            var answerWithoutSpaces = removeAnswerSpaces(answer);
            answerWithoutSpaces = removeAccentuation(answerWithoutSpaces);
            answerKeys = answerWithoutSpaces.split('');
            answerKeys = setKeyToAnswerLetters(answerKeys);
            raffledLetters = raffleLetters(answerKeys, 40 - answerKeys.length);
            raffledLetters = shuffleLetters(raffledLetters);
        }

        function initAnswerKeysNew(answer) {
            var answerWithoutSpaces = removeAnswerSpaces(answer);
            //answerWithoutSpaces = removeAccentuation(answerWithoutSpaces);
            answerKeys = answerWithoutSpaces.toUpperCase().split('');
            //answerKeys = setKeyToAnswerLetters(answerKeys);
            raffledLetters = raffleLetters(answerKeys, 40 - answerKeys.length);
            raffledLetters = shuffleLetters(raffledLetters);
        }

        function removeAnswerSpaces(answer) {
            return answer.replace(new RegExp(' ', 'g'), '');
        }

        function removeAccentuation(answer) {
            return answer;
        }

        function setKeyToAnswerLetters(answerKeys) {
            angular.forEach(answerKeys, function(value, index) {
                answerKeys[index] = "letter_" + value.toLowerCase();
            });
            return answerKeys;
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

        function getRandomLetterKey() {
            return lettersKeys[Math.floor(Math.random() * lettersKeys.length)];
        }

        function getRandomLetter() {
            return letters[Math.floor(Math.random() * letters.length)];
        }

        function shuffleLetters(raffledLetters) {
            return _.shuffle(raffledLetters);
        }

        function getRandomValue() {
            var randomValue = 0.5 - Math.random();
            console.log("randomValue: ", randomValue);
            return randomValue;
        }

        function createSpriteAlphabet(answerKeys, x, initialY, width, height) {
            var y = initialY;
            angular.forEach(answerKeys, function(letterKey) {
                var letter = createSpriteLetter(x, y, letterKey);
                initLetter(letter, width, height);
                y += initialY;
            });
        }

        function createSpriteLetter(x, y, key) {
            return alphabet.create(x, y, key);
        }

        function alignAlphabet(initialX, initialY) {
            var point = new Phaser.Point(initialX, initialY);
            angular.forEach(alphabet.children, function(letter) {
                point = alignLetter(letter, point, initialX);
            });
        }

        function alignLetter(letter, point, initialX) {
            point.x = letter.right;
            if (isHeightLimitScreen(letter.bottom)) { // Ultrapassou a borda inferior
                letter.top = game.world.height - letter.height; // Desconta do tamanho da tela o tamanho da letra
                point.y = letter.top;
            }
            if (isWithLimitScreen(point.x)) {
                // Coloca a letra adicionada na linha de cima
                letter.left = initialX;
                letter.bottom = letter.top;

                point.x = letter.right;
                point.y = letter.top;
            }
            return point;
        }

        function createTextAlphabet(answerKeys, initialX, initialY) {
            var point = new Phaser.Point(initialX, initialY);
            angular.forEach(answerKeys, function(letterKey) {
                var letter = createTextLetter(point.x, point.y, letterKey);
                initLetterText(letter);
                alphabet.add(letter);
                point = alignLetter(letter, point, initialX);
            });
        }

        function isWithLimitScreen(x) {
            return game.world.width < x;
        }

        function isHeightLimitScreen(x) {
            return game.world.height < x;
        }

        function createTextLetter(x, y, key) {
            return new Phaser.Text(game, x, y, key, {font: "Courier New", fontSize: '4em', fill: '#000'});
        }

        function initLetterText(letter) {
            letter.inputEnabled = true;
            letter.input.enableDrag();

            letter.events.onInputOver.add(onOver, this);
            letter.events.onInputOut.add(onOut, this);
            letter.events.onDragStart.add(onDragStart, this);
            letter.events.onDragStop.add(onDragStop, this);
        }

        function getSize(value, pixel) {
            return (value * pixel) / 100;
        }

        var _3px_1024px = 0.29296875; // 3px / 1024px
        var _10px_768px = 1.30208333;
        var _15px_768px = 1.95312500;
        var _15px_1024px = 1.46484375;
        var _40px_1024px = 3.90625000;
        var _46px_768px = 5.9895833333333336; // 46px / 768px
        var _46px_1024px = 4.4921875; // 46px / 1024px
        var _75px_768px = 9.765625;// 75px / 768px
        var _75px_1024px = 7.32421875;// 75px / 1024px
        var _50px_768px = 6.510416666666667;// 50px / 768px
        var _50px_1024px = 4.8828125;// 50px / 1024px
        var _125px_1024px = 12.20703125;// 125px / 1024px

        function initAlphabet(raffledLetters) {
            var margin = getSize(game.world.width, _15px_1024px);

            createTextAlphabet(raffledLetters, margin, game.world.height);
        }

        function initAnswerSpaces() {
            // Considerar espaços e quebra de linha

            var length = vm.activity.answer.length;
            var topAnswer = [];
            var bottomAnswer = [];

            if (length > MAX_LETTERS_BREAK_LINE) { // maior que o limite, se possível será divido em duas linhas
                var answerSplit = vm.activity.answer.split(" ");
                if (answerSplit.length > 1) {// tem mais do que uma palavra
                    var halfOfLength = Math.ceil(answerSplit.length / 2);
                    topAnswer = answerSplit.slice(0, halfOfLength);
                    bottomAnswer = answerSplit.slice(halfOfLength, answerSplit.length);
                } else {
                    bottomAnswer = angular.copy(answerSplit);
                }
            } else {
                bottomAnswer = angular.copy(vm.activity.answer.split(" "));
            }

            var width = getSize(game.world.width, _40px_1024px);
            var height = getSize(game.world.height, _10px_768px);
            var distanceBetweenSpaces = getSize(game.world.height, _10px_768px);


            var xGround = 0;
            var yGround = 100;
            if (topAnswer.length) {
                var dropZoneTop = game.add.group(dropZones, "dropZoneTop");
                createAnswerSpaces(dropZoneTop, topAnswer, xGround, yGround, width, height, distanceBetweenSpaces);
            }

            yGround = 175;
            var dropZoneBottom = game.add.group(dropZones, "dropZoneBottom");
            createAnswerSpaces(dropZoneBottom, bottomAnswer, xGround, yGround, width, height, distanceBetweenSpaces);
        }

        function createAnswerSpaces(dropZone, words, xGround, yGround, width, height, distanceBetweenSpaces) {
            angular.forEach(words, function(item) {
                var itemLength = item.length;
                for (var i = 0; i < itemLength; i++) {
                    initGround(dropZone, xGround, yGround, "ground", item.charAt(i), width, height);
                    xGround += width + distanceBetweenSpaces;
                }
                // initGround(xGround, yGround, "space-ground", "", width, height);
                xGround += width + distanceBetweenSpaces; // Insere um espaço no final de cada palavra
            });
        }

        function isSpace(char) {
            return char === " ";
        }

        function createTimer() {
            if (timerPromise) {
                cancelTimer();
            }
            timer = new moment();
            vm.timer = timer;
            timer.startOf('year');

            if (!vm.activity.time) {
                var DEFAULT_TIMER = "59:59";
                vm.activity.time = DEFAULT_TIMER;
            }

            var splitTime = vm.activity.time.split(":");
            timer.set("minute", splitTime[0]);
            timer.set("second", splitTime[1]);
            timerExec();
        }

        function cancelTimer() {
            $interval.cancel(timerPromise);
        }

        function timerExec() {
            timerPromise = $interval(function() {
                checkGameOver();
                if (!isWinMatch() && !vm.isGameOver) {
                    timerText.text = timer.format("mm:ss"); // remover
                    timer.subtract(1, 'second');
                    timerText.text = timer.format("mm:ss"); // remover
                } else {
                    cancelTimer();
                }
            }, 1000);
        }

        function selectActivity() {
            vm.activity = raffleActivity(vm.category);
            //vm.activity = vm.category.activities[0];
        }

    }

    return Component;
});