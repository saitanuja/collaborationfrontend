app.controller('RegisterController', [ '$scope', '$http', '$rootScope', '$cookieStore',
		function($scope, $http, $rootScope, $cookieStore) {
	var BASE_URL = 'http://localhost:8080/CollaborationBackend/';


			$scope.submit = function() {

				$scope.users = {

					username : $scope.username,
					mail : $scope.mail,
					password : $scope.password,
					
				}
				$http({
					method : 'POST',
					url : BASE_URL + '/Register',
					data : $scope.users
				}).success(function(data, status, headers, config) {
					$scope.username = '';
					$scope.mail = '';
					$scope.password = '';
					
				}).error(function(data, status, headers, config) {
					alert("error");
				});
			};
			
			
		} ]);