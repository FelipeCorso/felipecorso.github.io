angular.module('resources.views', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/components/editor/category/activity-type/view/_activity-type.html',
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "        <h1>Escolha uma das opções de layout disponíveis</h1>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div><div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-sm-3 text-center\">\r" +
    "\n" +
    "        <button class=\"btn btn-link\" type=\"button\" ng-click=\"vm.setType('LETTERS')\">\r" +
    "\n" +
    "            <img class=\"img-responsive center-block\" ng-src=\"assets/img/bubbleLetters.png\" alt=\"Imagem layout letras\">\r" +
    "\n" +
    "            <h4 class=\"text-center\">Letras</h4>\r" +
    "\n" +
    "        </button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-sm-3 text-center\">\r" +
    "\n" +
    "        <button class=\"btn btn-link\" type=\"button\" ng-click=\"vm.setType('PICTURES')\">\r" +
    "\n" +
    "            <img class=\"img-responsive center-block\" ng-src=\"assets/img/pictures.png\" alt=\"Imagem layout imagens\">\r" +
    "\n" +
    "            <h4 class=\"text-center\">Imagens</h4>\r" +
    "\n" +
    "        </button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-sm-3 text-center\">\r" +
    "\n" +
    "        <button class=\"btn btn-link\" type=\"button\" title=\"Em desenvolvimento\" ng-click=\"vm.setType('PUZZLE')\" disabled>\r" +
    "\n" +
    "            <img class=\"img-responsive center-block\" ng-src=\"assets/img/puzzle.png\" alt=\"Imagem layout quebra-cabeça\">\r" +
    "\n" +
    "            <h4 class=\"text-center\">Quebra-cabeça</h4>\r" +
    "\n" +
    "        </button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-sm-3 text-center\">\r" +
    "\n" +
    "        <button class=\"btn btn-link\" type=\"button\" title=\"Em desenvolvimento\" ng-click=\"vm.setType('MEMORY')\" disabled>\r" +
    "\n" +
    "            <img class=\"img-responsive center-block\" ng-src=\"assets/img/memoryGame.png\" alt=\"Imagem layout memória\">\r" +
    "\n" +
    "            <h4 class=\"text-center\">Memória</h4>\r" +
    "\n" +
    "        </button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/components/editor/category/create-category/view/_create-category.html',
    "<div class=\"form-group\">\r" +
    "\n" +
    "    <label for=\"category.name\" class=\"control-label\">Assunto</label>\r" +
    "\n" +
    "    <input class=\"form-control input-circle\" type=\"text\"\r" +
    "\n" +
    "           id=\"category.name\"\r" +
    "\n" +
    "           ng-model=\"vm.category.name\"\r" +
    "\n" +
    "           placeholder=\"Informe uma breve descrição para o assunto\">\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<button type=\"button\" class=\"btn btn-circle btn-primary\" ng-click=\"vm.saveCategory()\">\r" +
    "\n" +
    "    <i class=\"fa fa-save\" aria-label=\"true\"></i>\r" +
    "\n" +
    "    Salvar\r" +
    "\n" +
    "</button>"
  );


  $templateCache.put('src/components/editor/category/list-activities/view/_list-activities.html',
    "<table class=\"table table-striped\">\r" +
    "\n" +
    "    <thead>\r" +
    "\n" +
    "    <tr>\r" +
    "\n" +
    "        <th>\r" +
    "\n" +
    "            <input type=\"checkbox\" title=\"Selecionar todas as atividades\"\r" +
    "\n" +
    "                   ng-model=\"vm.isAllSelected\" ng-click=\"vm.toggleAll()\" bn-uniform>\r" +
    "\n" +
    "        </th>\r" +
    "\n" +
    "        <th>Nome</th>\r" +
    "\n" +
    "        <th>Tipo</th>\r" +
    "\n" +
    "        <th></th>\r" +
    "\n" +
    "    </tr>\r" +
    "\n" +
    "    </thead>\r" +
    "\n" +
    "    <tbody>\r" +
    "\n" +
    "        <tr ng-repeat=\"activity in vm.activities | orderBy:$index:true\">\r" +
    "\n" +
    "            <td><input type=\"checkbox\" bn-uniform ng-model=\"activity.export\" ng-change=\"vm.optionToggled()\"></td>\r" +
    "\n" +
    "            <td>{{activity.name}}</td>\r" +
    "\n" +
    "            <td>{{vm.getType(activity.type)}}</td>\r" +
    "\n" +
    "            <td>\r" +
    "\n" +
    "                <div class=\"pull-right\">\r" +
    "\n" +
    "                    <button type=\"button\" class=\"btn-link\" title=\"Editar atividade\" ng-click=\"vm.selectActivity(activity)\">\r" +
    "\n" +
    "                        <i class=\"fa fa-pencil\"></i>\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "        </tr>\r" +
    "\n" +
    "    </tbody>\r" +
    "\n" +
    "</table>"
  );


  $templateCache.put('src/components/editor/insert-image/view/_insert-image.html',
    "<div class=\"row\" ng-if=\"vm.multipleSelect\">\r" +
    "\n" +
    "    <div class=\"col-sm-6\" ng-repeat=\"answerOption in vm.model.answerOptions | filter:{type:vm.answerType}:true\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <div class=\"pull-right\">\r" +
    "\n" +
    "                    <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\r" +
    "\n" +
    "                       title=\"Escolha uma imagem que a largura seja maior que a altura\"></i>\r" +
    "\n" +
    "                    <i class=\"fa fa-times pointer\" aria-hidden=\"true\"\r" +
    "\n" +
    "                       title=\"Clique para remover a imagem\"\r" +
    "\n" +
    "                       ng-click=\"vm.removeImage(answerOption)\"></i>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <a href=\"https://drive.google.com/uc?export=view&id={{answerOption.image.id}}\" target=\"_blank\">\r" +
    "\n" +
    "                    <img class=\"img-thumbnail answer-option-img\"\r" +
    "\n" +
    "                         ng-src=\"https://drive.google.com/uc?export=view&id={{answerOption.image.id}}\"\r" +
    "\n" +
    "                         alt=\"{{vm.altImage}}\"\r" +
    "\n" +
    "                         title=\"Clique para abrir a imagem em tamanho real.\" />\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-sm-6\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <div class=\"pull-right\">\r" +
    "\n" +
    "                    <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\r" +
    "\n" +
    "                       title=\"Escolha uma imagem que a largura seja maior que a altura\"></i>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <div class=\"img-responsive my-gallery-no-img pointer\" style=\"height: 200px\"\r" +
    "\n" +
    "                     title=\"Clique para adicionar uma imagem\"\r" +
    "\n" +
    "                     ng-click=\"vm.authSvc.createPicker(vm.model.parent, vm.imageSelected, vm.multipleSelect)\">\r" +
    "\n" +
    "                    <i class=\"fa fa-picture-o fa-3x\" aria-hidden=\"true\"></i>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div ng-if=\"!vm.multipleSelect\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-12\">\r" +
    "\n" +
    "            <div class=\"pull-right\">\r" +
    "\n" +
    "                <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\r" +
    "\n" +
    "                   title=\"Escolha uma imagem que a largura seja maior que a altura\"></i>\r" +
    "\n" +
    "                <i class=\"fa fa-times pointer\" aria-hidden=\"true\" title=\"Clique para remover a imagem\"\r" +
    "\n" +
    "                   ng-if=\"vm.hasImage()\" ng-click=\"vm.imageRemoved()\"></i>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-12\">\r" +
    "\n" +
    "            <div ng-if=\"vm.hasImage()\">\r" +
    "\n" +
    "                <a href=\"https://drive.google.com/uc?export=view&id={{vm.model.image.id}}\" target=\"_blank\">\r" +
    "\n" +
    "                    <img class=\"img-thumbnail\"\r" +
    "\n" +
    "                         ng-src=\"https://drive.google.com/uc?export=view&id={{vm.model.image.id}}\"\r" +
    "\n" +
    "                         alt=\"{{vm.altImage}}\"\r" +
    "\n" +
    "                         title=\"Clique para abrir a imagem em tamanho real.\" />\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div ng-if=\"!vm.hasImage()\">\r" +
    "\n" +
    "                <div class=\"img-responsive my-gallery-no-img pointer\"\r" +
    "\n" +
    "                     title=\"Clique para adicionar uma imagem\"\r" +
    "\n" +
    "                     ng-click=\"vm.authSvc.createPicker(vm.model.parent, vm.imageSelected, vm.multipleSelect)\">\r" +
    "\n" +
    "                    <i class=\"fa fa-picture-o fa-3x\" aria-hidden=\"true\"></i>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/components/editor/layouts/answer-options/view/_answer-options.html',
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "        <button type=\"button\" class=\"btn btn-circle btn-success\" ng-click=\"vm.testSelectedActivity()\"\r" +
    "\n" +
    "                title=\"Clique para testar a atividade\">Testar atividade</button>\r" +
    "\n" +
    "        <button type=\"button\" class=\"btn btn-circle btn-primary\" ng-click=\"vm.answerOptionsForm.$valid && vm.saveAction()\"\r" +
    "\n" +
    "                ng-disabled=\"vm.answerOptionsForm.$invalid\">Salvar</button>\r" +
    "\n" +
    "        <button type=\"button\" class=\"btn btn-circle btn-danger\" ng-click=\"vm.deleteAction()\" ng-if=\"vm.selectedActivity.id\">Excluir</button>\r" +
    "\n" +
    "        <button type=\"button\" class=\"btn btn-link pull-right\" ng-click=\"vm.cancelAction()\">Cancelar</button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<hr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<form name=\"vm.answerOptionsForm\" novalidate angular-validator>\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-8\">\r" +
    "\n" +
    "            <div class=\"form-group\" ng-if=\"['LETTERS', 'PUZZLE'].indexOf(vm.selectedActivity.type) !== -1\">\r" +
    "\n" +
    "                <label>Adicione uma imagem para a atividade</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <editor-insert-image model=\"vm.selectedActivity\" alt-image=\"Imagem da atividade\"></editor-insert-image>\r" +
    "\n" +
    "                <hr>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"form-group hidden\">\r" +
    "\n" +
    "                <label>Adicionar um áudio para a atividade</label>\r" +
    "\n" +
    "                <i>Permitir adicionar áudio</i>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div ng-if=\"vm.selectedActivity.type === 'PICTURES'\">\r" +
    "\n" +
    "                <hr class=\"hidden\">\r" +
    "\n" +
    "                <div class=\"form-group\"\r" +
    "\n" +
    "                     ng-required=\"vm.selectedActivity.type === 'PICTURES'\">\r" +
    "\n" +
    "                    <label>Adicionar as respostas corretas</label>\r" +
    "\n" +
    "                    <editor-insert-image model=\"vm.selectedActivity\"\r" +
    "\n" +
    "                                         answer-type=\"CORRECT\"\r" +
    "\n" +
    "                                         alt-image=\"Opção de resposta correta\"\r" +
    "\n" +
    "                                         multiple-select=\"true\"></editor-insert-image>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <hr>\r" +
    "\n" +
    "                <div class=\"form-group\"\r" +
    "\n" +
    "                     ng-required=\"vm.selectedActivity.type === 'PICTURES'\">\r" +
    "\n" +
    "                    <label>Adicionar as respostas incorretas</label>\r" +
    "\n" +
    "                    <editor-insert-image model=\"vm.selectedActivity\"\r" +
    "\n" +
    "                                         answer-type=\"INCORRECT\"\r" +
    "\n" +
    "                                         alt-image=\"Opção de resposta incorreta\"\r" +
    "\n" +
    "                                         multiple-select=\"true\"></editor-insert-image>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-md-4\">\r" +
    "\n" +
    "            <div class=\"form-group required\">\r" +
    "\n" +
    "                <label class=\"control-label\" for=\"activity.name\">Nome da atividade</label>\r" +
    "\n" +
    "                <input class=\"form-control input-circle\"\r" +
    "\n" +
    "                       type=\"text\"\r" +
    "\n" +
    "                       id=\"activity.name\"\r" +
    "\n" +
    "                       required\r" +
    "\n" +
    "                       placeholder=\"Informe um nome para a atividade\"\r" +
    "\n" +
    "                       ng-model=\"vm.selectedActivity.name\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"form-group required\" ng-if=\"vm.selectedActivity.type === 'LETTERS'\">\r" +
    "\n" +
    "                <label class=\"control-label\" for=\"activity.answer\">Resposta</label>\r" +
    "\n" +
    "                <input class=\"form-control input-circle\"\r" +
    "\n" +
    "                       type=\"text\"\r" +
    "\n" +
    "                       id=\"activity.answer\"\r" +
    "\n" +
    "                       ng-maxlength=\"20\"\r" +
    "\n" +
    "                       placeholder=\"Informe a resposta da atividade\"\r" +
    "\n" +
    "                       ng-required=\"vm.selectedActivity.type === 'LETTERS'\"\r" +
    "\n" +
    "                       ng-model=\"vm.selectedActivity.answer\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"form-group\">\r" +
    "\n" +
    "                <label class=\"control-label\" for=\"activity.level\">Nível de dificuldade</label>\r" +
    "\n" +
    "                <select class=\"form-control btn-circle\"\r" +
    "\n" +
    "                        required\r" +
    "\n" +
    "                        id=\"activity.level\"\r" +
    "\n" +
    "                        placeholder=\"Informe um nível de dificuldade\"\r" +
    "\n" +
    "                        ng-model=\"vm.selectedActivity.level\"\r" +
    "\n" +
    "                        ng-options=\"option.value as option.label for option in vm.difficultyLevels\">\r" +
    "\n" +
    "                </select>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"form-group\" ng-class=\"{'required': vm.selectedActivity.type === 'PICTURES'}\">\r" +
    "\n" +
    "                <label for=\"activity.tip\">Dica</label>\r" +
    "\n" +
    "                <input class=\"form-control input-circle\"\r" +
    "\n" +
    "                       type=\"text\"\r" +
    "\n" +
    "                       id=\"activity.tip\"\r" +
    "\n" +
    "                       ng-required=\"vm.selectedActivity.type === 'PICTURES'\"\r" +
    "\n" +
    "                       placeholder=\"Informe uma dica para a atividade\"\r" +
    "\n" +
    "                       ng-model=\"vm.selectedActivity.tip\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"form-group\">\r" +
    "\n" +
    "                <label for=\"activity.time\">Tempo para resolução (mm:ss)</label>\r" +
    "\n" +
    "                <input class=\"form-control input-circle\"\r" +
    "\n" +
    "                       type=\"datetime\"\r" +
    "\n" +
    "                       id=\"activity.time\"\r" +
    "\n" +
    "                       placeholder=\"59:59\"\r" +
    "\n" +
    "                       ng-model=\"vm.selectedActivity.time\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</form>\r" +
    "\n"
  );


  $templateCache.put('src/components/editor/layouts/letters-layout/view/_letters-layout.html',
    "<h2><i>Abrir modal para customizar o dicionário</i></h2>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-sm-2\">\r" +
    "\n" +
    "        <h1 class=\"text-center\" ng-repeat=\"letter in vm.leftLetters track by $index\">{{letter}}</h1>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-sm-8 text-center\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <img ng-src=\"{{vm.activity.files.image.link}}\" ng-if=\"vm.activity.files.image.link\" alt=\"Imagem da resposta\"\r" +
    "\n" +
    "                     style=\"width: 500px; height: 500px;\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <i ng-if=\"vm.activity.tip\">Dica: {{vm.activity.tip}}</i>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <i class=\"fa fa-play-circle-o fa-5x\" onclick=\"document.getElementById('audio_esq').play()\"></i>\r" +
    "\n" +
    "                <audio id=\"audio_esq\" src=\"src/components/editor/layouts/letters-layout/GALINHA.mp3\"></audio>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-sm-2\">\r" +
    "\n" +
    "        <h1 class=\"text-center\" ng-repeat=\"letter in vm.rightLetters track by $index\">{{letter}}</h1>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-12 text-center\">\r" +
    "\n" +
    "        <h1 ng-repeat=\"letter in vm.getSplitAnswer() track by $index\" style=\"display: inline;\">\r" +
    "\n" +
    "            <u>{{letter}}</u>\r" +
    "\n" +
    "        </h1>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div>\r" +
    "\n" +
    "    <h2>Modal, botão testar</h2>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/components/editor/layouts/memory-game/view/_memory-game.html',
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<editor-answer-options></editor-answer-options>"
  );


  $templateCache.put('src/components/editor/layouts/puzzle/view/_puzzle.html',
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<editor-answer-options></editor-answer-options>"
  );


  $templateCache.put('src/components/game/letters-layout/view/_letters-layout.html',
    "<div class=\"panel-group\">\r" +
    "\n" +
    "    <div class=\"panel panel-default\">\r" +
    "\n" +
    "        <div class=\"panel-heading text-center\">\r" +
    "\n" +
    "            <div ng-if=\"vm.isWonMatch || vm.isWonGame || vm.isGameOver\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-12 game-result-text\">\r" +
    "\n" +
    "                        <div ng-if=\"vm.isWonMatch || vm.isWonGame\">\r" +
    "\n" +
    "                            <h1>Parabéns!</h1>\r" +
    "\n" +
    "                            <h3>Você ganhou {{vm.isWonGame ? \"o jogo\" : \"a partida\"}}</h3>\r" +
    "\n" +
    "                            <h4>O seu tempo foi de {{vm.getTimeResult() | date:\"mm:ss\"}}</h4>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div ng-if=\"vm.isGameOver\">\r" +
    "\n" +
    "                            <h1>Que pena!</h1>\r" +
    "\n" +
    "                            <h3>Você perdeu o jogo</h3>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                        <button class=\"btn btn-warning\"\r" +
    "\n" +
    "                                type=\"button\"\r" +
    "\n" +
    "                                ng-if=\"vm.gameMode === 'MULTIPLAYER' && vm.isWonGame\"\r" +
    "\n" +
    "                                ng-click=\"vm.actionPlayAgain()\">Jogar novamente</button>\r" +
    "\n" +
    "                        <button class=\"btn btn-warning\"\r" +
    "\n" +
    "                                type=\"button\"\r" +
    "\n" +
    "                                ng-if=\"vm.gameMode === 'SINGLE_PLAYER'\"\r" +
    "\n" +
    "                                ng-click=\"vm.actionPlayAgain()\">{{vm.isGameOver ? \"Tentar novamente\" : \"Jogar novamente\"}}</button>\r" +
    "\n" +
    "                        <button class=\"btn btn-success\"\r" +
    "\n" +
    "                                type=\"button\"\r" +
    "\n" +
    "                                ng-click=\"vm.actionNextPhase()\"\r" +
    "\n" +
    "                                ng-if=\"!vm.isWonGame && !vm.isGameOver\">Próxima fase</button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <hr>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            {{vm.timer | amDateFormat:\"mm:ss\"}}\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"panel-body\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-sm-4\">\r" +
    "\n" +
    "                    <button type=\"button\" class=\"btn btn-link text-decoration-none pull-left\"\r" +
    "\n" +
    "                            ng-if=\"vm.activity.image.id\"\r" +
    "\n" +
    "                            ng-init=\"vm.showImage = false;\" ng-click=\"vm.showImage = !vm.showImage;\">\r" +
    "\n" +
    "                        <i class=\"fa fa-picture-o fa-2x\"></i>\r" +
    "\n" +
    "                        {{vm.showImage ? \"Ocultar\" : \"Exibir\"}} imagem\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-sm-4 text-center\">\r" +
    "\n" +
    "                    <h4 ng-if=\"vm.activity.tip\">Dica: {{vm.activity.tip}}</h4>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-sm-4\">\r" +
    "\n" +
    "                    <button type=\"button\" class=\"btn btn-link text-decoration-none pull-right\"\r" +
    "\n" +
    "                            ng-click=\"vm.playSong()\">\r" +
    "\n" +
    "                        Reproduzir áudio\r" +
    "\n" +
    "                        <i class=\"fa fa-play-circle-o fa-2x\"></i>\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                    <audio id=\"audio_{{vm.customClass}}\" src=\"src/components/editor/layouts/letters-layout/GALINHA.mp3\"></audio>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row pictures-layout-answer-panel\">\r" +
    "\n" +
    "                <div class=\"col-md-12\"\r" +
    "\n" +
    "                     ng-if=\"vm.showImage && vm.activity.image.id\">\r" +
    "\n" +
    "                    <img ng-src=\"https://drive.google.com/uc?export=view&id={{vm.activity.image.id}}\" alt=\"vm.activity.image.name\">\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-md-12 text-center\">\r" +
    "\n" +
    "                    <ul class=\"list-inline letter-layout-answer\" id=\"answers_{{vm.customClass}}\"></ul>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"panel-footer\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-12 text-center\">\r" +
    "\n" +
    "                    <ul class=\"list-inline\" id=\"answerOptions_{{vm.customClass}}\"></ul>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/components/game/pictures-layout/view/_pictures-layout.html',
    "<div class=\"panel-group\">\r" +
    "\n" +
    "    <div class=\"panel panel-default\">\r" +
    "\n" +
    "        <div class=\"panel-heading text-center\">\r" +
    "\n" +
    "            <div ng-if=\"vm.isWonMatch || vm.isWonGame || vm.isGameOver\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-12 game-result-text\">\r" +
    "\n" +
    "                        <div ng-if=\"vm.isWonMatch || vm.isWonGame\">\r" +
    "\n" +
    "                            <h1>Parabéns!</h1>\r" +
    "\n" +
    "                            <h3>Você ganhou {{vm.isWonGame ? \"o jogo\" : \"a partida\"}}</h3>\r" +
    "\n" +
    "                            <h4>O seu tempo foi de {{vm.getTimeResult() | date:\"mm:ss\"}}</h4>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div ng-if=\"vm.isGameOver\">\r" +
    "\n" +
    "                            <h1>Que pena!</h1>\r" +
    "\n" +
    "                            <h3>Você perdeu o jogo</h3>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                        <button class=\"btn btn-warning\"\r" +
    "\n" +
    "                                type=\"button\"\r" +
    "\n" +
    "                                ng-if=\"vm.gameMode === 'MULTIPLAYER' && vm.isWonGame\"\r" +
    "\n" +
    "                                ng-click=\"vm.actionPlayAgain()\">Jogar novamente</button>\r" +
    "\n" +
    "                        <button class=\"btn btn-warning\"\r" +
    "\n" +
    "                                type=\"button\"\r" +
    "\n" +
    "                                ng-if=\"vm.gameMode === 'SINGLE_PLAYER'\"\r" +
    "\n" +
    "                                ng-click=\"vm.actionPlayAgain()\">{{vm.isGameOver ? \"Tentar novamente\" : \"Jogar novamente\"}}</button>\r" +
    "\n" +
    "                        <button class=\"btn btn-success\"\r" +
    "\n" +
    "                                type=\"button\"\r" +
    "\n" +
    "                                ng-click=\"vm.actionNextPhase()\"\r" +
    "\n" +
    "                                ng-if=\"!vm.isWonGame && !vm.isGameOver\">Próxima fase</button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <hr>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            {{vm.timer | amDateFormat:\"mm:ss\"}}\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"panel-body\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-sm-4\">\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-sm-4 text-center\">\r" +
    "\n" +
    "                    <h4 ng-if=\"vm.activity.tip\">Dica: {{vm.activity.tip}}</h4>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-sm-4\">\r" +
    "\n" +
    "                    <button type=\"button\" class=\"btn btn-link text-decoration-none pull-right\"\r" +
    "\n" +
    "                            ng-click=\"vm.playSong()\">\r" +
    "\n" +
    "                        Reproduzir áudio\r" +
    "\n" +
    "                        <i class=\"fa fa-play-circle-o fa-2x\"></i>\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                    <audio id=\"audio_{{vm.customClass}}\"\r" +
    "\n" +
    "                           src=\"src/components/editor/layouts/letters-layout/GALINHA.mp3\"></audio>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row pictures-layout-answer-panel\" id=\"answers_{{vm.customClass}}\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"panel-footer\">\r" +
    "\n" +
    "            <div class=\"row\" id=\"answerOptions_{{vm.customClass}}\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/modules/core/views/error/404.html',
    "<div class=\"alert alert-info\">O conteúdo que você está buscando não foi encontrado.</div>\r" +
    "\n" +
    "<h4>Você pode ajudar</h4>\r" +
    "\n" +
    "<ul>\r" +
    "\n" +
    "    <li>\r" +
    "\n" +
    "        <strong>Você digitou o link diretamente na barra de endereço?</strong><br>\r" +
    "\n" +
    "        Por gentileza, verifique se está correto.\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "    <li>\r" +
    "\n" +
    "        <strong>Você clicou em algum link para essa área?</strong><br>\r" +
    "\n" +
    "        É preciso contatar o administrador.\r" +
    "\n" +
    "    </li>\r" +
    "\n" +
    "</ul>"
  );


  $templateCache.put('src/modules/core/views/error/500.html',
    "<div class=\"alert alert-info\">Uma operação não esperada foi executada.</div>"
  );


  $templateCache.put('src/modules/core/views/error/accessdenied.html',
    "\r" +
    "\n" +
    "<div class=\"alert alert-info\">\r" +
    "\n" +
    "\t<h4>Você não tem acesso a essa área.</h4>\r" +
    "\n" +
    "\tVocê deveria estar visualizando essa área?\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/modules/core/views/error/index.html',
    "<div class=\"container\">\r" +
    "\n" +
    "\t<!-- BEGIN PAGE HEAD -->\r" +
    "\n" +
    "\t<div class=\"page-head\">\r" +
    "\n" +
    "\t\t<!-- BEGIN PAGE TITLE -->\r" +
    "\n" +
    "\t\t<div class=\"page-title\">\r" +
    "\n" +
    "\t\t\t<h1>{{$state.current.data.pageTitle}} <small>{{$state.current.data.subTitle}}</small></h1>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<!-- END PAGE TITLE -->\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<!-- END PAGE HEAD -->\r" +
    "\n" +
    "\t<!-- BEGIN PAGE CONTENT INNER -->\r" +
    "\n" +
    "\t<div class=\"row margin-top-10\">\r" +
    "\n" +
    "\t\t<div class=\"col-md-12\">\r" +
    "\n" +
    "\t\t\t<div class=\"portlet light\">\r" +
    "\n" +
    "\t\t\t\t<div class=\"portlet-body\" ui-view=\"error-content\">\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<!-- END CONTENT -->\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/modules/editor/category/views/add.html',
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-sm-8 col-md-6 col-lg-4\">\r" +
    "\n" +
    "        <editor-category-create-category category=\"vm.category\"></editor-category-create-category>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/modules/editor/category/views/edit.html',
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-sm-4 col-md-3\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <!--<editor-multiple-uploads done-callback=\"vm.doneFile(file, activity)\" on-remove-item=\"vm.removeFile(file, activity)\" options=\"{queueLimit: 1}\"></editor-multiple-uploads>-->\r" +
    "\n" +
    "        <label for=\"category.name\" class=\"control-label\">Assunto</label>\r" +
    "\n" +
    "        <input class=\"form-control input-circle\" type=\"text\"\r" +
    "\n" +
    "               id=\"category.name\"\r" +
    "\n" +
    "               ng-model=\"vm.categoryNewName\"\r" +
    "\n" +
    "               ng-value=\"vm.category.name\"\r" +
    "\n" +
    "               placeholder=\"Informe uma breve descrição para o assunto\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <hr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <editor-insert-image model=\"vm.category\" alt-image=\"Imagem do assunto\"></editor-insert-image>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<!--\r" +
    "\n" +
    "        <div ng-if=\"vm.hasImage()\">\r" +
    "\n" +
    "            <div class=\"pull-right\">\r" +
    "\n" +
    "                <i class=\"fa fa-times\" aria-hidden=\"true\"\r" +
    "\n" +
    "                   title=\"Clique para remover a imagem\"\r" +
    "\n" +
    "                   ng-click=\"vm.categoryImageRemoved()\"></i>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <a href=\"https://drive.google.com/uc?export=view&id={{vm.category.image.id}}\" target=\"_blank\">\r" +
    "\n" +
    "                <img class=\"img-thumbnail\"\r" +
    "\n" +
    "                     ng-src=\"https://drive.google.com/uc?export=view&id={{vm.category.image.id}}\"\r" +
    "\n" +
    "                     alt=\"Imagem da categoria\"\r" +
    "\n" +
    "                     title=\"Clique para abrir a imagem em tamanho real.\" />\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"img-responsive my-gallery-no-img pointer\"\r" +
    "\n" +
    "             title=\"Clique para adicionar uma imagem\"\r" +
    "\n" +
    "             ng-if=\"!vm.hasImage()\"\r" +
    "\n" +
    "             ng-click=\"app.authSvc.createPicker(vm.category.parent, vm.categoryImageSelected)\">\r" +
    "\n" +
    "            <i class=\"fa fa-picture-o fa-3x\" aria-hidden=\"true\"></i>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div ng-if=\"vm.category\">\r" +
    "\n" +
    "            <hr>\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-12\">\r" +
    "\n" +
    "                    <button class=\"btn btn-circle btn-primary btn-sm margin-bottom-5\"\r" +
    "\n" +
    "                            type=\"button\"\r" +
    "\n" +
    "                            ng-disabled=\"!vm.category.activities.length || !vm.isEnabledBtnExport()\"\r" +
    "\n" +
    "                            ng-click=\"vm.exportJSON()\">\r" +
    "\n" +
    "                        Exportar\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                    <button class=\"btn btn-circle btn-primary btn-sm margin-bottom-5\"\r" +
    "\n" +
    "                            type=\"button\"\r" +
    "\n" +
    "                            ng-disabled=\"!vm.category.activities.length || !vm.isEnabledBtnExport()\"\r" +
    "\n" +
    "                            ng-click=\"vm.generateQrCode()\">\r" +
    "\n" +
    "                        Gerar QR Code\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                    <button class=\"btn btn-circle btn-primary btn-sm margin-bottom-5 disabled\"\r" +
    "\n" +
    "                            type=\"button\"\r" +
    "\n" +
    "                            ng-disabled=\"!vm.category.activities.length || !vm.isEnabledBtnExport()\"\r" +
    "\n" +
    "                            ng-click=\"\"\r" +
    "\n" +
    "                            onclick=\"alert('Exportou a pasta compactada');\">\r" +
    "\n" +
    "                        Modo offline\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                    <a id=\"downloadAnchorElem\" style=\"display:none\"></a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-12\" ng-if=\"vm.isExporting\">\r" +
    "\n" +
    "                    <div>\r" +
    "\n" +
    "                        <i class=\"fa fa-fw fa-spin fa-spinner\"></i> <strong>{{'Aguarde um instante'}}</strong>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <hr>\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-12\">\r" +
    "\n" +
    "                    <a class=\"pointer\"\r" +
    "\n" +
    "                       title=\"Adicionar atividade\"\r" +
    "\n" +
    "                       ng-disabled=\"vm.category.activities.length && vm.isActivityAnswerEmpty()\"\r" +
    "\n" +
    "                       ng-click=\"vm.addActivity()\">\r" +
    "\n" +
    "                        <i class=\"fa fa-plus\"></i>\r" +
    "\n" +
    "                        Adicionar atividade\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <editor-category-list-activities\r" +
    "\n" +
    "                    activities=\"vm.category.activities\"\r" +
    "\n" +
    "                    all-selected=\"vm.isAllActivitiesSelected\"\r" +
    "\n" +
    "                    selected-activity=\"vm.selectedActivity\"\r" +
    "\n" +
    "                    toggle-all=\"vm.toggleAll()\"\r" +
    "\n" +
    "                    option-toggled=\"vm.optionToggled()\"\r" +
    "\n" +
    "                    ng-if=\"vm.category.activities.length\">\r" +
    "\n" +
    "            </editor-category-list-activities>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <hr>\r" +
    "\n" +
    "        <div class=\"row margin-bottom-20\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-circle btn-primary\"\r" +
    "\n" +
    "                        ng-disabled=\"vm.isLoading\"\r" +
    "\n" +
    "                        ng-click=\"vm.saveCategory()\">\r" +
    "\n" +
    "                    Salvar\r" +
    "\n" +
    "                </button>\r" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-circle btn-danger\"\r" +
    "\n" +
    "                        ng-disabled=\"vm.isLoading\"\r" +
    "\n" +
    "                        ng-click=\"vm.deleteCategory()\">Excluir</button>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\" ng-if=\"vm.isLoading\">\r" +
    "\n" +
    "                <div>\r" +
    "\n" +
    "                    <i class=\"fa fa-fw fa-spin fa-spinner\"></i> <strong>{{'Aguarde um instante'}}</strong>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-sm-8 col-md-9 margin-top-25\">\r" +
    "\n" +
    "        <div class=\"row\" ng-if=\"vm.qrCodeData\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <i class=\"fa fa-times pointer\" aria-hidden=\"true\"\r" +
    "\n" +
    "                   title=\"Clique para remover o QR Code\"\r" +
    "\n" +
    "                   ng-click=\"vm.qrCodeData = ''\"></i>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <qrcode data=\"{{vm.qrCodeData}}\" href=\"{{vm.qrCodeData}}\" size=\"200\"></qrcode>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <editor-category-activity-type\r" +
    "\n" +
    "                selected-activity=\"vm.selectedActivity\"\r" +
    "\n" +
    "                ng-if=\"vm.selectedActivity && !vm.selectedActivity.type\"></editor-category-activity-type>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div ng-if=\"vm.selectedActivity.type\">\r" +
    "\n" +
    "            <editor-answer-options\r" +
    "\n" +
    "                    selected-activity=\"vm.selectedActivity\"\r" +
    "\n" +
    "                    on-save-action=\"vm.saveActivity()\"\r" +
    "\n" +
    "                    on-delete-action=\"vm.deleteActivity()\"></editor-answer-options>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/modules/editor/gallery/view/index.html',
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "        <div class=\"portlet light bordered\">\r" +
    "\n" +
    "            <div class=\"portlet-title\">\r" +
    "\n" +
    "                <div class=\"caption\">\r" +
    "\n" +
    "                    <span class=\"caption-subject bold uppercase font-dark\">Galeria de assuntos padrão</span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"portlet-body\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                        <div class=\"alert alert-info\">\r" +
    "\n" +
    "                            Aqui são apresentados os assuntos padrão. Você pode escolher um deles e customizá-lo sem compromisso ;)\r" +
    "\n" +
    "                            <br>\r" +
    "\n" +
    "                            Se preferir, você pode acessar com sua conta Google. Clicar no botão \"Adicionar assunto\" e personalizar o assunto como quiser.\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-sm-4 col-md-3\" ng-if=\"app.authSvc.isSignedInGoogle()\">\r" +
    "\n" +
    "                        <a class=\"text-decoration-none\" ui-sref=\"editor.category.add\">\r" +
    "\n" +
    "                            <div class=\"my-gallery-add-category\">\r" +
    "\n" +
    "                                <i class=\"fa fa-plus fa-3x\" aria-hidden=\"true\"></i>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <h4 class=\"text-center ellipsis\">Adicionar assunto</h4>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-sm-4 col-md-3\" style=\"max-height: 235px; height: 235px;\" ng-repeat=\"category in vm.defaultCategories\">\r" +
    "\n" +
    "                        <a class=\"text-decoration-none\">\r" +
    "\n" +
    "                            <div class=\"img-responsive my-gallery-no-img\"\r" +
    "\n" +
    "                                 ng-style=\"category.image.id && {'background-image': 'url(https://drive.google.com/uc?export=view&id={{category.image.id}})'}\">\r" +
    "\n" +
    "                                <i class=\"fa fa-picture-o fa-3x\" aria-hidden=\"true\" ng-if=\"!category.image.id\"></i>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <h4 class=\"text-center ellipsis\">{{category.name}}</h4>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/modules/editor/my-gallery/view/index.html',
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "        <div class=\"portlet light bordered\">\r" +
    "\n" +
    "            <div class=\"portlet-title\">\r" +
    "\n" +
    "                <div class=\"caption\">\r" +
    "\n" +
    "                    <span class=\"caption-subject bold uppercase font-dark\">Meu álbum de assuntos</span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"portlet-body\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                        <div class=\"alert alert-info\">\r" +
    "\n" +
    "                            Aqui são apresentados os assuntos já criados. Você pode editá-los quando quiser.\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div ng-if=\"app.authSvc.isSignedInGoogle()\">\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-sm-3 text-center\" ng-repeat=\"category in vm.categories | orderBy:'createdTime':true\">\r" +
    "\n" +
    "                            <a class=\"text-decoration-none\" href=\"#\" ui-sref=\"editor.category.edit({id: category.id})\">\r" +
    "\n" +
    "                                <div class=\"img-responsive my-gallery-no-img\"\r" +
    "\n" +
    "                                     ng-style=\"category.image.id && {'background-image': 'url(https://drive.google.com/uc?export=view&id={{category.image.id}})'}\">\r" +
    "\n" +
    "                                    <i class=\"fa fa-picture-o fa-3x\" aria-hidden=\"true\" ng-if=\"!category.image.id\"></i>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <h4 class=\"text-center ellipsis\">{{category.name}}</h4>\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"row\" ng-if=\"!vm.categories.length\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <div class=\"alert alert-info\">Você não possui assuntos em seu álbum. :(</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"row\" ng-if=\"!app.authSvc.isSignedInGoogle()\">\r" +
    "\n" +
    "                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                        <div class=\"alert alert-warning\">Para consultar o seu álbum é necessário estar conectado com o Google.</div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/modules/game/views/_multiplayer.html',
    "<div class=\"col-md-6\" id=\"player1\">\r" +
    "\n" +
    "    <game-letters-layout\r" +
    "\n" +
    "            action-next-phase=\"vm.actionNextPhase()\"\r" +
    "\n" +
    "            activity=\"vm.selectedActivityLeft\"\r" +
    "\n" +
    "            custom-class=\"left\"\r" +
    "\n" +
    "            game-mode=\"vm.gameMode\"\r" +
    "\n" +
    "            are-there-more-phases=\"vm.areThereMorePhases()\"\r" +
    "\n" +
    "            play=\"vm.play()\"\r" +
    "\n" +
    "            won-match=\"vm.isLeftWonMatch\"\r" +
    "\n" +
    "            won-game=\"vm.isLeftWonGame\"\r" +
    "\n" +
    "            game-over=\"vm.isLeftGameOver\"\r" +
    "\n" +
    "            ng-if=\"vm.selectedActivityLeft.type === 'LETTERS'\"></game-letters-layout>\r" +
    "\n" +
    "    <game-pictures-layout\r" +
    "\n" +
    "            action-next-phase=\"vm.actionNextPhase()\"\r" +
    "\n" +
    "            activity=\"vm.selectedActivityLeft\"\r" +
    "\n" +
    "            custom-class=\"left\"\r" +
    "\n" +
    "            game-mode=\"vm.gameMode\"\r" +
    "\n" +
    "            are-there-more-phases=\"vm.areThereMorePhases()\"\r" +
    "\n" +
    "            play=\"vm.play()\"\r" +
    "\n" +
    "            won-match=\"vm.isLeftWonMatch\"\r" +
    "\n" +
    "            won-game=\"vm.isLeftWonGame\"\r" +
    "\n" +
    "            game-over=\"vm.isLeftGameOver\"\r" +
    "\n" +
    "            ng-if=\"vm.selectedActivityLeft.type === 'PICTURES'\"></game-pictures-layout>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"col-md-6\" id=\"player2\">\r" +
    "\n" +
    "    <game-letters-layout\r" +
    "\n" +
    "            action-next-phase=\"vm.actionNextPhase()\"\r" +
    "\n" +
    "            activity=\"vm.selectedActivityRight\"\r" +
    "\n" +
    "            custom-class=\"right\"\r" +
    "\n" +
    "            game-mode=\"vm.gameMode\"\r" +
    "\n" +
    "            are-there-more-phases=\"vm.areThereMorePhases()\"\r" +
    "\n" +
    "            play=\"vm.play()\"\r" +
    "\n" +
    "            won-match=\"vm.isRightWonMatch\"\r" +
    "\n" +
    "            won-game=\"vm.isRightWonGame\"\r" +
    "\n" +
    "            game-over=\"vm.isRightGameOver\"\r" +
    "\n" +
    "            ng-if=\"vm.selectedActivityRight.type === 'LETTERS'\"></game-letters-layout>\r" +
    "\n" +
    "    <game-pictures-layout\r" +
    "\n" +
    "            action-next-phase=\"vm.actionNextPhase()\"\r" +
    "\n" +
    "            activity=\"vm.selectedActivityRight\"\r" +
    "\n" +
    "            custom-class=\"right\"\r" +
    "\n" +
    "            game-mode=\"vm.gameMode\"\r" +
    "\n" +
    "            are-there-more-phases=\"vm.areThereMorePhases()\"\r" +
    "\n" +
    "            play=\"vm.play()\"\r" +
    "\n" +
    "            won-match=\"vm.isRightWonMatch\"\r" +
    "\n" +
    "            won-game=\"vm.isRightWonGame\"\r" +
    "\n" +
    "            game-over=\"vm.isRightGameOver\"\r" +
    "\n" +
    "            ng-if=\"vm.selectedActivityRight.type === 'PICTURES'\"></game-pictures-layout>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/modules/game/views/category.html',
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "        <div class=\"portlet light bordered\">\r" +
    "\n" +
    "            <div class=\"portlet-title\">\r" +
    "\n" +
    "                <div class=\"caption\">\r" +
    "\n" +
    "                    <span class=\"caption-subject bold uppercase font-dark\">Escolha um assunto</span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"actions\">\r" +
    "\n" +
    "                    <label class=\"btn btn-link pull-right\" for=\"JSON_upload\" ng-click=\"vm.handleJsonSelect()\">Importar assunto</label>\r" +
    "\n" +
    "                    <input type=\"file\"\r" +
    "\n" +
    "                           style=\"display: none\"\r" +
    "\n" +
    "                           id=\"JSON_upload\"\r" +
    "\n" +
    "                           name=\"JSON_upload\"\r" +
    "\n" +
    "                           ng-model=\"vm.categoryBase64\"\r" +
    "\n" +
    "                           accept=\"application/json\" game-file-reader/>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"portlet-body text-center\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                        <div class=\"col-sm-4 col-md-3\" style=\"max-height: 235px; height: 235px;\" ng-repeat=\"category in vm.categories\">\r" +
    "\n" +
    "                            <a class=\"text-decoration-none\" ui-sref=\"game.mode({category: category, categoryId: category.id, loaded: true})\">\r" +
    "\n" +
    "                                <div class=\"img-responsive my-gallery-no-img\"\r" +
    "\n" +
    "                                     ng-style=\"category.image.id && {'background-image': 'url(https://drive.google.com/uc?export=view&id={{category.image.id}})'}\">\r" +
    "\n" +
    "                                    <i class=\"fa fa-picture-o fa-3x\" aria-hidden=\"true\" ng-if=\"!category.image.id\"></i>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <h4 class=\"text-center ellipsis\">{{category.name}}</h4>\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/modules/game/views/game-mode.html',
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "        <div class=\"portlet light bordered\">\r" +
    "\n" +
    "            <div class=\"portlet-title\">\r" +
    "\n" +
    "                <div class=\"caption\">\r" +
    "\n" +
    "                    <span class=\"caption-subject bold uppercase font-dark\">Escolha o modo de jogo</span>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"portlet-body text-center\">\r" +
    "\n" +
    "                <div class=\"row text-center\">\r" +
    "\n" +
    "                    <div class=\"col-sm-6\" ng-class=\"{'margin-bottom-10': $index === 0}\" ng-repeat=\"gameMode in vm.gameModes | orderBy:$index\">\r" +
    "\n" +
    "                        <button class=\"btn btn-default btn-circle btn-lg btn-game-mode\" type=\"button\"\r" +
    "\n" +
    "                                ng-click=\"vm.goToPlay(gameMode.type)\">\r" +
    "\n" +
    "                            <i class=\"fa \" ng-class=\"gameMode.icon\"></i>\r" +
    "\n" +
    "                            {{gameMode.label}}\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/modules/game/views/play.html',
    "<div ng-init=\"vm.play()\"></div>\r" +
    "\n" +
    "<div class=\"row\" ng-if=\"vm.gameMode === 'SINGLE_PLAYER'\">\r" +
    "\n" +
    "    <div class=\"col-md-12 text-center\">\r" +
    "\n" +
    "        <game-letters-layout\r" +
    "\n" +
    "                action-next-phase=\"vm.actionNextPhase()\"\r" +
    "\n" +
    "                activity=\"vm.selectedActivity\"\r" +
    "\n" +
    "                game-mode=\"vm.gameMode\"\r" +
    "\n" +
    "                are-there-more-phases=\"vm.areThereMorePhases()\"\r" +
    "\n" +
    "                play=\"vm.play()\"\r" +
    "\n" +
    "                won-match=\"vm.isWonMatch\"\r" +
    "\n" +
    "                won-game=\"vm.isWonGame\"\r" +
    "\n" +
    "                game-over=\"vm.isGameOver\"\r" +
    "\n" +
    "                ng-if=\"vm.selectedActivity.type === 'LETTERS'\"></game-letters-layout>\r" +
    "\n" +
    "        <game-pictures-layout\r" +
    "\n" +
    "                action-next-phase=\"vm.actionNextPhase()\"\r" +
    "\n" +
    "                activity=\"vm.selectedActivity\"\r" +
    "\n" +
    "                game-mode=\"vm.gameMode\"\r" +
    "\n" +
    "                are-there-more-phases=\"vm.areThereMorePhases()\"\r" +
    "\n" +
    "                play=\"vm.play()\"\r" +
    "\n" +
    "                won-match=\"vm.isWonMatch\"\r" +
    "\n" +
    "                won-game=\"vm.isWonGame\"\r" +
    "\n" +
    "                game-over=\"vm.isGameOver\"\r" +
    "\n" +
    "                ng-if=\"vm.selectedActivity.type === 'PICTURES'\"></game-pictures-layout>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"row\" ng-if=\"vm.gameMode === 'MULTIPLAYER'\" ng-init=\"vm.godFunction()\">\r" +
    "\n" +
    "    <div ng-include=\"'src/modules/game/views/_multiplayer.html'\"></div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/modules/game/views/start.html',
    "<div class=\"panel-group\">\r" +
    "\n" +
    "    <div class=\"panel panel-default\">\r" +
    "\n" +
    "        <div class=\"panel-heading text-center\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-12\">\r" +
    "\n" +
    "                    <h1>EasyEdu</h1>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"panel-body text-center\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-12\">\r" +
    "\n" +
    "                    <a class=\"btn btn-circle btn-success btn-lg\" ui-sref=\"game.category\">Iniciar</a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"panel-footer\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-12\">\r" +
    "\n" +
    "                    <label class=\"btn btn-link pull-right\" for=\"JSON_upload\" ng-click=\"vm.handleJsonSelect()\">Importar assunto</label>\r" +
    "\n" +
    "                    <input type=\"file\"\r" +
    "\n" +
    "                           style=\"display: none\"\r" +
    "\n" +
    "                           id=\"JSON_upload\"\r" +
    "\n" +
    "                           name=\"JSON_upload\"\r" +
    "\n" +
    "                           ng-model=\"vm.categoryBase64\"\r" +
    "\n" +
    "                           accept=\"application/json\" game-file-reader/>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );

}]);
