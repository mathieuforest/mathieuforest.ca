angular.module('website').directive('animateOnLoad',['$animateCss', function($animateCss) {
  return {
    'link': function(scope, element) {
      $animateCss(element, {
          'event': 'enter',
           structural: true
      }).start();
    }
  };
}]);