angular.module('resources.views', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/components/editor/category/activity-type/view/_activity-type.html',
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "        <h1>Escolha uma das opções de layout disponíveis</h1>\n" +
    "    </div>\n" +
    "</div><div class=\"row\">\n" +
    "    <div class=\"col-sm-3 text-center\">\n" +
    "        <button class=\"btn btn-link\" type=\"button\" ng-click=\"vm.setType('LETTERS')\">\n" +
    "            <img class=\"img-responsive center-block\" ng-src=\"assets/img/bubbleLetters.png\" alt=\"Imagem layout letras\">\n" +
    "            <h4 class=\"text-center\">Letras</h4>\n" +
    "        </button>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-3 text-center\">\n" +
    "        <button class=\"btn btn-link\" type=\"button\" ng-click=\"vm.setType('PICTURES')\">\n" +
    "            <img class=\"img-responsive center-block\" ng-src=\"assets/img/pictures.png\" alt=\"Imagem layout imagens\">\n" +
    "            <h4 class=\"text-center\">Imagens</h4>\n" +
    "        </button>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-3 text-center\">\n" +
    "        <button class=\"btn btn-link\" type=\"button\" ng-click=\"vm.setType('PUZZLE')\" disabled>\n" +
    "            <img class=\"img-responsive center-block\" ng-src=\"assets/img/puzzle.png\" alt=\"Imagem layout quebra-cabeça\">\n" +
    "            <h4 class=\"text-center\">Quebra-cabeça</h4>\n" +
    "        </button>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-3 text-center\">\n" +
    "        <button class=\"btn btn-link\" type=\"button\" ng-click=\"vm.setType('MEMORY')\" disabled>\n" +
    "            <img class=\"img-responsive center-block\" ng-src=\"assets/img/memoryGame.png\" alt=\"Imagem layout memória\">\n" +
    "            <h4 class=\"text-center\">Memória</h4>\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('src/components/editor/category/create-category/view/_create-category.html',
    "<div class=\"form-group\">\n" +
    "    <label for=\"category.name\" class=\"control-label\">Assunto</label>\n" +
    "    <input class=\"form-control input-circle\" type=\"text\"\n" +
    "           id=\"category.name\"\n" +
    "           ng-model=\"vm.category.name\"\n" +
    "           placeholder=\"Informe uma breve descrição para o assunto\">\n" +
    "</div>\n" +
    "\n" +
    "<button type=\"button\" class=\"btn btn-circle btn-primary\" ng-click=\"vm.saveCategory()\">\n" +
    "    <i class=\"fa fa-save\" aria-label=\"true\"></i>\n" +
    "    Salvar\n" +
    "</button>"
  );


  $templateCache.put('src/components/editor/category/list-activities/view/_list-activities.html',
    "<table class=\"table table-striped\">\n" +
    "    <thead>\n" +
    "    <tr>\n" +
    "        <th><input type=\"checkbox\" ng-model=\"vm.isAllSelected\" ng-click=\"vm.toggleAll()\" bn-uniform></th>\n" +
    "        <th>Nome</th>\n" +
    "        <th>Tipo</th>\n" +
    "        <th></th>\n" +
    "    </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "        <tr ng-repeat=\"activity in vm.activities | orderBy:$index:true\">\n" +
    "            <td><input type=\"checkbox\" bn-uniform ng-model=\"activity.export\" ng-change=\"vm.optionToggled()\"></td>\n" +
    "            <td>{{activity.name}}</td>\n" +
    "            <td>{{vm.getType(activity.type)}}</td>\n" +
    "            <td>\n" +
    "                <div class=\"pull-right\">\n" +
    "                    <button type=\"button\" class=\"btn-link\" title=\"Clique para editar\" ng-click=\"vm.selectActivity(activity)\">\n" +
    "                        <i class=\"fa fa-pencil\"></i>\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </tbody>\n" +
    "</table>"
  );


  $templateCache.put('src/components/editor/insert-image/view/_insert-image.html',
    "<div class=\"row\" ng-if=\"vm.multipleSelect\">\n" +
    "    <div class=\"col-xs-6 col-sm-4\" ng-repeat=\"answerOption in vm.model.answerOptions | filter:{type:vm.answerType}:true\">\n" +
    "        <div class=\"pull-right\">\n" +
    "            <i class=\"fa fa-times\" aria-hidden=\"true\"\n" +
    "               title=\"Clique para remover a imagem\"\n" +
    "               ng-click=\"vm.removeImage(answerOption)\"></i>\n" +
    "        </div>\n" +
    "        <a href=\"https://drive.google.com/uc?export=view&id={{answerOption.image.id}}\" target=\"_blank\">\n" +
    "            <img class=\"img-thumbnail\"\n" +
    "                 ng-src=\"https://drive.google.com/uc?export=view&id={{answerOption.image.id}}\"\n" +
    "                 alt=\"{{vm.altImage}}\"\n" +
    "                 title=\"Clique para abrir a imagem em tamanho real.\" />\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-6 col-sm-4\">\n" +
    "        <div class=\"img-responsive my-gallery-no-img pointer\"\n" +
    "             title=\"Clique para adicionar uma imagem\"\n" +
    "             ng-click=\"vm.authSvc.createPicker(vm.model.parent, vm.imageSelected, vm.multipleSelect)\">\n" +
    "            <i class=\"fa fa-picture-o fa-3x\" aria-hidden=\"true\"></i>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\" ng-if=\"!vm.multipleSelect\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "        <div ng-if=\"vm.hasImage()\">\n" +
    "            <div class=\"pull-right\">\n" +
    "                <i class=\"fa fa-times\" aria-hidden=\"true\"\n" +
    "                   title=\"Clique para remover a imagem\"\n" +
    "                   ng-click=\"vm.imageRemoved()\"></i>\n" +
    "            </div>\n" +
    "            <a href=\"https://drive.google.com/uc?export=view&id={{vm.model.image.id}}\" target=\"_blank\">\n" +
    "                <img class=\"img-thumbnail\"\n" +
    "                     ng-src=\"https://drive.google.com/uc?export=view&id={{vm.model.image.id}}\"\n" +
    "                     alt=\"{{vm.altImage}}\"\n" +
    "                     title=\"Clique para abrir a imagem em tamanho real.\" />\n" +
    "            </a>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"img-responsive my-gallery-no-img pointer\"\n" +
    "             title=\"Clique para adicionar uma imagem\"\n" +
    "             ng-if=\"!vm.hasImage()\"\n" +
    "             ng-click=\"vm.authSvc.createPicker(vm.model.parent, vm.imageSelected, vm.multipleSelect)\">\n" +
    "            <i class=\"fa fa-picture-o fa-3x\" aria-hidden=\"true\"></i>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('src/components/editor/layouts/answer-options/view/_answer-options.html',
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "        <button type=\"button\" class=\"btn btn-circle btn-success\" ng-click=\"vm.testSelectedActivity()\"\n" +
    "                title=\"Clique para testar a atividade\">Testar atividade</button>\n" +
    "        <button type=\"button\" class=\"btn btn-circle btn-primary\" ng-click=\"vm.answerOptionsForm.$valid && vm.saveAction()\"\n" +
    "                ng-disabled=\"vm.answerOptionsForm.$invalid\">Salvar</button>\n" +
    "        <button type=\"button\" class=\"btn btn-circle btn-danger\" ng-click=\"vm.deleteAction()\" ng-if=\"vm.selectedActivity.id\">Excluir</button>\n" +
    "        <button type=\"button\" class=\"btn btn-link pull-right\" ng-click=\"vm.cancelAction()\">Cancelar</button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<hr>\n" +
    "\n" +
    "<form name=\"vm.answerOptionsForm\" novalidate angular-validator>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-8\">\n" +
    "            <div class=\"form-group\" ng-if=\"['LETTERS', 'PUZZLE'].indexOf(vm.selectedActivity.type) !== -1\">\n" +
    "                <label>Adicione uma imagem para a atividade</label>\n" +
    "\n" +
    "                <editor-insert-image model=\"vm.selectedActivity\" alt-image=\"Imagem da atividade\"></editor-insert-image>\n" +
    "                <hr>\n" +
    "            </div>\n" +
    "            <div class=\"form-group hidden\">\n" +
    "                <label>Adicionar um áudio para a atividade</label>\n" +
    "                <i>Permitir adicionar áudio</i>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-if=\"vm.selectedActivity.type === 'PICTURES'\">\n" +
    "                <hr class=\"hidden\">\n" +
    "                <div class=\"form-group\"\n" +
    "                     ng-required=\"vm.selectedActivity.type === 'PICTURES'\">\n" +
    "                    <label>Adicionar as respostas corretas</label>\n" +
    "                    <editor-insert-image model=\"vm.selectedActivity\"\n" +
    "                                         answer-type=\"CORRECT\"\n" +
    "                                         alt-image=\"Opção de resposta correta\"\n" +
    "                                         multiple-select=\"true\"></editor-insert-image>\n" +
    "                </div>\n" +
    "\n" +
    "                <hr>\n" +
    "                <div class=\"form-group\"\n" +
    "                     ng-required=\"vm.selectedActivity.type === 'PICTURES'\">\n" +
    "                    <label>Adicionar as respostas incorretas</label>\n" +
    "                    <editor-insert-image model=\"vm.selectedActivity\"\n" +
    "                                         answer-type=\"INCORRECT\"\n" +
    "                                         alt-image=\"Opção de resposta incorreta\"\n" +
    "                                         multiple-select=\"true\"></editor-insert-image>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"form-group required\">\n" +
    "                <label class=\"control-label\" for=\"activity.name\">Nome da atividade</label>\n" +
    "                <input class=\"form-control input-circle\"\n" +
    "                       type=\"text\"\n" +
    "                       id=\"activity.name\"\n" +
    "                       required\n" +
    "                       placeholder=\"Informe um nome para a atividade\"\n" +
    "                       ng-model=\"vm.selectedActivity.name\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group required\" ng-if=\"vm.selectedActivity.type === 'LETTERS'\">\n" +
    "                <label class=\"control-label\" for=\"activity.answer\">Resposta</label>\n" +
    "                <input class=\"form-control input-circle\"\n" +
    "                       type=\"text\"\n" +
    "                       id=\"activity.answer\"\n" +
    "                       placeholder=\"Informe a resposta da atividade\"\n" +
    "                       ng-required=\"vm.selectedActivity.type === 'LETTERS'\"\n" +
    "                       ng-model=\"vm.selectedActivity.answer\">\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"control-label\" for=\"activity.level\">Nível de dificuldade</label>\n" +
    "                <select class=\"form-control btn-circle\"\n" +
    "                        required\n" +
    "                        id=\"activity.level\"\n" +
    "                        placeholder=\"Informe um nível de dificuldade\"\n" +
    "                        ng-model=\"vm.selectedActivity.level\"\n" +
    "                        ng-options=\"option.value as option.label for option in vm.difficultyLevels\">\n" +
    "                </select>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\" ng-class=\"{'required': vm.selectedActivity.type === 'PICTURES'}\">\n" +
    "                <label for=\"activity.tip\">Dica</label>\n" +
    "                <input class=\"form-control input-circle\"\n" +
    "                       type=\"text\"\n" +
    "                       id=\"activity.tip\"\n" +
    "                       ng-required=\"vm.selectedActivity.type === 'PICTURES'\"\n" +
    "                       placeholder=\"Informe uma dica para a atividade\"\n" +
    "                       ng-model=\"vm.selectedActivity.tip\">\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"activity.time\">Tempo para resolução (mm:ss)</label>\n" +
    "                <input class=\"form-control input-circle\"\n" +
    "                       type=\"datetime\"\n" +
    "                       id=\"activity.time\"\n" +
    "                       placeholder=\"59:59\"\n" +
    "                       ng-model=\"vm.selectedActivity.time\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</form>\n"
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
    "\n" +
    "\n" +
    "\n" +
    "<editor-answer-options></editor-answer-options>"
  );


  $templateCache.put('src/components/editor/layouts/multiple-uploads/views/_multiple-uploads.html',
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "        <span ng-if=\"vm.uploader.queueLimit != 1\" class=\"btn btn-success fileinput-button\" ng-class=\"{disabled: vm.disabled}\">\n" +
    "            <i class=\"fa fa-fw fa-plus\"></i>\n" +
    "            <span>Adicionar arquivos</span>\n" +
    "            <input type=\"file\" nv-file-select=\"\" uploader=\"vm.uploader\" multiple/>\n" +
    "        </span>\n" +
    "\n" +
    "         <span ng-if=\"vm.uploader.queueLimit === 1 && vm.uploader.queue.length === 0\" class=\"btn btn-success fileinput-button\" ng-class=\"{disabled: vm.disabled}\">\n" +
    "            <i class=\"fa fa-fw fa-plus\"></i>\n" +
    "            <span>Adicionar arquivo</span>\n" +
    "            <input type=\"file\" nv-file-select=\"\" uploader=\"vm.uploader\" />\n" +
    "        </span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-12\" ng-if=\"vm.uploader.queue.length || vm.uploaderErrors.length\">\n" +
    "        <div class=\"table\">\n" +
    "            <div class=\"hidden-xs col-sm-6 bold padding-top-10 padding-left-10 padding-right-10 \">Nome do arquivo</div>\n" +
    "            <div class=\"hidden-xs col-sm-2 bold padding-top-10 padding-left-10 padding-right-10 \">Tamanho</div>\n" +
    "            <div class=\"hidden-xs col-sm-2 bold padding-top-10 padding-left-10 padding-right-10 \">Progresso</div>\n" +
    "            <div class=\"hidden-xs col-sm-2 bold padding-top-10 padding-left-10 padding-right-10 \">Ações</div>\n" +
    "            <div class=\"no-padding row-sm-height col-md-12\" ng-repeat=\"item in vm.uploader.queue\">\n" +
    "                <hr class=\"hidden-xs col-xs-12 no-padding margin-bottom-5 margin-top-5\" ng-style=\"{'border-width': $first ? '2px' : '1px'}\">\n" +
    "                <div class=\"row-sm-height\">\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-6 padding-left-10 padding-right-10 text-center bold padding-top-10\">Nome do arquivo</div>\n" +
    "                    <div class=\"hidden-xs col-xs-12 col-sm-6 padding-left-10 padding-right-10 col-sm-height col-sm-middle bold\">{{item.file.name}}</div>\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-6 padding-left-10 padding-right-10 col-sm-height col-sm-middle text-center\">{{item.file.name}}</div>\n" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 text-center bold padding-top-10\">Tamanho</div>\n" +
    "                    <div class=\"hidden-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 col-sm-height col-sm-middle\">{{item.file.size/1024/1024|number:2}} MB</div>\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 col-sm-height col-sm-middle text-center\">{{item.file.size/1024/1024|number:2}} MB</div>\n" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 text-center bold padding-top-10\">Progresso</div>\n" +
    "                    <div class=\"col-xs-12 col-sm-2 padding-left-10 padding-right-10 col-sm-height col-sm-middle\">\n" +
    "                        <div class=\"progress\" style=\"margin-bottom: 0;\">\n" +
    "                            <div class=\"progress-bar\" role=\"progressbar\" ng-style=\"{ 'width': item.progress + '%' }\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 text-center bold padding-top-10\">Ações</div>\n" +
    "                    <div class=\"hidden-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 col-sm-height col-sm-middle\">\n" +
    "                        <button ng-if=\"item.isUploading\" type=\"button\" class=\"btn btn-warning btn-xs\" ng-click=\"item.cancel(); item.remove()\"\n" +
    "                                ng-disabled=\"!item.isUploading\">\n" +
    "                            <span class=\"fa fa-fw fa-ban\"></span> Cancelar\n" +
    "                        </button>\n" +
    "                        <button type=\"button\" class=\"btn btn-danger btn-xs\" ng-click=\"item.remove(); vm.removeItem(item)\">\n" +
    "                            <span class=\"fa fa-fw fa-remove\"></span> Remover\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 col-sm-height col-sm-middle text-center\">\n" +
    "                        <button ng-if=\"item.isUploading\" type=\"button\" class=\"btn btn-warning btn-xs\" ng-click=\"item.cancel(); item.remove()\"\n" +
    "                                ng-disabled=\"!item.isUploading\">\n" +
    "                            <span class=\"fa fa-fw fa-ban\"></span> Cancelar\n" +
    "                        </button>\n" +
    "                        <button type=\"button\" class=\"btn btn-danger btn-xs\" ng-click=\"item.remove(); vm.removeItem(item)\">\n" +
    "                            <span class=\"fa fa-fw fa-remove\"></span> Remover\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "                    <hr class=\"visible-xs col-xs-12 no-padding no-margin-bottom margin-top-15\" ng-if=\"!$last\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"no-padding row-sm-height col-md-12\" ng-repeat=\"item in vm.uploaderErrors\">\n" +
    "                <hr class=\"hidden-xs col-xs-12 no-padding margin-bottom-5 margin-top-5\" ng-style=\"{'border-width': $first && !vm.uploader.queue.length ? '2px' : '1px'}\">\n" +
    "                <div class=\"row-sm-height\">\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-6 padding-left-10 padding-right-10 text-center bold padding-top-10\">Nome do arquivo</div>\n" +
    "                    <div class=\"hidden-xs col-xs-12 col-sm-6 padding-left-10 padding-right-10 col-sm-height col-sm-middle bold\">{{item.file.name}}</div>\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-6 padding-left-10 padding-right-10 col-sm-height col-sm-middle text-center\">{{item.file.name}}</div>\n" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 text-center bold padding-top-10\">Tamanho</div>\n" +
    "                    <div class=\"hidden-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 col-sm-height col-sm-middle\">{{item.file.size/1024/1024|number:2}} MB</div>\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 col-sm-height col-sm-middle text-center\">{{item.file.size/1024/1024|number:2}} MB</div>\n" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 text-center bold padding-top-10\">Progresso</div>\n" +
    "                    <div class=\"hidden-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 col-sm-height col-sm-middle text-danger\">item.file.error</div>\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 col-sm-height col-sm-middle text-danger text-center\">item.file.error</div>\n" +
    "\n" +
    "                    <div class=\"visible-xs col-xs-12 col-sm-2 padding-left-10 padding-right-10 text-center bold padding-top-10\">Ações</div>\n" +
    "                    <div class=\"col-xs-12 col-sm-2 padding-left-10 padding-right-10 text-center bold padding-top-10\">\n" +
    "                        <button type=\"button\" class=\"btn btn-danger btn-xs\" ng-click=\"vm.removeErrorItem($index)\">\n" +
    "                            <span class=\"fa fa-fw fa-remove\"></span> Remover\n" +
    "                        </button>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <hr class=\"visible-xs col-xs-12 no-padding no-margin-bottom margin-top-15\" ng-if=\"!$last\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <hr/>\n" +
    "        <div ng-if=\"vm.uploader.getNotUploadedItems().length\">\n" +
    "            <div>\n" +
    "                <div class=\"progress\">\n" +
    "                    <div class=\"progress-bar\" role=\"progressbar\" ng-style=\"{ 'width': vm.uploader.progress + '%' }\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <button ng-if=\"!vm.uploader.autoUpload\" type=\"button\" class=\"btn btn-success btn-s\" ng-click=\"vm.uploader.uploadAll()\"\n" +
    "                    ng-disabled=\"!vm.uploader.getNotUploadedItems().length\">\n" +
    "                <span class=\"fa fa-fw fa-upload\"></span> Enviar todos\n" +
    "            </button>\n" +
    "            <button ng-if=\"vm.uploader.isUploading\" type=\"button\" class=\"btn btn-warning btn-s\" ng-click=\"vm.uploader.cancelAll()\"\n" +
    "                    ng-disabled=\"!vm.uploader.isUploading\">\n" +
    "                <span class=\"fa fa-fw fa-ban\"></span> Cancelar todos\n" +
    "            </button>\n" +
    "            <button ng-if=\"vm.uploader.isUploading\"  type=\"button\" class=\"btn btn-danger btn-s\" ng-click=\"vm.uploader.clearQueue()\"\n" +
    "                    ng-disabled=\"!vm.uploader.queue.length\">\n" +
    "                <span class=\"fa fa-fw fa-trash\"></span> Remover todos\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('src/components/editor/layouts/puzzle/view/_puzzle.html',
    "\n" +
    "\n" +
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
    "                            <h4>O seu tempo foi de {{vm.getTimeResult() | date:\"mm:ss\"}}</h4>\n" +
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
    "<div class=\"alert alert-info\">O conteúdo que você está buscando não foi encontrado.</div>\n" +
    "<h4>Você pode ajudar</h4>\n" +
    "<ul>\n" +
    "    <li>\n" +
    "        <strong>Você digitou o link diretamente na barra de endereço?</strong><br>\n" +
    "        Por gentileza, verifique se está correto.\n" +
    "    </li>\n" +
    "    <li>\n" +
    "        <strong>Você clicou em algum link para essa área?</strong><br>\n" +
    "        É preciso contatar o administrador.\n" +
    "    </li>\n" +
    "</ul>"
  );


  $templateCache.put('src/modules/core/views/error/500.html',
    "<div class=\"alert alert-info\">Uma operação não esperada foi executada.</div>"
  );


  $templateCache.put('src/modules/core/views/error/accessdenied.html',
    "\n" +
    "<div class=\"alert alert-info\">\n" +
    "\t<h4>Você não tem acesso a essa área.</h4>\n" +
    "\tVocê deveria estar visualizando essa área?\n" +
    "</div>\n"
  );


  $templateCache.put('src/modules/core/views/error/index.html',
    "<div class=\"container\">\n" +
    "\t<!-- BEGIN PAGE HEAD -->\n" +
    "\t<div class=\"page-head\">\n" +
    "\t\t<!-- BEGIN PAGE TITLE -->\n" +
    "\t\t<div class=\"page-title\">\n" +
    "\t\t\t<h1>{{$state.current.data.pageTitle}} <small>{{$state.current.data.subTitle}}</small></h1>\n" +
    "\t\t</div>\n" +
    "\t\t<!-- END PAGE TITLE -->\n" +
    "\t</div>\n" +
    "\t<!-- END PAGE HEAD -->\n" +
    "\t<!-- BEGIN PAGE CONTENT INNER -->\n" +
    "\t<div class=\"row margin-top-10\">\n" +
    "\t\t<div class=\"col-md-12\">\n" +
    "\t\t\t<div class=\"portlet light\">\n" +
    "\t\t\t\t<div class=\"portlet-body\" ui-view=\"error-content\">\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<!-- END CONTENT -->\n" +
    "</div>"
  );


  $templateCache.put('src/modules/editor/category/views/add.html',
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-8 col-md-6 col-lg-4\">\n" +
    "        <editor-category-create-category category=\"vm.category\"></editor-category-create-category>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('src/modules/editor/category/views/edit.html',
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-4 col-md-3\">\n" +
    "\n" +
    "        <!--<editor-multiple-uploads done-callback=\"vm.doneFile(file, activity)\" on-remove-item=\"vm.removeFile(file, activity)\" options=\"{queueLimit: 1}\"></editor-multiple-uploads>-->\n" +
    "        <label for=\"category.name\" class=\"control-label\">Assunto</label>\n" +
    "        <input class=\"form-control input-circle\" type=\"text\"\n" +
    "               id=\"category.name\"\n" +
    "               ng-model=\"vm.categoryNewName\"\n" +
    "               ng-value=\"vm.category.name\"\n" +
    "               placeholder=\"Informe uma breve descrição para o assunto\">\n" +
    "\n" +
    "        <hr>\n" +
    "\n" +
    "        <editor-insert-image model=\"vm.category\" alt-image=\"Imagem da categoria\"></editor-insert-image>\n" +
    "\n" +
    "<!--\n" +
    "        <div ng-if=\"vm.hasImage()\">\n" +
    "            <div class=\"pull-right\">\n" +
    "                <i class=\"fa fa-times\" aria-hidden=\"true\"\n" +
    "                   title=\"Clique para remover a imagem\"\n" +
    "                   ng-click=\"vm.categoryImageRemoved()\"></i>\n" +
    "            </div>\n" +
    "            <a href=\"https://drive.google.com/uc?export=view&id={{vm.category.image.id}}\" target=\"_blank\">\n" +
    "                <img class=\"img-thumbnail\"\n" +
    "                     ng-src=\"https://drive.google.com/uc?export=view&id={{vm.category.image.id}}\"\n" +
    "                     alt=\"Imagem da categoria\"\n" +
    "                     title=\"Clique para abrir a imagem em tamanho real.\" />\n" +
    "            </a>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"img-responsive my-gallery-no-img pointer\"\n" +
    "             title=\"Clique para adicionar uma imagem\"\n" +
    "             ng-if=\"!vm.hasImage()\"\n" +
    "             ng-click=\"app.authSvc.createPicker(vm.category.parent, vm.categoryImageSelected)\">\n" +
    "            <i class=\"fa fa-picture-o fa-3x\" aria-hidden=\"true\"></i>\n" +
    "        </div>\n" +
    "        -->\n" +
    "\n" +
    "        <div ng-if=\"vm.category\">\n" +
    "            <hr>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-12\">\n" +
    "                    <button class=\"btn btn-circle btn-primary btn-sm margin-bottom-5\"\n" +
    "                            type=\"button\"\n" +
    "                            ng-disabled=\"!vm.category.activities.length || !vm.isEnabledBtnExport()\"\n" +
    "                            ng-click=\"vm.exportJSON()\">\n" +
    "                        JSON\n" +
    "                    </button>\n" +
    "                    <button class=\"btn btn-circle btn-primary btn-sm margin-bottom-5\"\n" +
    "                            type=\"button\"\n" +
    "                            ng-disabled=\"!vm.category.activities.length || !vm.isEnabledBtnExport()\"\n" +
    "                            ng-click=\"\"\n" +
    "                            onclick=\"alert('Exportou a pasta compactada');\">\n" +
    "                        Modo offline\n" +
    "                    </button>\n" +
    "                    <button class=\"btn btn-circle btn-primary btn-sm margin-bottom-5\"\n" +
    "                            type=\"button\"\n" +
    "                            ng-disabled=\"!vm.category.activities.length || !vm.isEnabledBtnExport()\"\n" +
    "                            ng-click=\"vm.generateQrCode()\">\n" +
    "                        Gerar QR Code\n" +
    "                    </button>\n" +
    "                    <a id=\"downloadAnchorElem\" style=\"display:none\"></a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <hr>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-12\">\n" +
    "                    <a class=\"pointer\"\n" +
    "                       title=\"Adicionar atividade\"\n" +
    "                       ng-disabled=\"vm.category.activities.length && vm.isActivityAnswerEmpty()\"\n" +
    "                       ng-click=\"vm.addActivity()\">\n" +
    "                        <i class=\"fa fa-plus\"></i>\n" +
    "                        Adicionar atividade\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <editor-category-list-activities\n" +
    "                    activities=\"vm.category.activities\"\n" +
    "                    all-selected=\"vm.isAllSelected\"\n" +
    "                    selected-activity=\"vm.selectedActivity\"\n" +
    "                    toggle-all=\"vm.toggleAll()\"\n" +
    "                    option-toggled=\"vm.optionToggled()\"\n" +
    "                    ng-if=\"vm.category.activities.length\">\n" +
    "            </editor-category-list-activities>\n" +
    "        </div>\n" +
    "        <hr>\n" +
    "        <div class=\"row margin-bottom-20\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <button type=\"button\" class=\"btn btn-circle btn-primary\"\n" +
    "                        ng-disabled=\"vm.isLoading\"\n" +
    "                        ng-click=\"vm.saveCategory()\">\n" +
    "                    Salvar\n" +
    "                </button>\n" +
    "                <button type=\"button\" class=\"btn btn-circle btn-danger\"\n" +
    "                        ng-disabled=\"vm.isLoading\"\n" +
    "                        ng-click=\"vm.deleteCategory()\">Excluir</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\" ng-if=\"vm.isLoading\">\n" +
    "                <div>\n" +
    "                    <i class=\"fa fa-fw fa-spin fa-spinner\"></i> <strong>{{'Aguarde um instante'}}</strong>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-8 col-md-9 margin-top-25\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <qrcode data=\"{{vm.qrCodeData}}\" href=\"{{vm.qrCodeData}}\" ng-if=\"vm.qrCodeData\" size=\"200\"></qrcode>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <editor-category-activity-type\n" +
    "                selected-activity=\"vm.selectedActivity\"\n" +
    "                ng-if=\"vm.selectedActivity && !vm.selectedActivity.type\"></editor-category-activity-type>\n" +
    "\n" +
    "        <div ng-if=\"vm.selectedActivity.type\">\n" +
    "            <editor-answer-options\n" +
    "                    selected-activity=\"vm.selectedActivity\"\n" +
    "                    on-save-action=\"vm.saveActivity()\"\n" +
    "                    on-delete-action=\"vm.deleteActivity()\"></editor-answer-options>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('src/modules/editor/gallery/view/index.html',
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "\n" +
    "        <a ui-sref=\"editor.category.add\">\n" +
    "            <i class=\"fa fa-plus fa-3x\"></i> Adicionar categoria\n" +
    "        </a>\n" +
    "\n" +
    "        <h3>Exemplo de álbum 1</h3>\n" +
    "        <h3>Exemplo de álbum 2</h3>\n" +
    "        <h3>Exemplo de álbum 3</h3>\n" +
    "        <h3>Exemplo de álbum 4</h3>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('src/modules/editor/my-gallery/view/index.html',
    "<div ng-if=\"app.authSvc.isSignedInGoogle()\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-3 text-center\" ng-repeat=\"category in vm.categories\">\n" +
    "            <a href=\"#\" ui-sref=\"editor.category.edit({id: category.id})\">\n" +
    "                <img class=\"img-responsive center-block img-category\"\n" +
    "                     ng-src=\"https://drive.google.com/uc?export=view&id={{category.image.id}}\"\n" +
    "                     alt=\"Imagem da categoria\" ng-if=\"category.image.id\">\n" +
    "                <div class=\"img-responsive my-gallery-no-img\" ng-if=\"!category.image.id\">\n" +
    "                    <i class=\"fa fa-picture-o fa-3x\" aria-hidden=\"true\"></i>\n" +
    "                </div>\n" +
    "                <h4 class=\"text-center\">{{category.name}}</h4>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\" ng-if=\"!vm.categories.length\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <div class=\"alert alert-info\">Você não possui categorias em sua galeria. :(</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\" ng-if=\"!app.authSvc.isSignedInGoogle()\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "        <div class=\"alert alert-warning\">Para consultar a sua galeria é necessário estar conectado com o Google.</div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('src/modules/editor/views/index.html',
    "<div class=\"page-container-bg-solid page-header-fixed page-sidebar-closed-hide-logo\">\n" +
    "\n" +
    "    <div class=\"page-header navbar navbar-fixed-top\">\n" +
    "        <!-- BEGIN HEADER INNER -->\n" +
    "        <div class=\"page-header-inner \">\n" +
    "            <!-- BEGIN LOGO -->\n" +
    "            <div class=\"page-logo\">\n" +
    "                <!--<a href=\"index.html\">\n" +
    "                    <img src=\"../assets/layouts/layout4/img/logo-light.png\" alt=\"logo\" class=\"logo-default\">\n" +
    "                </a>-->\n" +
    "                <h1 class=\"brand-name\">EasyEdu</h1>\n" +
    "                <div class=\"menu-toggler sidebar-toggler hide\">\n" +
    "                    <!-- DOC: Remove the above \"hide\" to enable the sidebar toggler button on header -->\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!-- END LOGO -->\n" +
    "            <!-- BEGIN RESPONSIVE MENU TOGGLER -->\n" +
    "            <a href=\"javascript:;\" class=\"menu-toggler responsive-toggler\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> </a>\n" +
    "            <!-- END RESPONSIVE MENU TOGGLER -->\n" +
    "            <!-- BEGIN PAGE ACTIONS -->\n" +
    "            <!-- DOC: Remove \"hide\" class to enable the page header actions -->\n" +
    "\n" +
    "            <!-- END PAGE ACTIONS -->\n" +
    "            <!-- BEGIN PAGE TOP -->\n" +
    "            <div class=\"page-top\">\n" +
    "                <!-- BEGIN HEADER SEARCH BOX -->\n" +
    "                <!-- DOC: Apply \"search-form-expanded\" right after the \"search-form\" class to have half expanded search box -->\n" +
    "\n" +
    "                <!-- END HEADER SEARCH BOX -->\n" +
    "                <!-- BEGIN TOP NAVIGATION MENU -->\n" +
    "                <div class=\"top-menu\">\n" +
    "                    <ul class=\"nav navbar-nav pull-right\">\n" +
    "\n" +
    "                        <!-- BEGIN NOTIFICATION DROPDOWN -->\n" +
    "                        <!-- DOC: Apply \"dropdown-dark\" class after below \"dropdown-extended\" to change the dropdown styte -->\n" +
    "                        <!-- DOC: Apply \"dropdown-hoverable\" class after \"dropdown\" and remove data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\" attributes to enable hover dropdown mode -->\n" +
    "                        <!-- DOC: Remove \"dropdown-hoverable\" and add data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\" attributes to the below A element with dropdown-toggle class -->\n" +
    "\n" +
    "                        <!-- END NOTIFICATION DROPDOWN -->\n" +
    "\n" +
    "                        <!-- BEGIN INBOX DROPDOWN -->\n" +
    "                        <!-- DOC: Apply \"dropdown-dark\" class after below \"dropdown-extended\" to change the dropdown styte -->\n" +
    "\n" +
    "                        <!-- END INBOX DROPDOWN -->\n" +
    "\n" +
    "                        <!-- BEGIN TODO DROPDOWN -->\n" +
    "                        <!-- DOC: Apply \"dropdown-dark\" class after below \"dropdown-extended\" to change the dropdown styte -->\n" +
    "\n" +
    "                        <!-- END TODO DROPDOWN -->\n" +
    "                        <!-- BEGIN USER LOGIN DROPDOWN -->\n" +
    "                        <!-- DOC: Apply \"dropdown-dark\" class after below \"dropdown-extended\" to change the dropdown styte -->\n" +
    "                        <li class=\"dropdown dropdown-user dropdown-dark\" ng-if=\"app.authSvc.isSignedInGoogle()\">\n" +
    "                            <a href=\"javascript:;\" class=\"dropdown-toggle\" id=\"dLabel\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\" aria-expanded=\"false\">\n" +
    "                                <span class=\"username username-hide-on-mobile\"> {{vm.userInformation.name}} </span>\n" +
    "                                <!-- DOC: Do not remove below empty space(&nbsp;) as its purposely used -->\n" +
    "                                <img class=\"img-circle\" alt=\"User photo\" ng-src=\"{{vm.userInformation.urlPhoto}}\">\n" +
    "                            </a>\n" +
    "                            <ul class=\"dropdown-menu dropdown-menu-default\" aria-labelledby=\"dLabel\">\n" +
    "                                <li>\n" +
    "                                    <a href=\"javascript:;\" ng-click=\"app.authSvc.handleSignOutClick($event)\">\n" +
    "                                        <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Sair\n" +
    "                                    </a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </li>\n" +
    "\n" +
    "                        <li class=\"dropdown dropdown-user dropdown-dark\" ng-if=\"!app.authSvc.isSignedInGoogle()\">\n" +
    "                            <a href=\"javascript:;\" class=\"dropdown-toggle\"\n" +
    "                               ng-click=\"app.authSvc.handleAuthClick($event)\"\n" +
    "                               data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\" aria-expanded=\"false\">\n" +
    "                                <span class=\"username username-hide-on-mobile vertical-align-middle\"> Acessar com o Google </span>\n" +
    "                                <div class=\"login-option social-icon-position googleplus-icon\"></div>\n" +
    "                            </a>\n" +
    "                        </li>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "                        <!-- <a class=\"btn btn-social-icon btn-sm btn-google\"\n" +
    "                            ng-click=\"app.authSvc.handleAuthClick($event)\"\n" +
    "                            ng-if=\"!app.authSvc.isSignedInGoogle()\"\n" +
    "                            title=\"Acessar com o Google\">\n" +
    "                             <i class=\"fa fa-google\"></i>\n" +
    "                         </a>\n" +
    "                         <div ng-if=\"app.authSvc.isSignedInGoogle()\">\n" +
    "                             {{vm.userInformation.name}}\n" +
    "                             <img class=\"img-circle\" alt=\"User photo\"\n" +
    "                                  ng-src=\"{{vm.userInformation.urlPhoto}}\">\n" +
    "                             <button type=\"button\" class=\"btn btn-link btn-social-icon btn-sm\"\n" +
    "                                     ng-click=\"app.authSvc.handleSignOutClick($event)\"\n" +
    "                                     title=\"Sair\">\n" +
    "                                 <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\n" +
    "                             </button>\n" +
    "                         </div>-->\n" +
    "                        <!-- END USER LOGIN DROPDOWN -->\n" +
    "\n" +
    "                        <!-- BEGIN QUICK SIDEBAR TOGGLER -->\n" +
    "\n" +
    "                        <!-- END QUICK SIDEBAR TOGGLER -->\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "                <!-- END TOP NAVIGATION MENU -->\n" +
    "            </div>\n" +
    "            <!-- END PAGE TOP -->\n" +
    "        </div>\n" +
    "        <!-- END HEADER INNER -->\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "\n" +
    "    <!-- BEGIN PAGE SPINNER -->\n" +
    "    <div ng-spinner-bar class=\"page-spinner-bar\" ng-if=\"app.authSvc.isLoading\">\n" +
    "        <div class=\"bounce1\"></div>\n" +
    "        <div class=\"bounce2\"></div>\n" +
    "        <div class=\"bounce3\"></div>\n" +
    "    </div>\n" +
    "    <!-- END PAGE SPINNER -->\n" +
    "\n" +
    "    <div class=\"page-container\" ng-if=\"!app.authSvc.isLoading\">\n" +
    "\n" +
    "        <div class=\"page-sidebar-wrapper\">\n" +
    "            <!-- BEGIN SIDEBAR -->\n" +
    "            <!-- DOC: Set data-auto-scroll=\"false\" to disable the sidebar from auto scrolling/focusing -->\n" +
    "            <!-- DOC: Change data-auto-speed=\"200\" to adjust the sub menu slide up/down speed -->\n" +
    "            <div class=\"page-sidebar navbar-collapse collapse\">\n" +
    "                <!-- BEGIN SIDEBAR MENU -->\n" +
    "                <!-- DOC: Apply \"page-sidebar-menu-light\" class right after \"page-sidebar-menu\" to enable light sidebar menu style(without borders) -->\n" +
    "                <!-- DOC: Apply \"page-sidebar-menu-hover-submenu\" class right after \"page-sidebar-menu\" to enable hoverable(hover vs accordion) sub menu mode -->\n" +
    "                <!-- DOC: Apply \"page-sidebar-menu-closed\" class right after \"page-sidebar-menu\" to collapse(\"page-sidebar-closed\" class must be applied to the body element) the sidebar sub menu mode -->\n" +
    "                <!-- DOC: Set data-auto-scroll=\"false\" to disable the sidebar from auto scrolling/focusing -->\n" +
    "                <!-- DOC: Set data-keep-expand=\"true\" to keep the submenues expanded -->\n" +
    "                <!-- DOC: Set data-auto-speed=\"200\" to adjust the sub menu slide up/down speed -->\n" +
    "                <ul class=\"page-sidebar-menu\" data-keep-expanded=\"false\" data-auto-scroll=\"true\" data-slide-speed=\"200\">\n" +
    "                    <li class=\"nav-item\" ng-repeat=\"item in app.primaryNavigation | orderBy: 'order'\" ui-sref-active=\"active\">\n" +
    "                        <a class=\"nav-link nav-toggle\" ui-sref=\"{{item.stateName}}\">\n" +
    "                            <i class=\"fa\" ng-class=\"item.icon\" aria-hidden=\"true\"></i>\n" +
    "                            <span class=\"title\">{{item.title}}</span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "                <!-- END SIDEBAR MENU -->\n" +
    "            </div>\n" +
    "            <!-- END SIDEBAR -->\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"page-content-wrapper\">\n" +
    "            <div class=\"page-content\">\n" +
    "                <div class=\"portlet light bordered\">\n" +
    "                    <div class=\"portlet-body\">\n" +
    "                        <div ui-view></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"page-footer\">\n" +
    "        <div class=\"page-footer-inner\">\n" +
    "            <p class=\"text-center\">Made by Felipe Corso</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<nav class=\"navbar navbar-default navbar-static-top hidden\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\"\n" +
    "                    aria-expanded=\"false\" aria-controls=\"navbar\">\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "            <a class=\"navbar-brand\" ui-sref=\"editor\">EasyEdu</a>\n" +
    "        </div>\n" +
    "        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n" +
    "            <ul class=\"nav navbar-nav\" ng-if=\"app.primaryNavigation.length > 0\">\n" +
    "                <li ng-repeat=\"item in app.primaryNavigation | orderBy: 'order'\" ui-sref-active=\"active\">\n" +
    "                    <a ui-sref=\"{{item.stateName}}\" ng-bind=\"item.title\"></a>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                    <div>\n" +
    "                        <a class=\"btn btn-social-icon btn-sm btn-google\"\n" +
    "                           ng-click=\"app.authSvc.handleAuthClick($event)\"\n" +
    "                           ng-if=\"!app.authSvc.isSignedInGoogle()\"\n" +
    "                           title=\"Acessar com o Google\">\n" +
    "                            <i class=\"fa fa-google\"></i>\n" +
    "                        </a>\n" +
    "                        <div ng-if=\"app.authSvc.isSignedInGoogle()\">\n" +
    "                            {{vm.userInformation.name}}\n" +
    "                            <img class=\"img-circle\" alt=\"User photo\"\n" +
    "                                 ng-src=\"{{vm.userInformation.urlPhoto}}\">\n" +
    "                            <button type=\"button\" class=\"btn btn-link btn-social-icon btn-sm\"\n" +
    "                               ng-click=\"app.authSvc.handleSignOutClick($event)\"\n" +
    "                               title=\"Sair\">\n" +
    "                                <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <!--/.nav-collapse -->\n" +
    "    </div>\n" +
    "</nav>\n" +
    "<div class=\"container hidden\">\n" +
    "    <footer class=\"footer\">\n" +
    "        <hr/>\n" +
    "    </footer>\n" +
    "</div>"
  );


  $templateCache.put('src/modules/game/views/category.html',
    "<div class=\"panel-group\">\n" +
    "    <div class=\"panel panel-default\">\n" +
    "        <div class=\"panel-heading text-center\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-12\">\n" +
    "                    <h2>Escolha uma categoria</h2>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"panel-body text-center\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-6 col-sm-4 col-md-2\" style=\"max-height: 235px; height: 235px;\" ng-repeat=\"category in vm.getCategories()\">\n" +
    "                    <a class=\"text-decoration-none\" ng-click=\"vm.setCategory(category)\" ui-sref=\"game.mode({category: category, categoryId: category.id, loaded: true})\">\n" +
    "                        <div class=\"thumbnail\">\n" +
    "                            <img class=\"img-thumbnail\" ng-src=\"{{category.image.link}}\" ng-if=\"category.image.link\" alt=\"Imagem da categoria\">\n" +
    "                            <span>{{category.name}}</span>\n" +
    "                        </div>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('src/modules/game/views/game-mode.html',
    "<div class=\"panel-group\">\n" +
    "    <div class=\"panel panel-default\">\n" +
    "        <div class=\"panel-heading text-center\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-12\">\n" +
    "                    <h2>Escolha o modo de jogo</h2>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"panel-body\">\n" +
    "            <div class=\"row text-center\">\n" +
    "                <div class=\"col-xs-6\">\n" +
    "                    <button class=\"btn btn-default btn-circle btn-game-mode\" type=\"button\"\n" +
    "                            ng-click=\"vm.goToPlay('SINGLE_PLAYER')\">\n" +
    "                        <i class=\"fa fa-user fa-5x\"></i>\n" +
    "                        Single player\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-6\">\n" +
    "                    <button class=\"btn btn-default btn-circle btn-game-mode\" type=\"button\"\n" +
    "                            ng-click=\"vm.goToPlay('MULTIPLAYER')\">\n" +
    "                        <i class=\"fa fa-users fa-5x\"></i>\n" +
    "                        Multiplayer\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('src/modules/game/views/play.html',
    "<div ng-init=\"vm.play()\"></div>\n" +
    "<div class=\"row\" ng-if=\"vm.gameMode !== 'MULTIPLAYER'\">\n" +
    "    <div class=\"col-md-12 text-center\">\n" +
    "        <game-letters-layout\n" +
    "                action-next-phase=\"vm.actionNextPhase()\"\n" +
    "                activity=\"vm.selectedActivity\"\n" +
    "                category=\"vm.category\"\n" +
    "                game-mode=\"vm.gameMode\"\n" +
    "                has-more-phases=\"vm.hasMorePhases()\"\n" +
    "                ng-if=\"vm.selectedActivity.type === 'LETTERS'\"></game-letters-layout>\n" +
    "        <game-pictures-layout\n" +
    "                action-next-phase=\"vm.actionNextPhase()\"\n" +
    "                activity=\"vm.selectedActivity\"\n" +
    "                category=\"vm.category\"\n" +
    "                game-mode=\"vm.gameMode\"\n" +
    "                has-more-phases=\"vm.hasMorePhases()\"\n" +
    "                play=\"vm.play()\"\n" +
    "                ng-if=\"vm.selectedActivity.type === 'PICTURES'\"></game-pictures-layout>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"row\" ng-if=\"vm.gameMode === 'MULTIPLAYER'\">\n" +
    "    <div class=\"col-md-6 rotate-left\">\n" +
    "        <game-letters-layout\n" +
    "                action-next-phase=\"vm.actionNextPhase()\"\n" +
    "                activity=\"vm.selectedActivity\"\n" +
    "                category=\"vm.category\"\n" +
    "                game-mode=\"vm.gameMode\"\n" +
    "                has-more-phases=\"vm.hasMorePhases()\"\n" +
    "                ng-if=\"vm.selectedActivity.type === 'LETTERS'\"></game-letters-layout>\n" +
    "        <game-pictures-layout\n" +
    "                action-next-phase=\"vm.actionNextPhase()\"\n" +
    "                activity=\"vm.selectedActivity\"\n" +
    "                category=\"vm.category\"\n" +
    "                game-mode=\"vm.gameMode\"\n" +
    "                has-more-phases=\"vm.hasMorePhases()\"\n" +
    "                play=\"vm.play()\"\n" +
    "                ng-if=\"vm.selectedActivity.type === 'PICTURES'\"></game-pictures-layout>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-6 rotate-right\">\n" +
    "        <game-letters-layout\n" +
    "                action-next-phase=\"vm.actionNextPhase()\"\n" +
    "                activity=\"vm.selectedActivity\"\n" +
    "                category=\"vm.category\"\n" +
    "                game-mode=\"vm.gameMode\"\n" +
    "                has-more-phases=\"vm.hasMorePhases()\"\n" +
    "                ng-if=\"vm.selectedActivity.type === 'LETTERS'\"></game-letters-layout>\n" +
    "        <game-pictures-layout\n" +
    "                action-next-phase=\"vm.actionNextPhase()\"\n" +
    "                activity=\"vm.selectedActivity\"\n" +
    "                category=\"vm.category\"\n" +
    "                game-mode=\"vm.gameMode\"\n" +
    "                has-more-phases=\"vm.hasMorePhases()\"\n" +
    "                play=\"vm.play()\"\n" +
    "                ng-if=\"vm.selectedActivity.type === 'PICTURES'\"></game-pictures-layout>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('src/modules/game/views/start.html',
    "<div class=\"panel-group\">\n" +
    "    <div class=\"panel panel-default\">\n" +
    "        <div class=\"panel-heading text-center\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-12\">\n" +
    "                    <h1>EasyEdu</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"panel-body text-center\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-12\">\n" +
    "                    <a class=\"btn btn-circle btn-success btn-lg\" ui-sref=\"game.category\">Iniciar</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"panel-footer\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-12\">\n" +
    "                    <label class=\"btn btn-link pull-right\" for=\"JSON_upload\" ng-click=\"vm.handleJsonSelect()\">Importar categoria</label>\n" +
    "                    <input type=\"file\"\n" +
    "                           style=\"display: none\"\n" +
    "                           id=\"JSON_upload\"\n" +
    "                           name=\"JSON_upload\"\n" +
    "                           ng-model=\"vm.categoryBase64\"\n" +
    "                           accept=\"application/json\" game-file-reader/>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );

}]);
