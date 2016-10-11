  
  angular.module('yomanApp')
         .service('addService',function($http){

                // for registering persons
                this.addPerson = function(user){
                  console.log(user)
                  $http.post('http://localhost:8080/persons/add',user)
                       .success(function(response){
                        console.log(response)
                        return response;
                        })
                };
                // for adding image of registeD person
                this.addPersonImage = function(user){
                  console.log(user)
                  $http.post('http://localhost:8080/persons/image/{personEmail}',user)
                       .success(function(response){
                        console.log(response)
                        return response;
                        })
                };
                

                // for adding tasks
                this.addTasksService = function(todo){
                  console.log('Inside of addTasksService()')
                  $http.post('http://localhost:8080/tasks/add',todo);
                     /*  .success(function(response){
                        console.log(response)
                       })*/
                };

                //for getting the tasks from db
                this.getTasksService = function(){
                  console.log('inside of getTasksService() ')
                  $http({
                          method  : 'GET',
                          url :'http://localhost:8080/tasks/taskList'
                        }).then(function(response){
                            console.log('inside of getter task list')
                            console.log(response)
                        })
                }

                 // for getting the list of persons added  
                this.getUsers = function(){
                  $http({
                          method:'GET',
                          url : 'http://localhost:8080/persons/userList'
                        }).then(function(response ){
                                console.log('inside of http get');
                                console.log(response);
                                $scope.persons = response;
                                console.log($scope.persons);
                              })
                };
            });
