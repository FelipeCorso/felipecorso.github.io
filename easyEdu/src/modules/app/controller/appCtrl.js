define(function () {
    'use strict';
    App.$inject = ['PrimaryNavigation', "AuthorizationSvc"];
    /*@ngInject*/
    function App(PrimaryNavigation, AuthorizationSvc) {
        var app = this;
        app.primaryNavigation = PrimaryNavigation.getNavigation();
        app.authSvc = AuthorizationSvc;
    }

    return App;
});
