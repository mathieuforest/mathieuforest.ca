app.controller('Page3Ctrl', ['$scope', '$http', '$timeout', 'promiseTracker', function($scope, $http, $timeout, promiseTracker) {
    $scope.text = {
        'title': 'Engagez-moi',
        'desc': 'Contactez-moi pour discuter vos projets.'
    },
    $scope.pageClass = 'page-contact';

    // Inititate the promise tracker to track form submissions.
    $scope.progress = promiseTracker();

    // Form submit handler.
    $scope.submit = function(form) {
      // Trigger validation flag.
      $scope.submitted = true;

      // If form is invalid, return and let AngularJS show validation errors.
      if (form.$invalid) {
        return;
      }

      // Default values for the request.
      var config = {
        params : {
          'callback' : 'JSON_CALLBACK',
          'name' : $scope.name,
          'email' : $scope.email,
          'subject' : $scope.subject,
          'comments' : $scope.comments
        },
      };

      // Perform JSONP request.
      var $promise = $http.jsonp('response.json', config)
        .success(function(data, status, headers, config) {
          if (data.status == 'OK') {
            $scope.name = null;
            $scope.email = null;
            $scope.subject = null;
            $scope.comments = null;
            $scope.messages = 'Votre message a été envoyé!';
            $scope.submitted = false;
          } else {
            $scope.messages = 'Oops , nous avons reçu votre demande , mais il y avait une erreur.';
            $log.error(data);
          }
        })
        .error(function(data, status, headers, config) {
          $scope.progress = data;
          $scope.messages = 'Il y a une erreur de réseau. Réessayez plus tard.';
          $log.error(data);
        })
        .finally(function() {
          // Hide status messages after three seconds.
          $timeout(function() {
            $scope.messages = null;
          }, 3000);
        });

      // Track the request and show its progress to the user.
      $scope.progress.addPromise($promise);
    };

    $scope.$on("$routeChangeSuccess", function(){
        window.scrollTo(0,0);
    });

}]);
