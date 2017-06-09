define(function () {
    'use strict';
    App.$inject = ["$rootScope", "$state", 'PrimaryNavigation', "AuthorizationSvc"];
    /*@ngInject*/
    function App($rootScope, $state, PrimaryNavigation, AuthorizationSvc) {
        var app = this;
        app.userInformation = {};
        app.primaryNavigation = PrimaryNavigation.getNavigation();
        app.authSvc = AuthorizationSvc;
        app.getCurrentStateIncludes = getCurrentStateIncludes;
        /**
         * Set the state to the rootScope of the app.
         */
        $rootScope.$state = $state;
        app.init = init;

        $rootScope.$on("setUserInformation", setUserInformation);
        $rootScope.$on("signedInGoogle", loadUserInformation);
        $rootScope.$on("signedOutGoogle", cleanUserInformation);

        function getCurrentStateIncludes(path) {
            return window.location.hash.indexOf(path) > -1;
        }

        function setUserInformation(event, userInformation) {
            app.userInformation = userInformation;
        }

        function loadUserInformation() {
            if (AuthorizationSvc.isSignedInGoogle()) {
                return AuthorizationSvc.getUserInformation()
                    .then(function (response) {
                        app.userInformation = response;
                    })
                    .catch(function (error) {
                        console.error(error);
                        app.userInformation = {};
                    });
            } else {
                app.userInformation = {};
            }
        }

        function cleanUserInformation() {
            app.userInformation = {};
        }

        function init(){
            $(".menu-toggler.sidebar-toggler").click(function(){
                $(".page-container-bg-solid.page-header-fixed.page-sidebar-closed-hide-logo").toggleClass("page-sidebar-closed");
                $(".page-sidebar-menu").toggleClass("page-sidebar-menu-closed");
            });
        }
    }

    return App;
});
