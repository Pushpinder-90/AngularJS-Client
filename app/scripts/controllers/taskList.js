'use strict';

	 angular.module('yomanApp')
			.controller("taskListCtrl", ['$scope','$http',getTaskList]);


			function getTaskList($scope,$http) {
				$http.get('http://localhost:8080/tasks/taskList')
					 .success(function(response){
				$scope.tasks = response;// records here is the array from the database.json file
				});
			};


