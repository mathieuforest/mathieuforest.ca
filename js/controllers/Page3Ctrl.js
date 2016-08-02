app.controller('Page3Ctrl', ['$scope', '$http', '$httpParamSerializerJQLike', function($scope, $http, $httpParamSerializerJQLike) {
    $scope.text = {
        'title': 'Engagez-moi',
        'desc': 'Contactez-moi pour discuter vos projets.'
    },
    $scope.pageClass = 'page-contact';

    $scope.formData = {};
    
    $scope.processForm = function() {
      $http({
        method  : 'POST',
        url     : 'process.php',
        data    : $httpParamSerializerJQLike($scope.formData),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
      }).success(function(data) {
      
      if (!data.success) {
        // if not successful, bind errors to error variables
        console.log(data.errors);
        $scope.errorName = data.errors.name;
        $scope.errorEmail = data.errors.email;
        $scope.errorSubject = data.errors.subject;
        $scope.errorMessage = data.errors.message;
      } else {
        // if successful, bind success message to message
        $scope.message = data.message;
        $scope.formData.name = '';
        $scope.formData.email = '';
        $scope.formData.subject = '';
        $scope.formData.message = '';
        var myContactForm = angular.element( document.querySelector( '.contact-form' ) );
        myContactForm.addClass('sent');
      }
    });
  };

}]);
