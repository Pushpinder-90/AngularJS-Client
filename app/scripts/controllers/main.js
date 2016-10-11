'use strict';
//var yomanApp = angular.module('yomanApp');

  /*yomanApp.controller('MainCtrl', function ($scope) {
   		 $scope.todos = [
							"Developing Doc tool",
							"CS- internal Meeting ",
							"Demo on documentation tool",
							"Tea time"
    					];

    	$scope.addTodo = function(){
    		$scope.todos.push($scope.todo);
    		$scope.todo = '';
    	};

  	});*/




 angular.module('yomanApp')
        .controller('MainCtrl',['$scope','$http','$log','addService' ,addTasksToService]);

          function addTasksToService($scope,$http,$log,addService){
            $log.info("task Controller");
            $scope.tasks = [];

                
              //adding tasks to db
              $scope.addTask = function()
               {
                $log.info("Inside of addTask() ");
                console.log($scope.todo);
                //$scope.tasks.push($scope.todo);
                //$scope.todo = '';
                addService.addTasksService({task : $scope.todo})
                          .then(function(response){
                              if(response.success){
                                console.log("Task is added");
                              }else{
                                console.log("Task is Not added");
                              }
                         });           

                }

                // getting tasks from db
              $scope.getTaskList = function()
                {
                  console.log('Inside of getTaskList()');
                  addService.getTasksService()
                              .then(function(response){
                                console.log("Result is -> "+response)
                                $scope.tasks.push(response.data);
                                console.log($scope.tasks)
                                //$scope.tasks = response;
                             });
                } 
          }
