app.controller('LoginController', LoginController);

LoginController.$inject = [ '$location', 'AuthenticationService', '$rootScope' ];

function LoginController($location, AuthenticationService, $rootScope) {
	console.log("login controller")
	var vm = this;

	vm.login = login;
	vm.logout = logout;

	function login() {

		console.log("login func")
		AuthenticationService.Login(vm.username, vm.password,
				function(response) {
					if (response.success) {
						console.log("setcred")

						AuthenticationService.SetCredentials(vm.username,
								vm.password);
						$location.path('/');
						$rootScope.islogged = true;

					} else {
						console.log("error")
						alert("error")
					}
				});
	}
	;
	function logout() {
		console.log("logout")
		AuthenticationService.Logout(function(response) {
			if (response.success) {
				AuthenticationService.ClearCredentials();
				$location.path('/');
				$rootScope.islogged = false;

			} else {
				alert("error")
			}
		})
	}
}