define([], function() {
    'use strict';
    Controller.$inject = ["$rootScope", "LoadGApi", "UserInformationData", "AuthorizationSvc"];
    /*@ngInject*/
    function Controller($rootScope, LoadGApi, UserInformationData, AuthorizationSvc) {
        var vm = this;
        vm.loadedGApi = LoadGApi;
        vm.userInformation = UserInformationData;



    }

    return Controller;
});