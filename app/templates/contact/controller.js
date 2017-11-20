'use strict';
angular.module('app.core').controller('ContactController', function($scope, Page) {
    Page.title        	= "Contact";
    Page.description  	= "Une Page De contact avec AngularJS";
    $scope.page 		= Page;
});
