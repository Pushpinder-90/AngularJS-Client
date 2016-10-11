
  angular.module('yomanApp')
    .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html', //main.html
        controller: 'MainCtrl'
      })
      .when('/tasksList', {
        templateUrl: 'views/tasksList.html',
        controller: 'taskListCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'registerCtrl'
      })
      .when('/personList',{
        templateUrl: 'views/personList.html',
        controller: 'personList'
      })
      .when('/uploadImage',{
        templateUrl: 'views/ImageUpload.html',
        controller: 'imageCtrl'
      })
      .when('/loginUser',{
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      })
      .when('/welcomeUser',{
        templateUrl: 'views/welcome.html',
        controller: 'welcomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


    