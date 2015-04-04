'use strict';

app.controller('NavController', function($scope, $location, Auth, toaster) {

	$scope.signedIn = Auth.signedIn;
	$scope.currentUser = Auth.user;

	$scope.logout = function() {
		Auth.logout();
		toaster.pop('sucess', 'Logged out successfully!');
		console.log('Logged out!');
		$location.path('/');
	};


})