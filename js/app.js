var app = angular.module('website', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/view_page1.html',
            controller: 'Page1Ctrl',
            controllerAs: 'bienvenue'
        })
        .when('/realisations', {
            templateUrl: 'views/view_page2.html',
            controller: 'Page2Ctrl',
            controllerAs: 'realisations'
        })
        .when('/realisations/thyme-maternite', {
            templateUrl: 'views/view_page_realisations.html',
            controller: 'PageRealisationsCtrl',
            controllerAs: 'realisations/thyme-maternite'
        })
        .when('/realisations/exob2b', {
            templateUrl: 'views/view_page_realisations.html',
            controller: 'PageRealisationsCtrl',
            controllerAs: 'realisations/exob2b'
        })
        .when('/realisations/barrette-structural', {
            templateUrl: 'views/view_page_realisations.html',
            controller: 'PageRealisationsCtrl',
            controllerAs: 'realisations/barrette-structural'
        })
        .when('/realisations/open-joist-triforce', {
            templateUrl: 'views/view_page_realisations.html',
            controller: 'PageRealisationsCtrl',
            controllerAs: 'realisations/open-joist-triforce'
        })
        .when('/realisations/physioextra', {
            templateUrl: 'views/view_page_realisations.html',
            controller: 'PageRealisationsCtrl',
            controllerAs: 'realisations/physioextra'
        })
        .when('/realisations/irriglobe', {
            templateUrl: 'views/view_page_realisations.html',
            controller: 'PageRealisationsCtrl',
            controllerAs: 'realisations/irriglobe'
        })
        .when('/realisations/feu-vert', {
            templateUrl: 'views/view_page_realisations.html',
            controller: 'PageRealisationsCtrl',
            controllerAs: 'realisations/feu-vert'
        })
        .when('/realisations/courriel-physioextra', {
            templateUrl: 'views/view_page_realisations.html',
            controller: 'PageRealisationsCtrl',
            controllerAs: 'realisations/courriel-physioextra'
        })
        .when('/realisations/artfotovision', {
            templateUrl: 'views/view_page_realisations.html',
            controller: 'PageRealisationsCtrl',
            controllerAs: 'realisations/artfotovision'
        })

        .when('/engagez-moi', {
            templateUrl: 'views/view_page3.html',
            controller: 'Page3Ctrl',
            controllerAs: 'engagez-moi'
        })
        
        .otherwise({
            redirectTo: '/'
        });
}]);

//Setting HTML5 Location Mode
app.config([ '$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);