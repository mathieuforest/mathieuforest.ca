app.controller('PageRealisationsCtrl', ['$scope', '$route', '$routeParams', '$location', function($scope, $route, $routeParams, $location) {

  $scope.pageClass = 'page-realisations';

  if ( $location.$$path == '/realisations/barrette-structural' ) {
    $scope.info = {
        'title': 'Barrette Structural',
        'desc': 'Site créé avec Wordpress.',
        'imagePath': 'img/realisations/barrette-structural.jpg',
        'url': ''
    };
  } else if ( $location.$$path == '/realisations/open-joist-triforce' ) {
    $scope.info = {
        'title': 'Open Joist Triforce',
        'desc': '',
        'imagePath': 'img/realisations/open-joist-triforce.jpg',
        'url': ''
    };
  } else if ( $location.$$path == '/realisations/physioextra' ) {
    $scope.info = {
        'title': 'PhysioExtra',
        'desc': '',
        'imagePath': 'img/realisations/physioextra.jpg',
        'url': ''
    };
  } else if ( $location.$$path == '/realisations/irriglobe' ) {
    $scope.info = {
        'title': 'Irriglobe',
        'desc': '',
        'imagePath': 'img/realisations/irriglobe.jpg',
        'url': 'http://irriglobe.com'
    };
  } else if ( $location.$$path == '/realisations/feu-vert' ) {
    $scope.info = {
        'title': 'Feu-vert',
        'desc': '',
        'imagePath': 'img/realisations/feu-vert.jpg',
        'url': 'http://feuvert.ca'
    };
  } else if ( $location.$$path == '/realisations/courriel-physioextra' ) {
    $scope.info = {
        'title': 'Courriel Physioextra',
        'desc': '',
        'imagePath': 'img/realisations/courriel-physioextra.gif',
        'url': ''
    };
  } else if ( $location.$$path == '/realisations/artfotovision' ) {
    $scope.info = {
        'title': 'Artfotovision',
        'desc': '',
        'imagePath': 'img/realisations/artfotovision.jpg',
        'url': 'http://artfotovision.com/'
    };
  }
}]);