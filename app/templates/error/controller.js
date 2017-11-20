'use strict';
angular.module('app.core').controller('ErrorController', function($scope, Page) {
    Page.title        	= "Error";
    Page.description  	= "Une Page D'erreur avec AngularJS";
	$scope.page 		= Page;
});
