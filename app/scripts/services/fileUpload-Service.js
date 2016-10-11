'use strict';

angular.module('yomanApp')
       .service('fileUpload', ['$http', function ($http) {
            this.uploadFileToUrl = function(file, uploadUrl){
                console.log('inside of file upload service');
                var fd = new FormData();
                fd.append('file', file);
                $http.post(uploadUrl, fd, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                })
                .success(function(){
                })
                .error(function(){
                });
            }
        }]);

      //fileUpload.uploadFileToUrl()