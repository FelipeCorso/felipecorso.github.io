define(function() {
    'use strict';
    var partialPath = "src/modules/editor/gallery/view/";
    return [
        {
            state: 'editor.gallery',
            config: {
                url: "/gallery",
                controller: 'GalleryCtrl as vm',
                templateUrl: partialPath + "index.html",
                resolve: {
                    waitParent: function(LoadGApi) {
                        console.log(LoadGApi);
                    }
                }
            }
        }
    ];
});