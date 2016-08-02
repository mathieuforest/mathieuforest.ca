app.controller('PageRealisationsCtrl', ['$scope', '$route', '$routeParams', '$location', function($scope, $route, $routeParams, $location) {

  $scope.pageClass = "page-realisations";

  if ( $location.$$path == "/realisations/barrette-structural" ) {
    $scope.info = {
        "title": "Barrette Structural",
        "desc": "Développement Frontend et backend pour la refonte du site web de l'entreprise.",
        "tech": [{techName: "Wordpress", techLink: "https://fr.wordpress.com/"}, {techName: "Boostrap", techLink: "http://getbootstrap.com/"}, {techName: "Extensions Wordress personnalisée", techLink: "https://github.com/mathieuforest/"}],
        "imagePath": "img/realisations/barrette-structural.jpg",
        "linkText": "Voir le site web",
        "url": "http://google.com barrette structural"
    };
  } else if ( $location.$$path == "/realisations/open-joist-triforce" ) {
    $scope.info = {
        "title": "Open Joist Triforce",
        "desc": "Développement Frontend et backend pour la refonte du site web de l'entreprise.",
        "tech": [{techName: "Wordpress", techLink: "https://fr.wordpress.com/"}, {techName: "Boostrap", techLink: "http://getbootstrap.com/"}, {techName: "Extensions Wordress personnalisée", techLink: "https://github.com/mathieuforest/"}],
        "imagePath": "img/realisations/open-joist-triforce.jpg",
        "linkText": "Voir le site web",
        "url": "http://google.com"
    };
  } else if ( $location.$$path == "/realisations/physioextra" ) {
    $scope.info = {
        "title": "PhysioExtra",
        "desc": "Développement Frontend et backend pour la refonte du site web de l'entreprise.",
        "tech":[{techName: "Wordpress", techLink: "https://fr.wordpress.com/"},
        "imagePath": "img/realisations/physioextra.jpg",
        "linkText": "",
        "url": ""
    };
  } else if ( $location.$$path == "/realisations/irriglobe" ) {
    $scope.info = {
        "title": "Irriglobe",
        "desc": "",
        "tech":"",
        "imagePath": "img/realisations/irriglobe.jpg",
        "linkText": "",
        "url": "http://irriglobe.com"
    };
  } else if ( $location.$$path == "/realisations/feu-vert" ) {
    $scope.info = {
        "title": "Feu-vert",
        "desc": "",
        "tech":"",
        "imagePath": "img/realisations/feu-vert.jpg",
        "linkText": "",
        "url": "http://feuvert.ca"
    };
  } else if ( $location.$$path == "/realisations/courriel-physioextra" ) {
    $scope.info = {
        "title": "Courriel Physioextra",
        "desc": "",
        "tech":"",
        "imagePath": "img/realisations/courriel-physioextra.gif",
        "linkText": "",
        "url": ""
    };
  } else if ( $location.$$path == "/realisations/artfotovision" ) {
    $scope.info = {
        "title": "Artfotovision",
        "desc": "",
        "tech":"",
        "imagePath": "img/realisations/artfotovision.jpg",
        "linkText": "",
        "url": "http://artfotovision.com/"
    };
  }
}]);