app.controller('PageRealisationsCtrl', ['$scope', '$route', '$routeParams', '$location', function($scope, $route, $routeParams, $location) {

    $scope.pageClass = 'page-realisations';

    if ( $location.$$path == '/realisations/barrette-structural' ) {
      $scope.info = {
          'title': 'Barrette Structural',
          'desc': '',
          'imagePath': 'img/realisations/barrette-structural.jpg',
          'url': '#'
      };
    } else if ( $location.$$path == '/realisations/open-joist-triforce' ) {
      $scope.info = {
          'title': 'Open Joist Triforce',
          'desc': '',
          'imagePath': 'img/realisations/open-joist-triforce.jpg',
          'url': '#'
      };
    }

}]);