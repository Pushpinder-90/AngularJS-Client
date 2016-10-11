'use strict';

	 angular.module('yomanApp')
			.controller('personList', ['$scope','$http',getRegisteredUsers]);


			function getRegisteredUsers($scope,$http) {
				var vm = this;
				
		  		$http.get('http://localhost:8080/persons/userList')
					 .success(function(response){
				$scope.persons = response;// records here is the array from the database.json file
				});
			};


