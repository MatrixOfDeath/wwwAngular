'use strict';
angular.module('app.routes', ['ngRoute']).config(function($routeProvider,$locationProvider){
	$locationProvider.html5Mode(true);
	$routeProvider.when('/', {
        templateUrl: 'app/templates/home/index.html',
        controller: 'HomeController'
    }).when('/blog', {
        templateUrl: 'app/templates/blog/index.html',
        controller: 'BlogController'
    }).when('/dashboard', {
        templateUrl: 'app/templates/dashboard/index.html',
        controller: 'DashboardController'
    }).when('/contact', {
        templateUrl: 'app/templates/contact/index.html',
        controller: 'ContactController'
    }).when('/login', {
        templateUrl: 'app/templates/login/index.html',
        controller: 'LoginController'
    }).when('/logout', {
        template: '',
        controller: 'LogoutController'
    }).when('/register', {
        templateUrl: 'app/templates/register/index.html',
        controller: 'RegisterController'
    }).when('/error/:error', {
        templateUrl: 'app/templates/error/index.html',
        controller: 'ErrorController'
    }).otherwise({
        redirectTo: '/error/404'
    });
}).directive('header', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/templates-parts/header/index.html'
    }
}).directive('footer', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/templates-parts/footer/index.html'
    }
});