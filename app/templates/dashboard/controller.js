'use strict';
angular.module('app.core').controller('DashboardController', function($scope, Page) {
    Page.title        	= "Dashboard";
    Page.description  	= "Une Page Dashboard avec AngularJS";
	$scope.page 		= Page;
});
