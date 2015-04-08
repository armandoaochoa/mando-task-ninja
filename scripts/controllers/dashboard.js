'use strict';

app.controller('DashboardController', function($scope, Dashboard, Auth) {

	$scope.taskRunner = [];
	$scope.taskPoster = [];

	var uid = Auth.user.uid;

	Dashboard.getTasksForUser(uid).then(function(tasks) {

		for(var i = 0; i < tasks.length; i++) {
			//if true, in one, if not, in the other...
			tasks[i].type? $scope.taskPoster.push(tasks[i]) : $scope.taskRunner.push(tasks[i])
		}

		$scope.numPoster = $scope.taskPoster.length;
		$scope.numRunner = $scope.taskRunner.length;
	});

});