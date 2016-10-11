'use strict';

angular.module('yomanApp')
	   .controller('loginCtrl',['$scope','$http','$window','$location',loginFunction]);

		function loginFunction($scope,$http,$window,$location){
			var vm = this;
			
			$scope.loginFuctionUser = function() {
				vm.dataLoading = true;
			   $http.post('http://localhost:8080/persons/userListbyNameOneByOne', {email: $scope.user.email, password: $scope.user.password})
				   	.success(function (data, status, headers, config) {
				   		console.log(status)	; 
				   		alert("Login Succesfull");
				   		$window.location.href = '/views/Welcome.html';
				   		//$window.location.href = 'https://www.google.co.in/?gfe_rd=cr&ei=Oas9V671OMqL8Qf804ewAQ&gws_rd=ssl';
				   		//$location.path('https://www.google.co.in/?gfe_rd=cr&ei=Oas9V671OMqL8Qf804ewAQ&gws_rd=ssl');// redirect to google

	 					  })
	     			.error(function (data, status, headers, config) {
						console.log(status);
						vm.dataLoading = false;
						alert("Wrong userName and Password");

						  });
			};
    };








    	   	

		
	