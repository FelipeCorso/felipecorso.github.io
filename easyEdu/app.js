define([
    /**
     * References first
     */
    'src/config/namespace'
    , 'src/config/app.config'
    , 'src/config/app.bootstrap'
    , 'src/resources/views'
    /**
     * Then load all components...
     */
    , 'src/components/editor/audio-src/component'
    , 'src/components/editor/category/activity-type/component'
    , 'src/components/editor/category/create-category/component'
    , 'src/components/editor/category/list-activities/component'
    , 'src/components/editor/insert-audio/component'
    , 'src/components/editor/insert-image/component'
    , 'src/components/editor/layouts/answer-options/component'
    , 'src/components/editor/layouts/letters-layout/component'
    , 'src/components/editor/layouts/memory-game/component'
    , 'src/components/editor/layouts/puzzle/component'
    , 'src/components/game/file-reader/component'
    , 'src/components/game/letters-layout/component'
    , 'src/components/game/pictures-layout/component'
    /**
     * ...and modules.
     */
    , 'src/modules/core/module'
    , 'src/modules/navigation/module'
    , 'src/modules/app/module'
    , 'src/modules/editor/module'
    , 'src/modules/editor/category/module'
    , 'src/modules/editor/gallery/module'
    , 'src/modules/editor/my-gallery/module'
    , 'src/modules/game/module'

    /**
     * Vendor
     */
    , 'src/config/app.vendor'

], function(namespace,
            appConfig,
            appBootstrap) {
    'use strict';
    angular.module(namespace, [
        "angularMoment",
        'ngRoute'
        , 'ui.router'
        /**
         * We need to load the resources before everything.
         */
        , 'resources.views'
        /**
         * App modules
         */

        , namespace + '.core'
        , namespace + '.app'
        , namespace + '.editor'
        , namespace + '.editor.category'
        , namespace + '.editor.gallery'
        , namespace + '.editor.my-gallery'
        , namespace + '.game'

        /**
         * App components
         */
        , namespace + '.components.editor.audio-src'
        , namespace + '.components.editor.insert-audio'
        , namespace + '.components.editor.insert-image'
        , namespace + '.components.editor.category.activity-type'
        , namespace + '.components.editor.category.create-category'
        , namespace + '.components.editor.category.list-activities'
        , namespace + '.components.editor.layouts.answer-options'
        , namespace + '.components.editor.layouts.letters-layout'
        , namespace + '.components.editor.layouts.memory-game'
        , namespace + '.components.editor.layouts.puzzle'
        , namespace + '.components.game.file-reader'
        , namespace + '.components.game.letters-layout'
        , namespace + '.components.game.pictures-layout'
    ])
        .config(appConfig)
        .run(appBootstrap)
    ;
    return {
        name: namespace
    };

});