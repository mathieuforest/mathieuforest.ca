var app = angular.module('website', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/view_page1.html',
            controller: 'Page1Ctrl',
            controllerAs: 'bienvenue'
        })
        .when('/bienvenue', {
            templateUrl: 'views/view_page1.html',
            controller: 'Page1Ctrl',
            controllerAs: 'bienvenue'
        })
        .when('/realisations', {
            templateUrl: 'views/view_page2.html',
            controller: 'Page2Ctrl',
            controllerAs: 'realisations'
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
app.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);