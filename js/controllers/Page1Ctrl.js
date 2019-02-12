app.controller('Page1Ctrl', ['$scope', function($scope) {
	
    $scope.text = {
        'title': 'Développement Front-End',
        'desc': 'HTML - CSS - JavaScript - ReactJS - CMS - Optimisation - Ecommerce',
        'intro': 'Cherchant toujours à innover, j’adore développer et concevoir des outils de communications Web et numérique. Je reste toujours à l’affût de tout ce qui est à la fine pointe afin d’améliorer mes habiletés. Mon but premier est de fournir la meilleure expérience en matière de UI et UX tout en respectant les standards en matière de protocole Web.'
    };

    $scope.pageClass = 'page-home';

    $scope.items = [
        {className: "fab fa-html5 fa-5x", url: "http://www.w3schools.com/html/html5_intro.asp", linkTitle: "HTML5"},
        {className: "fab fa-css3 fa-5x", url: "http://www.w3schools.com/css/css3_intro.asp", linkTitle: "CSS3"},
        {className: "fab fa-js-square fa-5x", url: "http://www.w3schools.com/js/", linkTitle: "Javascript"},
        {className: "fab fa-react fa-5x", url: "https://reactjs.org/", linkTitle: "React"},
        {className: "fab fa-git fa-5x", url: "https://github.com/mathieuforest", linkTitle: "GitHub"},
        {className: "fab fa-wordpress fa-5x", url: "https://wordpress.org", linkTitle: "Wordpress"},
        {className: "fas fa-shopping-bag fa-5x", url: "https://fr.shopify.ca/", linkTitle: "Shopify"}
    ];

}]);