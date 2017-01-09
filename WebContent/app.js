var app = angular.module("myApp", [ "ngRoute", "ngCookies", "blogapp" ]).run(
		run);
app.config(function($routeProvider, $locationProvider) {

	$routeProvider.when("/home", {
		templateUrl : "Home.html",
		controller : 'LoginController',
		controllerAs : 'vm'
	})
	.when("/register", {
		templateUrl : "Users/register.html",
		controller : "userctrl"
	});
	console.log("route");
});
run.$inject = [ '$rootScope', '$location', '$cookieStore', '$http' ];
function run($rootScope, $location, $cookieStore, $http) {
	// keep user logged in after page refresh
	$rootScope.globals = $cookieStore.get('globals') || {};
	$rootScope.currentuser = $cookieStore.get('currentuser') || {};
	if ($rootScope.globals.currentUser) {
		$http.defaults.headers.common['Authorization'] = 'Basic '
				+ $rootScope.globals.currentUser.authdata; // jshint
		// ignore:line
	}

	$rootScope.$on('$locationChangeStart', function(event, next, current) {
		// redirect to login page if not logged in and trying to access a
		// restricted page
		var restrictedPage = $.inArray($location.path(), [ 
				'/register', '/home' ]) === -1;
		var loggedIn = $rootScope.globals.currentUser;
		if (restrictedPage && !loggedIn) {
			$location.path('/');
		}
	});
}