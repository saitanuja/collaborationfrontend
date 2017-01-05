var app = angular.module("myApp", [ "ngRoute", "ngCookies", "blogapp" ]).run(
		run);
app.config(function($routeProvider, $locationProvider) {

	$routeProvider.when("/", {
		templateUrl : "Login.html",
		controller : 'LoginController',
		
	}).when("/register", {
		templateUrl : "Users/register.html",
		controller : "RegisterController"
	}).when("/login", {
		templateUrl : "Login/Login.html",
		controller : 'LoginController',
		
	});
});
