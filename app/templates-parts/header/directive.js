'use strict';
angular.module('app').directive('header', function(User, $rootScope) {
    return function($scope, element, attrs) {
    	$scope.$on('changeHeader', function(){
			User.loadFromSave();
			
			if( User.isConnected ){
				angular.element(document.querySelectorAll('.showConnected')).removeClass('hide');
				angular.element(document.querySelectorAll('.showDisConnected')).addClass('hide');
			} else {
				angular.element(document.querySelectorAll('.showConnected')).addClass('hide');
				angular.element(document.querySelectorAll('.showDisConnected')).removeClass('hide');
			}

			angular.element(element[0].querySelectorAll("[href='"+location.pathname+"']")).parent().addClass('active');
		});

		$rootScope.$broadcast('changeHeader');

		element.bind('click', function(e){
			if(e.target.parentNode.nodeName === "LI"){
				angular.element(this.querySelectorAll(".active")).removeClass("active");
				angular.element(e.target).parent().addClass("active");
			}
		});
    }
});