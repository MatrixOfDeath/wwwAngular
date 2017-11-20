'use strict';
angular.module('app.core').controller('RegisterController', function($scope, Page, User) {
    Page.title        	= "Register";
    Page.description  	= "Une Page D'inscription avec AngularJS";
    $scope.page 		= Page;
});
