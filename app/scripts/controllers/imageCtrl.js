'use Strict'

angular.module('yomanApp')
	   .controller('imageCtrl',['$scope', '$http','addService', mainFunction]);



	   function mainFunction($scope,$http,addService)
	   {
		   	$scope.imageUpload = function(){
		   		console.log($scope.user.imageFile);
		   		console.log($scope.user.signFile);
		   		console.log('inside of ImageUpload()');	
		   		addService.addPerson(); 
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
