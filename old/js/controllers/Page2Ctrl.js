app.controller('Page2Ctrl', ['$scope', function($scope) {

    $scope.text = {
        'title': 'Réalisations',
        'desc': ''
    };

    $scope.pageClass = 'page-realisations';

    $scope.items = [
        {name: 'Barrette Structural', imagePath: 'img/realisations/barrette-structural.jpg', url:'realisations/barrette-structural'},
        {name: 'Open Joist Triforce', imagePath: 'img/realisations/open-joist-triforce.jpg', url:'realisations/open-joist-triforce'},
        {name: 'PhysioExtra', imagePath: 'img/realisations/physioextra.jpg', url:'realisations/physioextra'},
        {name: 'Irriglobe', imagePath: 'img/realisations/irriglobe.jpg', url:'realisations/irriglobe'},
        {name: 'Feu-Vert', imagePath: 'img/realisations/feu-vert.jpg', url:'realisations/feu-vert'},
        {name: 'Courriel Physio-Extra', imagePath: 'img/realisations/courriel-physioextra.gif', url:'realisations/courriel-physioextra'},
        {name: 'Artfotovision', imagePath: 'img/realisations/artfotovision.jpg', url:'realisations/artfotovision'}
    ];

    $scope.$on("$routeChangeSuccess", function(){
     window.scrollTo(0,0);
    });
	
}]);