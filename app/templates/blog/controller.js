'use strict';
angular.module('app.core').controller('BlogController', function($scope, Page) {
    Page.title        	= "Blog";
    Page.description  	= "Une Page De blog avec AngularJS";
    $scope.page 		= Page;
});
