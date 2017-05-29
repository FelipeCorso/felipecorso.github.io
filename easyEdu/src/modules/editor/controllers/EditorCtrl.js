define([], function() {
    'use strict';
    Controller.$inject = ["$rootScope", "LoadGApi", "UserInformationData", "AuthorizationSvc"];
    /*@ngInject*/
    function Controller($rootScope, LoadGApi, UserInformationData, AuthorizationSvc) {
        var vm = this;
        vm.userInformation = UserInformationData;

        $rootScope.$on("signedInGoogle", getUserInformation);
        $rootScope.$on("signedOutGoogle", cleanUserInformation);

        function getUserInformation() {
            if (AuthorizationSvc.isSignedInGoogle()) {
                return AuthorizationSvc.getUserInformation()
                    .then(function(response) {
                        vm.userInformation = response;
                    })
                    .catch(function(error) {
                        console.error(error);
                        vm.userInformation = {};
                    });
            } else {
                vm.userInformation = {};
            }
        }

        function cleanUserInformation() {
            vm.userInformation = {};
        }

    }

    return Controller;
});