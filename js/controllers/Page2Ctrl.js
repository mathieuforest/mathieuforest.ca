app.controller('Page2Ctrl', ['$scope', function($scope) {

    $scope.text = {
        'title': 'Réalisations',
        'desc': ''
    };

    $scope.pageClass = 'page-realisations';

    $scope.items = [
        {name: 'Barrette Structural', imagePath: 'img/realisations/barrette-structural.jpg', url:'realisations/barrette-structural'},
        {name: 'Open Joist Triforce', imagePath: 'img/realisations/open-joist-triforce.jpg', url:'realisations/open-joist-triforce'},
        {name: 'PhysioExtra', imagePath: 'img/realisations/physioextra.jpg'},
        {name: 'Irriglobe', imagePath: 'img/realisations/irriglobe-com.jpg'},
        {name: 'Feu-Vert', imagePath: 'img/realisations/feu-vert-ca.jpg'},
        {name: 'Courriel Physio-Extra', imagePath: 'img/realisations/courriel-physioextra.gif'},
        {name: 'Artfotovision', imagePath: 'img/realisations/artfotovision.jpg'}
    ];
	
}]);