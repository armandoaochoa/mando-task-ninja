'use strict';

app.controller('AuthController', function($scope, $location, Auth, toaster) {

	//redirect signed in users away from register and login
	if(Auth.signedIn()) {
		$location.path('/');
	}

	//difference between this and Auth.register is that this will
	//take the success/failure of that function and give a result
	//to the user
	$scope.register = function(user) {
		Auth.register(user).then(function() {
			toaster.pop('success', 'Registered successfully!');
			console.log('Registered successfully!');
			$location.path('/');
		}, function(err) {
			toaster.pop('error', 'Oops, something went wrong!');
			console.log('Error registering...');
		});
	};

	$scope.login = function(user) {
		Auth.login(user)
			.then(function() {
				toaster.pop('success', 'Logged in successfully!');
				console.log('Logged in successfully!');
				$location.path('/');
			}, function(err) {
				toaster.pop('error', 'Oops, something went wrong!');
				console.log('Error logging in...');
			});
	};

	$scope.changePassword = function(user) {
		Auth.changePassword(user)
			.then(function() {
				//Reset the form
				$scope.user.email = '';
				$scope.user.oldPass = '';
				$scope.user.newPass = '';

				toaster.pop('success', 'Password changed successfully!');
				console.log('Password changed successfully!');
			}, function(err) {
				toaster.pop('error', 'Oops, something went wrong!');
				console.log('Error...');
			});
	};
});