'use strict';

  var app = angular.module('yomanApp');
         app.controller('registerCtrl',['$scope','$log', 'addService', registerFunction]);
         
          function registerFunction($scope, $log, addService) {
            var vm = this;
            
            /*var file = $scope.myFile;
            var uploadUrl = 'http://www.example.com/images';
            fileUpload.uploadFileToUrl(file, uploadUrl);*/

            $scope.register = function (){
              vm.dataLoading = true;
              $log.info('register controller');
              console.log($scope.user)
              console.log($scope.user.myFile)
              
              $log.info(addService.addPerson($scope.user)); 
                      //   .then(function (response) {
                      //         if (response.success) {
                      //           $log.info($scope.user.firstName);
                      //         } else {
                      //             vm.dataLoading = false;
                      //         }
                      // });
          }
        }

        app.directive('fileModel', ['$parse', function ($parse) 
          {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {

                    var model = $parse(attrs.fileModel);
                    var modelSetter = model.assign;
                    
                    element.bind('change', function(){
                        console.log('inside of link'+model);
                        scope.$apply(function(){
                            modelSetter(scope, element[0].files[0]);
                        });
                    });
                }
            };
          }]);

    