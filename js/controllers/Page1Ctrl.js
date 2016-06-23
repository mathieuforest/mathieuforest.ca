app.controller('Page1Ctrl', ['$scope', function($scope) {
	
    $scope.text = {
        'title': 'Développement Front-End',
        'desc': 'HTML - CSS - JavaScript - CMS - Optimisation',
        'intro': 'Cherchant toujours à innover, j’adore développer et concevoir des outils de communications Web et numérique. Je reste toujours à l’affût de tout ce qui est à la fine pointe afin d’améliorer mes habiletés d’intégration. Mon but premier est de fournir la meilleure expérience en matière de UI et UX tout en respectant les standards en matière de protocole Web.'
    };

    $scope.pageClass = 'page-home';

    $scope.items = [
        {className: "fa fa-html5 fa-5x", url: "http://www.w3schools.com/html/html5_intro.asp", linkTitle: "HTML5"},
        {className: "fa fa-css3 fa-5x", url: "http://www.w3schools.com/css/css3_intro.asp", linkTitle: "CSS3"},
        {className: "fa icon-javascript-alt fa-5x", url: "http://www.w3schools.com/js/", linkTitle: "Javascript"},
        {className: "fa icon-wordpress fa-5x", url: "https://fr.wordpress.com/", linkTitle: "Wordpress"},
        {className: "fa fa-git fa-5x", url: "https://github.com/mathieuforest", linkTitle: "GitHub"}
    ];

    $scope.$on("$routeChangeSuccess", function(){
     window.scrollTo(0,0);
    });


}]);