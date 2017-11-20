'use strict';
angular.module('app.core').controller('LogoutController', function($location, $rootScope, $timeout , User) {
	User.flush();
	$location.path('/');
	$timeout(function(){
		$rootScope.$broadcast('changeHeader');
	},0);
});
