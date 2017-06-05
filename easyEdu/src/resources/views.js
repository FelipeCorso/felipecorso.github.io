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
    "        <button class=\"btn btn-link\" type=\"button\" ng-click=\"vm.setType('PUZZLE')\" disabled>\r" +
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
    "        <button class=\"btn btn-link\" type=\"button\" ng-click=\"vm.setType('MEMORY')\" disabled>\r" +
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
    "        <div class=\"pull-right\">\r" +
    "\n" +
    "            <i class=\"fa fa-times\" aria-hidden=\"true\"\r" +
    "\n" +
    "               title=\"Clique para remover a imagem\"\r" +
    "\n" +
    "               ng-click=\"vm.removeImage(answerOption)\"></i>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <a href=\"https://drive.google.com/uc?export=view&id={{answerOption.image.id}}\" target=\"_blank\">\r" +
    "\n" +
    "            <img class=\"img-thumbnail answer-option-img\"\r" +
    "\n" +
    "                 ng-src=\"https://drive.google.com/uc?export=view&id={{answerOption.image.id}}\"\r" +
    "\n" +
    "                 alt=\"{{vm.altImage}}\"\r" +
    "\n" +
    "                 title=\"Clique para abrir a imagem em tamanho real.\" />\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-sm-6\">\r" +
    "\n" +
    "        <div class=\"img-responsive my-gallery-no-img margin-top-20 pointer\" style=\"height: 200px\"\r" +
    "\n" +
    "             title=\"Clique para adicionar uma imagem\"\r" +
    "\n" +
    "             ng-click=\"vm.authSvc.createPicker(vm.model.parent, vm.imageSelected, vm.multipleSelect)\">\r" +
    "\n" +
    "            <i class=\"fa fa-picture-o fa-3x\" aria-hidden=\"true\"></i>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"row\" ng-if=\"!vm.multipleSelect\">\r" +
    "\n" +
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "        <div ng-if=\"vm.hasImage()\">\r" +
    "\n" +
    "            <div class=\"pull-right\">\r" +
    "\n" +
    "                <i class=\"fa fa-info-circle\" aria-hidden=\"true\"\r" +
    "\n" +
    "                   title=\"Escolha uma imagem que a largura seja maior que a altura\"></i>\r" +
    "\n" +
    "                <i class=\"fa fa-times\" aria-hidden=\"true\"\r" +
    "\n" +
    "                   title=\"Clique para remover a imagem\"\r" +
    "\n" +
    "                   ng-click=\"vm.imageRemoved()\"></i>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <a href=\"https://drive.google.com/uc?export=view&id={{vm.model.image.id}}\" target=\"_blank\">\r" +
    "\n" +
    "                <img class=\"img-thumbnail\"\r" +
    "\n" +
    "                     ng-src=\"https://drive.google.com/uc?export=view&id={{vm.model.image.id}}\"\r" +
    "\n" +
    "                     alt=\"{{vm.altImage}}\"\r" +
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
    "             ng-click=\"vm.authSvc.createPicker(vm.model.parent, vm.imageSelected, vm.multipleSelect)\">\r" +
    "\n" +
    "            <i class=\"fa fa-picture-o fa-3x\" aria-hidden=\"true\"></i>\r" +
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


  $templateCache.put('src/components/editor/layouts/multiple-uploads/views/_multiple-uploads.html',
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "        <span ng-if=\"vm.uploader.queueLimit != 1\" class=\"btn btn-success fileinput-button\" ng-class=\"{disabled: vm.disabled}\">\r" +
    "\n" +
    "            <i class=\"fa fa-fw fa-plus\"></i>\r" +
    "\n" +
    "            <span>Adicionar arquivos</span>\r" +
    "\n" +
    "            <input type=\"file\" nv-file-select=\"\" uploader=\"vm.uploader\" multiple/>\r" +
    "\n" +
    "        </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "         <span ng-if=\"vm.uploader.queueLimit === 1 && vm.uploader.queue.length === 0\" class=\"btn btn-success fileinput-button\" ng-class=\"{disabled: vm.disabled}\">\r" +
    "\n" +
    "            <i class=\"fa fa-fw fa-plus\"></i>\r" +
    "\n" +
    "            <span>Adicionar arquivo</span>\r" +
    "\n" +
    "            <input type=\"file\" nv-file-select=\"\" uploader=\"vm.uploader\" />\r" +
    "\n" +
    "        </span>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"col-md-12\" ng-if=\"vm.uploader.queue.length || vm.uploaderErrors.length\">\r" +
    "\n" +
    "        <div class=\"table\">\r" +
    "\n" +
    "            <div class=\"hidden-xs col-sm-6 bold padding-top-10 padding-left-10 padding-right-10 \">Nome do arquivo</div>\r" +
    "\n" +
    "            <div class=\"hidden-xs col-sm-2 bold padding-top-10 padding-left-10 padding-right-10 \">Tamanho</div>\r" +
    "\n" +
    "            <div class=\"hidden-xs col-sm-2 bold padding-top-10 padding-left-10 padding-right-10 \">Progresso</div>\r" +
    "\n" +
    "            <div class=\"hidden-xs col-sm-2 bold padding-top-10 padding-left-10 padding-right-10 \">Ações</div>\r" +
    "\n" +
    "            <div class=\"no-padding row-sm-height col-md-12\" ng-repeat=\"item in vm.uploader.queue\">\r" +
    "\n" +
    "                <hr class=\"hidden-xs col-xs-12 no-padding margin-bottom-5 margin-top-5\" ng-style=\"{'border-width': $first ? '2px' : '1px'}\">\r" +
    "\n" +
    "                <div class=\"row-sm-height\">\r" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-6 padding-left-10 padding-right-10 text-center bold padding-top-10\">Nome do arquivo</div>\r" +
    "\n" +
    "                    <div class=\"hidden-xs col-xs-12 col-sm-6 padding-left-10 padding-right-10 col-sm-height col-sm-middle bold\">{{item.file.name}}</div>\r" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-6 padding-left-10 padding-right-10 col-sm-height col-sm-middle text-center\">{{item.file.name}}</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 text-center bold padding-top-10\">Tamanho</div>\r" +
    "\n" +
    "                    <div class=\"hidden-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 col-sm-height col-sm-middle\">{{item.file.size/1024/1024|number:2}} MB</div>\r" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 col-sm-height col-sm-middle text-center\">{{item.file.size/1024/1024|number:2}} MB</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 text-center bold padding-top-10\">Progresso</div>\r" +
    "\n" +
    "                    <div class=\"col-xs-12 col-sm-2 padding-left-10 padding-right-10 col-sm-height col-sm-middle\">\r" +
    "\n" +
    "                        <div class=\"progress\" style=\"margin-bottom: 0;\">\r" +
    "\n" +
    "                            <div class=\"progress-bar\" role=\"progressbar\" ng-style=\"{ 'width': item.progress + '%' }\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 text-center bold padding-top-10\">Ações</div>\r" +
    "\n" +
    "                    <div class=\"hidden-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 col-sm-height col-sm-middle\">\r" +
    "\n" +
    "                        <button ng-if=\"item.isUploading\" type=\"button\" class=\"btn btn-warning btn-xs\" ng-click=\"item.cancel(); item.remove()\"\r" +
    "\n" +
    "                                ng-disabled=\"!item.isUploading\">\r" +
    "\n" +
    "                            <span class=\"fa fa-fw fa-ban\"></span> Cancelar\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-danger btn-xs\" ng-click=\"item.remove(); vm.removeItem(item)\">\r" +
    "\n" +
    "                            <span class=\"fa fa-fw fa-remove\"></span> Remover\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 col-sm-height col-sm-middle text-center\">\r" +
    "\n" +
    "                        <button ng-if=\"item.isUploading\" type=\"button\" class=\"btn btn-warning btn-xs\" ng-click=\"item.cancel(); item.remove()\"\r" +
    "\n" +
    "                                ng-disabled=\"!item.isUploading\">\r" +
    "\n" +
    "                            <span class=\"fa fa-fw fa-ban\"></span> Cancelar\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-danger btn-xs\" ng-click=\"item.remove(); vm.removeItem(item)\">\r" +
    "\n" +
    "                            <span class=\"fa fa-fw fa-remove\"></span> Remover\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <hr class=\"visible-xs col-xs-12 no-padding no-margin-bottom margin-top-15\" ng-if=\"!$last\">\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"no-padding row-sm-height col-md-12\" ng-repeat=\"item in vm.uploaderErrors\">\r" +
    "\n" +
    "                <hr class=\"hidden-xs col-xs-12 no-padding margin-bottom-5 margin-top-5\" ng-style=\"{'border-width': $first && !vm.uploader.queue.length ? '2px' : '1px'}\">\r" +
    "\n" +
    "                <div class=\"row-sm-height\">\r" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-6 padding-left-10 padding-right-10 text-center bold padding-top-10\">Nome do arquivo</div>\r" +
    "\n" +
    "                    <div class=\"hidden-xs col-xs-12 col-sm-6 padding-left-10 padding-right-10 col-sm-height col-sm-middle bold\">{{item.file.name}}</div>\r" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-6 padding-left-10 padding-right-10 col-sm-height col-sm-middle text-center\">{{item.file.name}}</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 text-center bold padding-top-10\">Tamanho</div>\r" +
    "\n" +
    "                    <div class=\"hidden-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 col-sm-height col-sm-middle\">{{item.file.size/1024/1024|number:2}} MB</div>\r" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 col-sm-height col-sm-middle text-center\">{{item.file.size/1024/1024|number:2}} MB</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 text-center bold padding-top-10\">Progresso</div>\r" +
    "\n" +
    "                    <div class=\"hidden-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 col-sm-height col-sm-middle text-danger\">item.file.error</div>\r" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 col-sm-height col-sm-middle text-danger text-center\">item.file.error</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 text-center bold padding-top-10\">Ações</div>\r" +
    "\n" +
    "                    <div class=\"col-xs-12 col-sm-2 padding-left-10 padding-right-10 text-center bold padding-top-10\">\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn btn-danger btn-xs\" ng-click=\"vm.removeErrorItem($index)\">\r" +
    "\n" +
    "                            <span class=\"fa fa-fw fa-remove\"></span> Remover\r" +
    "\n" +
    "                        </button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <hr class=\"visible-xs col-xs-12 no-padding no-margin-bottom margin-top-15\" ng-if=\"!$last\">\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <hr/>\r" +
    "\n" +
    "        <div ng-if=\"vm.uploader.getNotUploadedItems().length\">\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <div class=\"progress\">\r" +
    "\n" +
    "                    <div class=\"progress-bar\" role=\"progressbar\" ng-style=\"{ 'width': vm.uploader.progress + '%' }\"></div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <button ng-if=\"!vm.uploader.autoUpload\" type=\"button\" class=\"btn btn-success btn-s\" ng-click=\"vm.uploader.uploadAll()\"\r" +
    "\n" +
    "                    ng-disabled=\"!vm.uploader.getNotUploadedItems().length\">\r" +
    "\n" +
    "                <span class=\"fa fa-fw fa-upload\"></span> Enviar todos\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "            <button ng-if=\"vm.uploader.isUploading\" type=\"button\" class=\"btn btn-warning btn-s\" ng-click=\"vm.uploader.cancelAll()\"\r" +
    "\n" +
    "                    ng-disabled=\"!vm.uploader.isUploading\">\r" +
    "\n" +
    "                <span class=\"fa fa-fw fa-ban\"></span> Cancelar todos\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "            <button ng-if=\"vm.uploader.isUploading\"  type=\"button\" class=\"btn btn-danger btn-s\" ng-click=\"vm.uploader.clearQueue()\"\r" +
    "\n" +
    "                    ng-disabled=\"!vm.uploader.queue.length\">\r" +
    "\n" +
    "                <span class=\"fa fa-fw fa-trash\"></span> Remover todos\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
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
    "<!--ng-class=\"vm.customClass\"-->\r" +
    "\n" +
    "<!--\r" +
    "\n" +
    "<div class=\"row\" style=\"margin-bottom: 20px; margin-top: 20px;\">\r" +
    "\n" +
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "        <div class=\"canvas-center\" id=\"gameCanvas_{{vm.customClass}}\"></div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"canvas-center\" id=\"gameCanvas_{{vm.customClass}}\"></div>"
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
    "                            <h3>Você ganhou {{vm.isWonMatch ? \"a partida\" : \"o jogo\"}}</h3>\r" +
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
    "                <div class=\"col-md-12 text-center\">\r" +
    "\n" +
    "                    <h4>{{vm.activity.tip}}</h4>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row pictures-layout-answer-panel\" id=\"answers\" ng-init=\"vm.init()\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"panel-footer\">\r" +
    "\n" +
    "            <div class=\"row\" id=\"answerOptions\">\r" +
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
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <qrcode data=\"{{vm.qrCodeData}}\" href=\"{{vm.qrCodeData}}\" ng-if=\"vm.qrCodeData\" size=\"200\"></qrcode>\r" +
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
    "\r" +
    "\n" +
    "        <a ui-sref=\"editor.category.add\">\r" +
    "\n" +
    "            <i class=\"fa fa-plus fa-3x\"></i> Adicionar assunto\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"row margin-top-20\">\r" +
    "\n" +
    "    <div class=\"col-sm-4 col-md-3\" style=\"max-height: 235px; height: 235px;\" ng-repeat=\"category in vm.defaultCategories\">\r" +
    "\n" +
    "        <a class=\"text-decoration-none\">\r" +
    "\n" +
    "            <div class=\"img-responsive my-gallery-no-img\"\r" +
    "\n" +
    "                 ng-style=\"category.image.id && {'background-image': 'url(https://drive.google.com/uc?export=view&id={{category.image.id}})'}\">\r" +
    "\n" +
    "                <i class=\"fa fa-picture-o fa-3x\" aria-hidden=\"true\" ng-if=\"!category.image.id\"></i>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <h4 class=\"text-center ellipsis\">{{category.name}}</h4>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/modules/editor/my-gallery/view/index.html',
    "<div ng-if=\"app.authSvc.isSignedInGoogle()\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-sm-3 text-center\" ng-repeat=\"category in vm.categories\">\r" +
    "\n" +
    "            <a href=\"#\" ui-sref=\"editor.category.edit({id: category.id})\">\r" +
    "\n" +
    "                <div class=\"img-responsive my-gallery-no-img\"\r" +
    "\n" +
    "                     ng-style=\"category.image.id && {'background-image': 'url(https://drive.google.com/uc?export=view&id={{category.image.id}})'}\">\r" +
    "\n" +
    "                    <i class=\"fa fa-picture-o fa-3x\" aria-hidden=\"true\" ng-if=\"!category.image.id\"></i>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <h4 class=\"text-center ellipsis\">{{category.name}}</h4>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"row\" ng-if=\"!vm.categories.length\">\r" +
    "\n" +
    "        <div class=\"col-md-12\">\r" +
    "\n" +
    "            <div class=\"alert alert-info\">Você não possui assuntos em seu álbum. :(</div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"row\" ng-if=\"!app.authSvc.isSignedInGoogle()\">\r" +
    "\n" +
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "        <div class=\"alert alert-warning\">Para consultar o seu álbum é necessário estar conectado com o Google.</div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/modules/editor/views/index.html',
    "<div class=\"page-container-bg-solid page-header-fixed page-sidebar-closed-hide-logo\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"page-header navbar navbar-fixed-top\">\r" +
    "\n" +
    "        <!-- BEGIN HEADER INNER -->\r" +
    "\n" +
    "        <div class=\"page-header-inner \">\r" +
    "\n" +
    "            <!-- BEGIN LOGO -->\r" +
    "\n" +
    "            <div class=\"page-logo\">\r" +
    "\n" +
    "                <!--<a href=\"index.html\">\r" +
    "\n" +
    "                    <img src=\"../assets/layouts/layout4/img/logo-light.png\" alt=\"logo\" class=\"logo-default\">\r" +
    "\n" +
    "                </a>-->\r" +
    "\n" +
    "                <h1 class=\"brand-name\">EasyEdu</h1>\r" +
    "\n" +
    "                <div class=\"menu-toggler sidebar-toggler hide\">\r" +
    "\n" +
    "                    <!-- DOC: Remove the above \"hide\" to enable the sidebar toggler button on header -->\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <!-- END LOGO -->\r" +
    "\n" +
    "            <!-- BEGIN RESPONSIVE MENU TOGGLER -->\r" +
    "\n" +
    "            <a href=\"javascript:;\" class=\"menu-toggler responsive-toggler\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> </a>\r" +
    "\n" +
    "            <!-- END RESPONSIVE MENU TOGGLER -->\r" +
    "\n" +
    "            <!-- BEGIN PAGE ACTIONS -->\r" +
    "\n" +
    "            <!-- DOC: Remove \"hide\" class to enable the page header actions -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <!-- END PAGE ACTIONS -->\r" +
    "\n" +
    "            <!-- BEGIN PAGE TOP -->\r" +
    "\n" +
    "            <div class=\"page-top\">\r" +
    "\n" +
    "                <!-- BEGIN HEADER SEARCH BOX -->\r" +
    "\n" +
    "                <!-- DOC: Apply \"search-form-expanded\" right after the \"search-form\" class to have half expanded search box -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <!-- END HEADER SEARCH BOX -->\r" +
    "\n" +
    "                <!-- BEGIN TOP NAVIGATION MENU -->\r" +
    "\n" +
    "                <div class=\"top-menu\">\r" +
    "\n" +
    "                    <ul class=\"nav navbar-nav pull-right\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <!-- BEGIN NOTIFICATION DROPDOWN -->\r" +
    "\n" +
    "                        <!-- DOC: Apply \"dropdown-dark\" class after below \"dropdown-extended\" to change the dropdown styte -->\r" +
    "\n" +
    "                        <!-- DOC: Apply \"dropdown-hoverable\" class after \"dropdown\" and remove data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\" attributes to enable hover dropdown mode -->\r" +
    "\n" +
    "                        <!-- DOC: Remove \"dropdown-hoverable\" and add data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\" attributes to the below A element with dropdown-toggle class -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <!-- END NOTIFICATION DROPDOWN -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <!-- BEGIN INBOX DROPDOWN -->\r" +
    "\n" +
    "                        <!-- DOC: Apply \"dropdown-dark\" class after below \"dropdown-extended\" to change the dropdown styte -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <!-- END INBOX DROPDOWN -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <!-- BEGIN TODO DROPDOWN -->\r" +
    "\n" +
    "                        <!-- DOC: Apply \"dropdown-dark\" class after below \"dropdown-extended\" to change the dropdown styte -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <!-- END TODO DROPDOWN -->\r" +
    "\n" +
    "                        <!-- BEGIN USER LOGIN DROPDOWN -->\r" +
    "\n" +
    "                        <!-- DOC: Apply \"dropdown-dark\" class after below \"dropdown-extended\" to change the dropdown styte -->\r" +
    "\n" +
    "                        <li class=\"dropdown dropdown-user dropdown-dark\" ng-if=\"app.authSvc.isSignedInGoogle()\">\r" +
    "\n" +
    "                            <a href=\"javascript:;\" class=\"dropdown-toggle\" id=\"dLabel\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\" aria-expanded=\"false\">\r" +
    "\n" +
    "                                <span class=\"username username-hide-on-mobile\"> {{vm.userInformation.name}} </span>\r" +
    "\n" +
    "                                <!-- DOC: Do not remove below empty space(&nbsp;) as its purposely used -->\r" +
    "\n" +
    "                                <img class=\"img-circle\" alt=\"User photo\" ng-src=\"{{vm.userInformation.urlPhoto}}\">\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                            <ul class=\"dropdown-menu dropdown-menu-default\" aria-labelledby=\"dLabel\">\r" +
    "\n" +
    "                                <li>\r" +
    "\n" +
    "                                    <a href=\"javascript:;\" ng-click=\"app.authSvc.handleSignOutClick($event)\">\r" +
    "\n" +
    "                                        <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Sair\r" +
    "\n" +
    "                                    </a>\r" +
    "\n" +
    "                                </li>\r" +
    "\n" +
    "                            </ul>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <li class=\"dropdown dropdown-user dropdown-dark\" ng-if=\"!app.authSvc.isSignedInGoogle()\">\r" +
    "\n" +
    "                            <a href=\"javascript:;\" class=\"dropdown-toggle\"\r" +
    "\n" +
    "                               ng-click=\"app.authSvc.handleAuthClick($event)\"\r" +
    "\n" +
    "                               data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\" aria-expanded=\"false\">\r" +
    "\n" +
    "                                <span class=\"username username-hide-on-mobile vertical-align-middle\"> Acessar com o Google </span>\r" +
    "\n" +
    "                                <div class=\"login-option social-icon-position googleplus-icon\"></div>\r" +
    "\n" +
    "                            </a>\r" +
    "\n" +
    "                        </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <!-- <a class=\"btn btn-social-icon btn-sm btn-google\"\r" +
    "\n" +
    "                            ng-click=\"app.authSvc.handleAuthClick($event)\"\r" +
    "\n" +
    "                            ng-if=\"!app.authSvc.isSignedInGoogle()\"\r" +
    "\n" +
    "                            title=\"Acessar com o Google\">\r" +
    "\n" +
    "                             <i class=\"fa fa-google\"></i>\r" +
    "\n" +
    "                         </a>\r" +
    "\n" +
    "                         <div ng-if=\"app.authSvc.isSignedInGoogle()\">\r" +
    "\n" +
    "                             {{vm.userInformation.name}}\r" +
    "\n" +
    "                             <img class=\"img-circle\" alt=\"User photo\"\r" +
    "\n" +
    "                                  ng-src=\"{{vm.userInformation.urlPhoto}}\">\r" +
    "\n" +
    "                             <button type=\"button\" class=\"btn btn-link btn-social-icon btn-sm\"\r" +
    "\n" +
    "                                     ng-click=\"app.authSvc.handleSignOutClick($event)\"\r" +
    "\n" +
    "                                     title=\"Sair\">\r" +
    "\n" +
    "                                 <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\r" +
    "\n" +
    "                             </button>\r" +
    "\n" +
    "                         </div>-->\r" +
    "\n" +
    "                        <!-- END USER LOGIN DROPDOWN -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <!-- BEGIN QUICK SIDEBAR TOGGLER -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <!-- END QUICK SIDEBAR TOGGLER -->\r" +
    "\n" +
    "                    </ul>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <!-- END TOP NAVIGATION MENU -->\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <!-- END PAGE TOP -->\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <!-- END HEADER INNER -->\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"clearfix\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!-- BEGIN PAGE SPINNER -->\r" +
    "\n" +
    "    <div ng-spinner-bar class=\"page-spinner-bar\" ng-if=\"app.authSvc.isLoading\">\r" +
    "\n" +
    "        <div class=\"bounce1\"></div>\r" +
    "\n" +
    "        <div class=\"bounce2\"></div>\r" +
    "\n" +
    "        <div class=\"bounce3\"></div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!-- END PAGE SPINNER -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"page-container\" ng-if=\"!app.authSvc.isLoading\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"page-sidebar-wrapper\">\r" +
    "\n" +
    "            <!-- BEGIN SIDEBAR -->\r" +
    "\n" +
    "            <!-- DOC: Set data-auto-scroll=\"false\" to disable the sidebar from auto scrolling/focusing -->\r" +
    "\n" +
    "            <!-- DOC: Change data-auto-speed=\"200\" to adjust the sub menu slide up/down speed -->\r" +
    "\n" +
    "            <div class=\"page-sidebar navbar-collapse collapse\">\r" +
    "\n" +
    "                <!-- BEGIN SIDEBAR MENU -->\r" +
    "\n" +
    "                <!-- DOC: Apply \"page-sidebar-menu-light\" class right after \"page-sidebar-menu\" to enable light sidebar menu style(without borders) -->\r" +
    "\n" +
    "                <!-- DOC: Apply \"page-sidebar-menu-hover-submenu\" class right after \"page-sidebar-menu\" to enable hoverable(hover vs accordion) sub menu mode -->\r" +
    "\n" +
    "                <!-- DOC: Apply \"page-sidebar-menu-closed\" class right after \"page-sidebar-menu\" to collapse(\"page-sidebar-closed\" class must be applied to the body element) the sidebar sub menu mode -->\r" +
    "\n" +
    "                <!-- DOC: Set data-auto-scroll=\"false\" to disable the sidebar from auto scrolling/focusing -->\r" +
    "\n" +
    "                <!-- DOC: Set data-keep-expand=\"true\" to keep the submenues expanded -->\r" +
    "\n" +
    "                <!-- DOC: Set data-auto-speed=\"200\" to adjust the sub menu slide up/down speed -->\r" +
    "\n" +
    "                <ul class=\"page-sidebar-menu\" data-keep-expanded=\"false\" data-auto-scroll=\"true\" data-slide-speed=\"200\">\r" +
    "\n" +
    "                    <li class=\"nav-item\" ng-repeat=\"item in app.primaryNavigation | orderBy: 'order'\" ui-sref-active=\"active\">\r" +
    "\n" +
    "                        <a class=\"nav-link nav-toggle\" ui-sref=\"{{item.stateName}}\">\r" +
    "\n" +
    "                            <i class=\"fa\" ng-class=\"item.icon\" aria-hidden=\"true\"></i>\r" +
    "\n" +
    "                            <span class=\"title\">{{item.title}}</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link nav-toggle\" ui-sref=\"game.start\">\r" +
    "\n" +
    "                            <i class=\"fa fa-gamepad\" aria-hidden=\"true\"></i>\r" +
    "\n" +
    "                            <span class=\"title\">Jogo</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "                <!-- END SIDEBAR MENU -->\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <!-- END SIDEBAR -->\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"page-content-wrapper\">\r" +
    "\n" +
    "            <div class=\"page-content\">\r" +
    "\n" +
    "                <div class=\"portlet light bordered\">\r" +
    "\n" +
    "                    <div class=\"portlet-body\">\r" +
    "\n" +
    "                        <div ui-view></div>\r" +
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
    "\r" +
    "\n" +
    "    <div class=\"page-footer\">\r" +
    "\n" +
    "        <div class=\"page-footer-inner\">\r" +
    "\n" +
    "            <p class=\"text-center\">Made by Felipe Corso</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<nav class=\"navbar navbar-default navbar-static-top hidden\">\r" +
    "\n" +
    "    <div class=\"container\">\r" +
    "\n" +
    "        <div class=\"navbar-header\">\r" +
    "\n" +
    "            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\"\r" +
    "\n" +
    "                    aria-expanded=\"false\" aria-controls=\"navbar\">\r" +
    "\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\r" +
    "\n" +
    "                <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "                <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "                <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "            </button>\r" +
    "\n" +
    "            <a class=\"navbar-brand\" ui-sref=\"editor\">EasyEdu</a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div id=\"navbar\" class=\"navbar-collapse collapse\">\r" +
    "\n" +
    "            <ul class=\"nav navbar-nav\" ng-if=\"app.primaryNavigation.length > 0\">\r" +
    "\n" +
    "                <li ng-repeat=\"item in app.primaryNavigation | orderBy: 'order'\" ui-sref-active=\"active\">\r" +
    "\n" +
    "                    <a ui-sref=\"{{item.stateName}}\" ng-bind=\"item.title\"></a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <div>\r" +
    "\n" +
    "                        <a class=\"btn btn-social-icon btn-sm btn-google\"\r" +
    "\n" +
    "                           ng-click=\"app.authSvc.handleAuthClick($event)\"\r" +
    "\n" +
    "                           ng-if=\"!app.authSvc.isSignedInGoogle()\"\r" +
    "\n" +
    "                           title=\"Acessar com o Google\">\r" +
    "\n" +
    "                            <i class=\"fa fa-google\"></i>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                        <div ng-if=\"app.authSvc.isSignedInGoogle()\">\r" +
    "\n" +
    "                            {{vm.userInformation.name}}\r" +
    "\n" +
    "                            <img class=\"img-circle\" alt=\"User photo\"\r" +
    "\n" +
    "                                 ng-src=\"{{vm.userInformation.urlPhoto}}\">\r" +
    "\n" +
    "                            <button type=\"button\" class=\"btn btn-link btn-social-icon btn-sm\"\r" +
    "\n" +
    "                               ng-click=\"app.authSvc.handleSignOutClick($event)\"\r" +
    "\n" +
    "                               title=\"Sair\">\r" +
    "\n" +
    "                                <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\r" +
    "\n" +
    "                            </button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <!--/.nav-collapse -->\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</nav>\r" +
    "\n" +
    "<div class=\"container hidden\">\r" +
    "\n" +
    "    <footer class=\"footer\">\r" +
    "\n" +
    "        <hr/>\r" +
    "\n" +
    "    </footer>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/modules/game/views/category.html',
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
    "                    <h2>Escolha um assunto</h2>\r" +
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
    "                <div class=\"col-sm-4 col-md-3\" style=\"max-height: 235px; height: 235px;\" ng-repeat=\"category in vm.categories\">\r" +
    "\n" +
    "                    <a class=\"text-decoration-none\" ui-sref=\"game.mode({category: category, categoryId: category.id, loaded: true})\">\r" +
    "\n" +
    "                        <div class=\"img-responsive my-gallery-no-img\"\r" +
    "\n" +
    "                             ng-style=\"category.image.id && {'background-image': 'url(https://drive.google.com/uc?export=view&id={{category.image.id}})'}\">\r" +
    "\n" +
    "                            <i class=\"fa fa-picture-o fa-3x\" aria-hidden=\"true\" ng-if=\"!category.image.id\"></i>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <h4 class=\"text-center ellipsis\">{{category.name}}</h4>\r" +
    "\n" +
    "                    </a>\r" +
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
    "                    <h2>Escolha o modo de jogo</h2>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"panel-body\">\r" +
    "\n" +
    "            <div class=\"row text-center\">\r" +
    "\n" +
    "                <div class=\"col-xs-6\" ng-repeat=\"gameMode in vm.gameModes | orderBy:$index\">\r" +
    "\n" +
    "                    <button class=\"btn btn-default btn-circle btn-lg btn-game-mode\" type=\"button\"\r" +
    "\n" +
    "                            ng-click=\"vm.goToPlay(gameMode.type)\">\r" +
    "\n" +
    "                        <i class=\"fa \" ng-class=\"gameMode.icon\"></i>\r" +
    "\n" +
    "                        {{gameMode.label}}\r" +
    "\n" +
    "                    </button>\r" +
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
    "<div class=\"row\" ng-if=\"vm.gameMode !== 'MULTIPLAYER'\">\r" +
    "\n" +
    "    <div class=\"col-md-12 text-center\">\r" +
    "\n" +
    "        <game-letters-layout\r" +
    "\n" +
    "                action-next-phase=\"vm.actionNextPhase()\"\r" +
    "\n" +
    "                activity=\"vm.selectedActivity\"\r" +
    "\n" +
    "                category=\"vm.category\"\r" +
    "\n" +
    "                game-mode=\"vm.gameMode\"\r" +
    "\n" +
    "                are-there-more-phases=\"vm.areThereMorePhases()\"\r" +
    "\n" +
    "                ng-if=\"vm.selectedActivity.type === 'LETTERS'\"></game-letters-layout>\r" +
    "\n" +
    "        <game-pictures-layout\r" +
    "\n" +
    "                action-next-phase=\"vm.actionNextPhase()\"\r" +
    "\n" +
    "                activity=\"vm.selectedActivity\"\r" +
    "\n" +
    "                category=\"vm.category\"\r" +
    "\n" +
    "                game-mode=\"vm.gameMode\"\r" +
    "\n" +
    "                are-there-more-phases=\"vm.areThereMorePhases()\"\r" +
    "\n" +
    "                play=\"vm.play()\"\r" +
    "\n" +
    "                ng-if=\"vm.selectedActivity.type === 'PICTURES'\"></game-pictures-layout>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"row\" ng-if=\"vm.gameMode === 'MULTIPLAYER'\">\r" +
    "\n" +
    "    <div class=\"col-md-6 rotate-left\">\r" +
    "\n" +
    "        <game-letters-layout\r" +
    "\n" +
    "                action-next-phase=\"vm.actionNextPhase()\"\r" +
    "\n" +
    "                activity=\"vm.selectedActivity\"\r" +
    "\n" +
    "                category=\"vm.category\"\r" +
    "\n" +
    "                game-mode=\"vm.gameMode\"\r" +
    "\n" +
    "                are-there-more-phases=\"vm.areThereMorePhases()\"\r" +
    "\n" +
    "                ng-if=\"vm.selectedActivity.type === 'LETTERS'\"></game-letters-layout>\r" +
    "\n" +
    "        <game-pictures-layout\r" +
    "\n" +
    "                action-next-phase=\"vm.actionNextPhase()\"\r" +
    "\n" +
    "                activity=\"vm.selectedActivity\"\r" +
    "\n" +
    "                category=\"vm.category\"\r" +
    "\n" +
    "                game-mode=\"vm.gameMode\"\r" +
    "\n" +
    "                are-there-more-phases=\"vm.areThereMorePhases()\"\r" +
    "\n" +
    "                play=\"vm.play()\"\r" +
    "\n" +
    "                ng-if=\"vm.selectedActivity.type === 'PICTURES'\"></game-pictures-layout>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-md-6 rotate-right\">\r" +
    "\n" +
    "        <game-letters-layout\r" +
    "\n" +
    "                action-next-phase=\"vm.actionNextPhase()\"\r" +
    "\n" +
    "                activity=\"vm.selectedActivity\"\r" +
    "\n" +
    "                category=\"vm.category\"\r" +
    "\n" +
    "                game-mode=\"vm.gameMode\"\r" +
    "\n" +
    "                are-there-more-phases=\"vm.areThereMorePhases()\"\r" +
    "\n" +
    "                ng-if=\"vm.selectedActivity.type === 'LETTERS'\"></game-letters-layout>\r" +
    "\n" +
    "        <game-pictures-layout\r" +
    "\n" +
    "                action-next-phase=\"vm.actionNextPhase()\"\r" +
    "\n" +
    "                activity=\"vm.selectedActivity\"\r" +
    "\n" +
    "                category=\"vm.category\"\r" +
    "\n" +
    "                game-mode=\"vm.gameMode\"\r" +
    "\n" +
    "                are-there-more-phases=\"vm.areThereMorePhases()\"\r" +
    "\n" +
    "                play=\"vm.play()\"\r" +
    "\n" +
    "                ng-if=\"vm.selectedActivity.type === 'PICTURES'\"></game-pictures-layout>\r" +
    "\n" +
    "    </div>\r" +
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
