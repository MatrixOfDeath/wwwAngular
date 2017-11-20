'use strict';
angular.module('app.core').controller('HomeController', function($scope, Page, User) {
    Page.title        	= "Home";
    Page.description  	= "Une Page D'acceuil avec AngularJS";
    $scope.page 		= Page;
});
