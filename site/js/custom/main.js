app.directive('animateOnLoad',['$animateCss', function($animateCss) {
	return {
		'link': function(scope, element) {
				$animateCss(element, {
					'event': 'enter',
					structural: true,
					from: { 'opacity': 0 },
		            to: { 'opacity': 1 },
		            delay: 0.5
				}).start();
		}
	};
}]);

app.animation('.ng-enter', function () {
  	return {
	    enter: function() {
	    	var scrollStep = -window.scrollY / (400 / 15),
		    scrollInterval = setInterval(function(){
	        if ( window.scrollY != 0 ) {
	            window.scrollBy( 0, scrollStep );
	        }
	        else clearInterval(scrollInterval); 
		    },15);
		}
	};
});



