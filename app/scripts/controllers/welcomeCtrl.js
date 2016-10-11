'use strict';
var app =  angular.module('yomanApp');


app.controller('welcomeCtrl',['$scope','$http','addService',welcomeFunctioon]);

function welcomeFunctioon($scope,$http,addService){
	$scope.uploadFiles = function(){
		console.log('Inside of welcome controller')
		console.log($scope.user.imageFile)
        addService.addPersonImage({imageFile : $scope.imageFile})
        console.log('after addPersonImage()')
	}
};

	
app.directive('fileModel', ['$parse', function ($parse) 
          {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {

                    var model = $parse(attrs.fileModel);
                    var modelSetter = model.assign;
                    
                    element.bind('change', function(){
                        //console.log('inside of link'+model);
                        scope.$apply(function(){
                            modelSetter(scope, element[0].files[0]);
                        });
                    });
                }
            };
          }]);




