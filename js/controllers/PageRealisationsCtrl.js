app.controller('PageRealisationsCtrl', ['$scope', '$route', '$routeParams', '$location', function($scope, $route, $routeParams, $location) {

  $scope.pageClass = "page-realisations";

  if ( $location.$$path == "/realisations/thyme-maternite" ) {
    $scope.info = {
        "title": "Thyme Maternité",
        "desc": "Développement Front-End et mise-à-jour du site web de la bannière.",
        "tech": [{techName: "Demandware", techLink: "http://www.demandware.com/"}, {techName: "HTML"}, {techName: "SASS"}, {techName: "Bootstrap", techLink: "http://getbootstrap.com/"}, {techName: "Grid960", techLink: "http://960.gs/"}, {techName: "GruntJS", techLink: "http://gruntjs.com/"}, {techName: "Eclipse SVN", techLink: "http://www.eclipse.org/subversive/"}],
        "imagePath": "img/realisations/thyme-maternity.jpg",
        "linkText": "Voir le site web",
        "url": "http://www.thymematernity.com"
    };
  } else if ( $location.$$path == "/realisations/exob2b" ) {
    $scope.info = {
        "title": "Exo B2B",
        "desc": "Développement Front-End et Back-End pour la refonte du site web de l'entreprise.",
        "tech": [{techName: "Wordpress", techLink: "https://fr.wordpress.com/"}, {techName: "Bootstrap", techLink: "http://getbootstrap.com/"}, {techName: "Genesis Framework", techLink: "http://www.studiopress.com/"}, {techName: "Extensions Wordpress personnalisées", techLink: "https://github.com/mathieuforest/"}],
        "imagePath": "img/realisations/exob2b.jpg",
        "linkText": "Voir le site web",
        "url": "http://www.google.com/search?q=ExoB2B"
    };
  } else if ( $location.$$path == "/realisations/barrette-structural" ) {
    $scope.info = {
        "title": "Barrette Structural",
        "desc": "Développement Front-End et Back-End pour la refonte du site web de l'entreprise.",
        "tech": [{techName: "Wordpress", techLink: "https://fr.wordpress.com/"}, {techName: "Bootstrap", techLink: "http://getbootstrap.com/"}, {techName: "Extensions Wordpress personnalisées", techLink: "https://github.com/mathieuforest/"}],
        "imagePath": "img/realisations/barrette-structural.jpg",
        "linkText": "Voir le site web",
        "url": "http://www.google.com/search?q=barrette+structural"
    };
  } else if ( $location.$$path == "/realisations/open-joist-triforce" ) {
    $scope.info = {
        "title": "Open Joist Triforce",
        "desc": "Développement Front-End et Back-End pour la refonte du site web de l'entreprise.",
        "tech": [{techName: "Wordpress", techLink: "https://fr.wordpress.com/"}, {techName: "Bootstrap", techLink: "http://getbootstrap.com/"}, {techName: "Extensions Wordpress personnalisées", techLink: "https://github.com/mathieuforest/"}],
        "imagePath": "img/realisations/open-joist-triforce.jpg",
        "linkText": "Voir le site web",
        "url": "http://www.google.com/search?q=Open+Joist+Triforce"
    };
  } else if ( $location.$$path == "/realisations/physioextra" ) {
    $scope.info = {
        "title": "PhysioExtra",
        "desc": "Développement Front-End et Back-End pour la refonte du site web de l'entreprise.",
        "tech":[{techName: "Wordpress", techLink: "https://fr.wordpress.com/"}, {techName: "Extensions Wordpress personnalisées", techLink: "https://github.com/mathieuforest/"}],
        "imagePath": "img/realisations/physioextra.jpg",
        "linkText": "Voir le site web",
        "url": "http://www.google.com/search?q=PhysioExtra"
    };
  } else if ( $location.$$path == "/realisations/irriglobe" ) {
    $scope.info = {
        "title": "Irriglobe",
        "desc": "Développement Front-End et Back-End pour la refonte du site web de l'entreprise.",
        "tech": [{techName: "Wordpress", techLink: "https://fr.wordpress.com/"}, {techName: "Grid960", techLink: "http://960.gs/"}],
        "imagePath": "img/realisations/irriglobe.jpg",
        "linkText": "Voir le site web",
        "url": "http://irriglobe.com"
    };
  } else if ( $location.$$path == "/realisations/feu-vert" ) {
    $scope.info = {
        "title": "Feu-vert",
        "desc": "Développement Front-End du site web de l'entreprise.",
        "tech": [{techName: "Drupal 7", techLink: "https://www.drupal.org/"}],
        "imagePath": "img/realisations/feu-vert.jpg",
        "linkText": "Voir le site web",
        "url": "http://feuvert.ca"
    };
  } else if ( $location.$$path == "/realisations/courriel-physioextra" ) {
    $scope.info = {
        "title": "Courriel Physioextra",
        "desc": "Développement du gabarit de l'infolettre de l'entreprise.",
        "tech": [{techName: "HTML"}, {techName: "CSS"}],
        "imagePath": "img/realisations/courriel-physioextra.gif",
        "linkText": "Voir le site web",
        "url": "http://www.google.com/search?q=PhysioExtra"
    };
  } else if ( $location.$$path == "/realisations/artfotovision" ) {
    $scope.info = {
        "title": "Artfotovision",
        "desc": "Développement du site web de l'entreprise.",
        "tech": [{techName: "Drupal 7", techLink: "https://www.drupal.org/"}],
        "imagePath": "img/realisations/artfotovision.jpg",
        "linkText": "Voir le site web",
        "url": "http://artfotovision.com/"
    };
  }
}]);