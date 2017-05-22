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
    "    <label for=\"category.name\" class=\"control-label\">Nome da categoria</label>\r" +
    "\n" +
    "    <input class=\"form-control\" type=\"text\"\r" +
    "\n" +
    "           id=\"category.name\"\r" +
    "\n" +
    "           ng-model=\"vm.category.name\"\r" +
    "\n" +
    "           placeholder=\"Dê um nome para a categoria\">\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.saveCategory()\">\r" +
    "\n" +
    "    <i class=\"fa fa-save\" aria-label=\"true\"></i>\r" +
    "\n" +
    "    Salvar\r" +
    "\n" +
    "</button>"
  );


  $templateCache.put('src/components/editor/category/list-activities/view/_list-activities.html',
    "<div class=\"row\" data-ng-repeat=\"activity in vm.activities | orderBy:$index:true\">\r" +
    "\n" +
    "    <div class=\"col-sm-6\">\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <label class=\"control-label\" for=\"activity.answer\">Resposta</label>\r" +
    "\n" +
    "            <span class=\"display-block\" id=\"activity.answer\">{{activity.answer}}</span>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-sm-4\">\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <label class=\"control-label\" for=\"activity.type\">Tipo</label>\r" +
    "\n" +
    "            <span class=\"display-block\" id=\"activity.type\">{{activity.type}}</span>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-sm-2\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <a title=\"Clique para editar\" ng-click=\"vm.selectActivity(activity)\">\r" +
    "\n" +
    "                    <i class=\"fa fa-pencil\"></i>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <input type=\"checkbox\" bn-uniform ng-model=\"activity.export\" ng-change=\"vm.optionToggled()\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/components/editor/insert-image/view/_insert-image.html',
    "<div class=\"row\" ng-if=\"vm.multipleSelect\">\r" +
    "\n" +
    "    <div class=\"col-xs-6 col-sm-4\" ng-repeat=\"answerOption in vm.model.answerOptions | filter:{type:vm.answerType}:true\">\r" +
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
    "            <img class=\"img-thumbnail\"\r" +
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
    "    <div class=\"col-xs-6 col-sm-4\">\r" +
    "\n" +
    "        <div class=\"img-responsive my-gallery-no-img pointer\"\r" +
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
    "    <div class=\"col-md-8\">\r" +
    "\n" +
    "        <div class=\"form-group\" ng-if=\"vm.selectedActivity.type === 'LETTERS'\">\r" +
    "\n" +
    "            <label>Adicione uma imagem para a atividade</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <editor-insert-image model=\"vm.selectedActivity\" alt-image=\"Imagem da atividade\"></editor-insert-image>\r" +
    "\n" +
    "            <hr>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <label>Adicionar um áudio para a atividade</label>\r" +
    "\n" +
    "            <i>Permitir adicionar áudio</i>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div ng-if=\"vm.selectedActivity.type === 'PICTURES'\">\r" +
    "\n" +
    "            <hr>\r" +
    "\n" +
    "            <div class=\"form-group\"\r" +
    "\n" +
    "                 ng-required=\"vm.selectedActivity.type === 'PICTURES'\">\r" +
    "\n" +
    "                <label>Adicionar as respostas corretas</label>\r" +
    "\n" +
    "                <editor-insert-image model=\"vm.selectedActivity\"\r" +
    "\n" +
    "                                     answer-type=\"CORRECT\"\r" +
    "\n" +
    "                                     alt-image=\"Opção de resposta correta\"\r" +
    "\n" +
    "                                     multiple-select=\"true\"></editor-insert-image>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <hr>\r" +
    "\n" +
    "            <div class=\"form-group\"\r" +
    "\n" +
    "                 ng-required=\"vm.selectedActivity.type === 'PICTURES'\">\r" +
    "\n" +
    "                <label>Adicionar as respostas incorretas</label>\r" +
    "\n" +
    "                <editor-insert-image model=\"vm.selectedActivity\"\r" +
    "\n" +
    "                                     answer-type=\"INCORRECT\"\r" +
    "\n" +
    "                                     alt-image=\"Opção de resposta incorreta\"\r" +
    "\n" +
    "                                     multiple-select=\"true\"></editor-insert-image>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-md-4\">\r" +
    "\n" +
    "        <div class=\"form-group required\">\r" +
    "\n" +
    "            <label class=\"control-label\" for=\"activity.answer\">Resposta</label>\r" +
    "\n" +
    "            <input class=\"form-control\"\r" +
    "\n" +
    "                   type=\"text\"\r" +
    "\n" +
    "                   id=\"activity.answer\"\r" +
    "\n" +
    "                   placeholder=\"Informe a resposta da atividade\"\r" +
    "\n" +
    "                   required\r" +
    "\n" +
    "                   ng-model=\"vm.selectedActivity.answer\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <label for=\"activity.level\">Nível de dificuldade</label>\r" +
    "\n" +
    "            <select class=\"form-control\"\r" +
    "\n" +
    "                    required\r" +
    "\n" +
    "                    id=\"activity.level\"\r" +
    "\n" +
    "                    placeholder=\"Informe um nível de dificuldade\"\r" +
    "\n" +
    "                    ng-model=\"vm.selectedActivity.level\"\r" +
    "\n" +
    "                    ng-options=\"option.value as option.label for option in vm.difficultyLevels\">\r" +
    "\n" +
    "            </select>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <label for=\"activity.tip\">Dica</label>\r" +
    "\n" +
    "            <input class=\"form-control\"\r" +
    "\n" +
    "                   type=\"text\"\r" +
    "\n" +
    "                   id=\"activity.tip\"\r" +
    "\n" +
    "                   placeholder=\"Informe uma dica para a atividade\"\r" +
    "\n" +
    "                   ng-model=\"vm.selectedActivity.tip\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <label for=\"activity.time\">Tempo para resolução (mm:ss)</label>\r" +
    "\n" +
    "            <input class=\"form-control\"\r" +
    "\n" +
    "                   type=\"datetime\"\r" +
    "\n" +
    "                   id=\"activity.time\"\r" +
    "\n" +
    "                   placeholder=\"59:59\"\r" +
    "\n" +
    "                   ng-model=\"vm.selectedActivity.time\">\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<hr>\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "        <button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.saveAction()\">Salvar</button>\r" +
    "\n" +
    "        <button type=\"button\" class=\"btn btn-danger\" ng-click=\"vm.cancelAction()\">Cancelar</button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
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


  $templateCache.put('src/components/game/pictures-layout/view/_pictures_layout.html',
    "<div class=\"panel-group\">\n" +
    "    <div class=\"panel panel-default\">\n" +
    "        <div class=\"panel-heading text-center\">\n" +
    "            <div ng-if=\"vm.isWinMatch || vm.isWinGame || vm.isGameOver\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-12 game-result-text\">\n" +
    "                        <div ng-if=\"vm.isWinMatch || vm.isWinGame\">\n" +
    "                            <h1>Parabéns!</h1>\n" +
    "                            <h3>Você ganhou {{vm.isWinMatch ? \"a partida\" : \"o jogo\"}}</h3>\n" +
    "                            <h4>O seu tempo foi de {{vm.getTimeResult()}}</h4>\n" +
    "                        </div>\n" +
    "                        <div ng-if=\"vm.isGameOver\">\n" +
    "                            <h1>Que pena!</h1>\n" +
    "                            <h3>Você perdeu o jogo</h3>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <button class=\"btn btn-warning\"\n" +
    "                                type=\"button\"\n" +
    "                                ng-click=\"vm.actionPlayAgain()\">{{vm.isGameOver ? \"Tentar novamente\" : \"Jogar novamente\"}}</button>\n" +
    "                        <button class=\"btn btn-success\"\n" +
    "                                type=\"button\"\n" +
    "                                ng-click=\"vm.actionNextPhase()\"\n" +
    "                                ng-if=\"!vm.isWinGame && !vm.isGameOver\">Próxima fase</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <hr>\n" +
    "            </div>\n" +
    "            {{vm.timer | amDateFormat:\"mm:ss\"}}\n" +
    "        </div>\n" +
    "        <div class=\"panel-body\">\n" +
    "            <div class=\"row\">\n" +
    "                <!-- The dnd-list directive allows to drop elements into it.\n" +
    "                 The dropped data will be added to the referenced list -->\n" +
    "                <div class=\"pictures-layout-answer-painel text-center\"\n" +
    "                     dnd-list=\"vm.activity.answers\"\n" +
    "                     dnd-horizontal-list=\"true\"\n" +
    "                     dnd-allowed-types=\"['correct']\"\n" +
    "                     dnd-disable-if=\"vm.isWinMatch || vm.isWinGame || vm.isGameOver\">\n" +
    "                    <!-- The dnd-draggable directive makes an element draggable and will\n" +
    "                         transfer the object that was assigned to it. If an element was\n" +
    "                         dragged away, you have to remove it from the original list\n" +
    "                         yourself using the dnd-moved attribute -->\n" +
    "                    <div ng-repeat=\"item in vm.activity.answers\"\n" +
    "                         class=\"col-xs-4 col-sm-2\"\n" +
    "                         dnd-draggable=\"item\"\n" +
    "                         dnd-type=\"item.type\"\n" +
    "                         dnd-moved=\"vm.activity.answers.splice($index, 1)\"\n" +
    "                         dnd-effect-allowed=\"move\">\n" +
    "                        <img class=\"img-thumbnail\" ng-src=\"https://drive.google.com/uc?export=view&id={{item.image.id}}\" alt=\"{{item.image.name}}\">\n" +
    "                    </div>\n" +
    "                    <h3 ng-if=\"vm.activity.answers && !vm.activity.answers.length\">{{vm.activity.tip}}</h3>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"panel-footer\">\n" +
    "            <div class=\"row\">\n" +
    "                <!-- The dnd-list directive allows to drop elements into it.\n" +
    "                 The dropped data will be added to the referenced list -->\n" +
    "                <div dnd-list=\"vm.activity.answerOptions\"\n" +
    "                     dnd-horizontal-list=\"true\"\n" +
    "                     dnd-disable-if=\"vm.isWinMatch || vm.isWinGame || vm.isGameOver\">\n" +
    "                    <!-- The dnd-draggable directive makes an element draggable and will\n" +
    "                         transfer the object that was assigned to it. If an element was\n" +
    "                         dragged away, you have to remove it from the original list\n" +
    "                         yourself using the dnd-moved attribute -->\n" +
    "                    <div ng-repeat=\"item in vm.activity.answerOptions\"\n" +
    "                         class=\"col-xs-4 col-sm-2\"\n" +
    "                         dnd-draggable=\"item\"\n" +
    "                         dnd-type=\"item.type\"\n" +
    "                         dnd-moved=\"vm.activity.answerOptions.splice($index, 1)\"\n" +
    "                         dnd-effect-allowed=\"move\"\n" +
    "                         dnd-selected=\"models.selected = item\"\n" +
    "                         dnd-dragend=\"vm.logEvent('Drag operation ended. Drop effect: ' + dropEffect); vm.dndDragEnd();\">\n" +
    "                        <img class=\"img-thumbnail\" ng-src=\"https://drive.google.com/uc?export=view&id={{item.image.id}}\" alt=\"{{item.image.name}}\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"typesDemo row hidden\">\n" +
    "    <div ng-repeat=\"list in vm.lists\" class=\"col-md-4\">\n" +
    "        <div class=\"panel panel-info\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "                <h3 class=\"panel-title ng-binding\">List of {{list.label}} (max. {{list.max}})</h3>\n" +
    "            </div>\n" +
    "            <div class=\"panel-body\">\n" +
    "                <ul dnd-list=\"list.people\"\n" +
    "                    dnd-horizontal-list=\"true\"\n" +
    "                    dnd-allowed-types=\"list.allowedTypes\"\n" +
    "                    dnd-disable-if=\"list.people.length >= list.max\">\n" +
    "\n" +
    "                    <li ng-repeat=\"person in list.people\"\n" +
    "                        dnd-draggable=\"person\"\n" +
    "                        dnd-type=\"person.type\"\n" +
    "                        dnd-disable-if=\"person.type == 'unknown'\"\n" +
    "                        dnd-moved=\"list.people.splice($index, 1)\"\n" +
    "                        class=\"background-{{person.type}}\"\n" +
    "                    >\n" +
    "                        <dnd-nodrag>\n" +
    "                            <div dnd-handle class=\"handle\">:::</div>\n" +
    "                            <div class=\"name\">\n" +
    "                                <input type=\"text\" ng-model=\"person.name\"\n" +
    "                                       class=\"background-{{person.type}} form-control input-sm\">\n" +
    "                            </div>\n" +
    "                        </dnd-nodrag>\n" +
    "                    </li>\n" +
    "\n" +
    "                    <li class=\"dndPlaceholder\">\n" +
    "                        Drop any <strong>{{list.allowedTypes.join(' or ')}}</strong> here\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"typesDemo row hidden\">\n" +
    "    <div ng-repeat=\"list in vm.lists\" class=\"col-md-4\">\n" +
    "        <div class=\"panel panel-info\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "                <h3 class=\"panel-title ng-binding\">List of {{list.label}} (max. {{list.max}})</h3>\n" +
    "            </div>\n" +
    "            <div class=\"panel-body\">\n" +
    "                <ul dnd-list=\"list.people\"\n" +
    "                    dnd-horizontal-list=\"true\"\n" +
    "                    dnd-allowed-types=\"list.allowedTypes\"\n" +
    "                    dnd-disable-if=\"list.people.length >= list.max\">\n" +
    "\n" +
    "                    <li ng-repeat=\"person in list.people\"\n" +
    "                        dnd-draggable=\"person\"\n" +
    "                        dnd-type=\"person.type\"\n" +
    "                        dnd-disable-if=\"person.type == 'unknown'\"\n" +
    "                        dnd-moved=\"list.people.splice($index, 1)\"\n" +
    "                        class=\"background-{{person.type}}\"\n" +
    "                    >\n" +
    "                        <dnd-nodrag>\n" +
    "                            <div dnd-handle class=\"handle\">:::</div>\n" +
    "                            <div class=\"name\">\n" +
    "                                <input type=\"text\" ng-model=\"person.name\"\n" +
    "                                       class=\"background-{{person.type}} form-control input-sm\">\n" +
    "                            </div>\n" +
    "                        </dnd-nodrag>\n" +
    "                    </li>\n" +
    "\n" +
    "                    <li class=\"dndPlaceholder\">\n" +
    "                        Drop any <strong>{{list.allowedTypes.join(' or ')}}</strong> here\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"advancedDemo row hidden\">\n" +
    "    <div ng-repeat=\"containers in vm.containers\" class=\"col-md-6\">\n" +
    "        <div class=\"dropzone box box-yellow\">\n" +
    "            <h3>Dropzone {{$index + 1}}</h3>\n" +
    "            <ul dnd-list=\"containers\"\n" +
    "                dnd-allowed-types=\"['container']\"\n" +
    "                dnd-external-sources=\"true\"\n" +
    "                dnd-dragover=\"vm.dragoverCallback(index, external, type, callback)\"\n" +
    "                dnd-drop=\"vm.dropCallback(index, item, external, type)\">\n" +
    "                <li ng-repeat=\"container in containers\"\n" +
    "                    dnd-draggable=\"container\"\n" +
    "                    dnd-type=\"'container'\"\n" +
    "                    dnd-effect-allowed=\"copyMove\"\n" +
    "                    dnd-moved=\"containers.splice($index, 1)\"\n" +
    "                    dnd-callback=\"container.items.length\">\n" +
    "                    <div class=\"container-element box box-blue\">\n" +
    "                        <h3>Container (effects allowed: {{container.effectAllowed}})</h3>\n" +
    "                        <ul dnd-list=\"container.items\"\n" +
    "                            dnd-allowed-types=\"['item']\"\n" +
    "                            dnd-horizontal-list=\"true\"\n" +
    "                            dnd-external-sources=\"true\"\n" +
    "                            dnd-effect-allowed=\"{{container.effectAllowed}}\"\n" +
    "                            dnd-dragover=\"vm.dragoverCallback(index, external, type)\"\n" +
    "                            dnd-drop=\"vm.dropCallback(index, item, external, type)\"\n" +
    "                            dnd-inserted=\"vm.logListEvent('inserted at', index, external, type)\"\n" +
    "                            class=\"itemlist\">\n" +
    "                            <li ng-repeat=\"item in container.items\"\n" +
    "                                dnd-draggable=\"item\"\n" +
    "                                dnd-type=\"'item'\"\n" +
    "                                dnd-effect-allowed=\"{{item.effectAllowed}}\"\n" +
    "                                dnd-dragstart=\"vm.logEvent('Started to drag an item')\"\n" +
    "                                dnd-moved=\"container.items.splice($index, 1)\"\n" +
    "                                dnd-dragend=\"vm.logEvent('Drag operation ended. Drop effect: ' + dropEffect)\">\n" +
    "                                {{item.label}}\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                        <div class=\"clearfix\"></div>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
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
    "    <div class=\"col-sm-3\">\r" +
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
    "    <div class=\"col-sm-3\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <!--<editor-multiple-uploads done-callback=\"vm.doneFile(file, activity)\" on-remove-item=\"vm.removeFile(file, activity)\" options=\"{queueLimit: 1}\"></editor-multiple-uploads>-->\r" +
    "\n" +
    "        <label for=\"category.name\" class=\"control-label\">Nome da categoria</label>\r" +
    "\n" +
    "        <span class=\"display-block\" id=\"category.name\">{{vm.category.name}}</span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <hr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <editor-insert-image model=\"vm.category\" alt-image=\"Imagem da categoria\"></editor-insert-image>\r" +
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
    "                    <button class=\"btn btn-primary btn-sm\"\r" +
    "\n" +
    "                            type=\"button\"\r" +
    "\n" +
    "                            ng-disabled=\"!vm.category.activities.length || !vm.isEnabledBtnExport()\"\r" +
    "\n" +
    "                            ng-click=\"vm.exportJSON()\">\r" +
    "\n" +
    "                        JSON\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                    <button class=\"btn btn-primary btn-sm\"\r" +
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
    "                    <button class=\"btn btn-primary btn-sm\"\r" +
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
    "                    <a id=\"downloadAnchorElem\" style=\"display:none\"></a>\r" +
    "\n" +
    "                    <!--<qrcode data=\"string\"></qrcode>-->\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <hr>\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-sm-6\">\r" +
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
    "                    </a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-sm-6 pull-right\" ng-if=\"vm.category.activities.length\">\r" +
    "\n" +
    "                    <label>\r" +
    "\n" +
    "                        Marcar todas\r" +
    "\n" +
    "                        <input type=\"checkbox\" ng-model=\"vm.isAllSelected\" ng-click=\"vm.toggleAll()\" bn-uniform\r" +
    "\n" +
    "                               ng-model=\"activity.export\">\r" +
    "\n" +
    "                    </label>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <editor-category-list-activities\r" +
    "\n" +
    "                    activities=\"vm.category.activities\"\r" +
    "\n" +
    "                    selected-activity=\"vm.selectedActivity\"\r" +
    "\n" +
    "                    option-toggled=\"vm.optionToggled()\">\r" +
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
    "                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.saveCategory()\">Salvar</button>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-sm-9\">\r" +
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
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-12\">\r" +
    "\n" +
    "                    <button class=\"btn btn-success\" type=\"button\"\r" +
    "\n" +
    "                            ng-click=\"vm.copySelectedActivity()\"\r" +
    "\n" +
    "                            title=\"Clique para testar a atividade\">Testar atividade</button>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <game-letters-layout\r" +
    "\n" +
    "                    activity=\"vm.selectedActivity\"\r" +
    "\n" +
    "                    ng-if=\"vm.selectedActivity.type === 'LETTERS'\"></game-letters-layout>\r" +
    "\n" +
    "            <game-pictures-layout\r" +
    "\n" +
    "                    activity=\"vm.selectedActivityCopy\"\r" +
    "\n" +
    "                    play=\"vm.copySelectedActivity()\"\r" +
    "\n" +
    "                    ng-if=\"vm.selectedActivity.type === 'PICTURES' && vm.selectedActivityCopy\"></game-pictures-layout>\r" +
    "\n" +
    "            <editor-letters-layout\r" +
    "\n" +
    "                    ng-if=\"vm.selectedActivity.type === 'LETTERS'\"\r" +
    "\n" +
    "                    activity=\"vm.selectedActivity\"\r" +
    "\n" +
    "                    alphabet=\"vm.category.alphabet\"></editor-letters-layout>\r" +
    "\n" +
    "            <hr>\r" +
    "\n" +
    "            <editor-answer-options\r" +
    "\n" +
    "                    selected-activity=\"vm.selectedActivity\"\r" +
    "\n" +
    "                    on-save-action=\"vm.saveActivity()\"></editor-answer-options>\r" +
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
    "        <a class=\"btn btn-success btn-lg\" ui-sref=\"editor.category.add\">\r" +
    "\n" +
    "            <i class=\"fa fa-plus fa-3x\"></i>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <h3>Exemplo de álbum 1</h3>\r" +
    "\n" +
    "        <h3>Exemplo de álbum 2</h3>\r" +
    "\n" +
    "        <h3>Exemplo de álbum 3</h3>\r" +
    "\n" +
    "        <h3>Exemplo de álbum 4</h3>\r" +
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
    "            <button class=\"btn btn-link\" type=\"button\" ui-sref=\"editor.category.edit({id: category.id})\">\r" +
    "\n" +
    "                <img class=\"img-responsive center-block\" ng-src=\"{{category.image.link}}\" alt=\"Imagem da categoria\" ng-if=\"category.image.link\">\r" +
    "\n" +
    "                <div class=\"img-responsive my-gallery-no-img\" ng-if=\"!category.image.link\">\r" +
    "\n" +
    "                    <i class=\"fa fa-picture-o fa-3x\" aria-hidden=\"true\"></i>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <h4 class=\"text-center\">{{category.name}}</h4>\r" +
    "\n" +
    "            </button>\r" +
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
    "            <div class=\"alert alert-info\">Você não possui categorias em sua galeria. :(</div>\r" +
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
    "        <div class=\"alert alert-warning\">Para consultar a sua galeria é necessário estar conectado com o Google.</div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/modules/editor/views/index.html',
    "<nav class=\"navbar navbar-default navbar-static-top\">\r" +
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
    "                        <a class=\"btn btn-default btn-social-icon btn-sm\"\r" +
    "\n" +
    "                           ng-click=\"app.authSvc.handleSignOutClick($event)\"\r" +
    "\n" +
    "                           ng-if=\"app.authSvc.isSignedInGoogle()\"\r" +
    "\n" +
    "                           title=\"Sair\">\r" +
    "\n" +
    "                            <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\r" +
    "\n" +
    "                        </a>\r" +
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
    "<div class=\"container\">\r" +
    "\n" +
    "    <div ui-view></div>\r" +
    "\n" +
    "    <footer class=\"footer\">\r" +
    "\n" +
    "        <hr/>\r" +
    "\n" +
    "        <p class=\"text-center\">Made by Felipe Corso</p>\r" +
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
    "                    <h2>Escolha uma categoria</h2>\r" +
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
    "                <div class=\"col-xs-6 col-sm-4 col-md-2\" style=\"max-height: 235px; height: 235px;\" ng-repeat=\"category in vm.getCategories()\">\r" +
    "\n" +
    "                    <a class=\"text-decoration-none\" ng-click=\"vm.setCategory(category)\" ui-sref=\"game.mode({category: category})\">\r" +
    "\n" +
    "                        <div class=\"thumbnail\">\r" +
    "\n" +
    "                            <img class=\"img-thumbnail\" ng-src=\"{{category.image.link}}\" ng-if=\"category.image.link\" alt=\"Imagem da categoria\">\r" +
    "\n" +
    "                            <span>{{category.name}}</span>\r" +
    "\n" +
    "                            <!--<a class=\"btn\" ui-sref=\"game.game-mode\">Português</a><a class=\"btn\" ui-sref=\"game.game-mode\">Matemática</a><a class=\"btn\" ui-sref=\"game.game-mode\">Inglês</a>-->\r" +
    "\n" +
    "                        </div>\r" +
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
    "                <div class=\"col-xs-6\">\r" +
    "\n" +
    "                    <button class=\"btn btn-default btn-game-mode\" type=\"button\"\r" +
    "\n" +
    "                            ui-sref=\"game.play({category: vm.category, gameMode: 'SINGLE_PLAYER'})\">\r" +
    "\n" +
    "                        <i class=\"fa fa-user fa-5x\"></i>\r" +
    "\n" +
    "                        Single player\r" +
    "\n" +
    "                    </button>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-xs-6\">\r" +
    "\n" +
    "                    <button class=\"btn btn-default btn-game-mode\" type=\"button\"\r" +
    "\n" +
    "                            ui-sref=\"game.play({category: vm.category, gameMode: 'MULTIPLAYER'})\">\r" +
    "\n" +
    "                        <i class=\"fa fa-users fa-5x\"></i>\r" +
    "\n" +
    "                        Multiplayer\r" +
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
    "                has-more-phases=\"vm.hasMorePhases()\"\r" +
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
    "                has-more-phases=\"vm.hasMorePhases()\"\r" +
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
    "                has-more-phases=\"vm.hasMorePhases()\"\r" +
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
    "                has-more-phases=\"vm.hasMorePhases()\"\r" +
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
    "                has-more-phases=\"vm.hasMorePhases()\"\r" +
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
    "                has-more-phases=\"vm.hasMorePhases()\"\r" +
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
    "                    <a class=\"btn btn-success btn-lg\" ui-sref=\"game.category\">Iniciar</a>\r" +
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
    "                    <!--<button class=\"btn btn-link pull-right\" type=\"button\">Importar atividade</button>-->\r" +
    "\n" +
    "                    <a class=\"pull-right\" href=\"#\">Importar atividade</a>\r" +
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
