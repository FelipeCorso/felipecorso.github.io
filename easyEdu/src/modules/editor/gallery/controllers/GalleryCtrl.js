define([], function () {
    'use strict';
    Controller.$inject = ["GalleryData"];
    /*@ngInject*/
    function Controller(GalleryData) {
        var vm = this;
        vm.defaultCategories = GalleryData;
    }

    return Controller;
});