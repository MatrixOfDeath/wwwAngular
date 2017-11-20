'use strict';
angular.module('app.core').controller('LoginController', function($scope, $http, $location, $rootScope, $timeout, Page, User) {
    if (User.isConnected){ $location.path('/'); }

    Page.title			 = "Login";
    Page.description  	 = "Une Page De login avec AngularJS";
    $scope.page 		 = Page;

    $scope.form 		 = {
    	success : function(response){
    		User.loadFromResponse(response.data);
			if(User.isConnected){
				
				$location.path('/dashboard');
				$timeout(function(){
					$rootScope.$broadcast('changeHeader');
				},0);
				
			}
    	},
    	error : function(){},
    	data : {
	    	email    : "aaa@aaa.com",
	    	password : "aaaa"
    	}
    };

}).directive('form', function($http,$location) {
	return function( $scope, element, attrs ) {
		element.bind('submit',function(e){
			e.preventDefault();

			$http({
				method 	: e.target.getAttribute("method") || "get",
				url 	: e.target.getAttribute("action") || location.pathname,
				headers : { 'X-Requested-With' : 'XMLHttpRequest' },
				data    : $scope.form.data
			}).then($scope.form.success ,$scope.form.error );

		});
	}
});
