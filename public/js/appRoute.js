angular.module("appRoutes", ["ngRoutes"])
.config(function($routeProvider，$locationProvider){
  $routeProvider
    .when("/",{
      templateUrl:"index_test.html";
      controller:"MainController";
    })
    .when("/home",{
      templateUrl:"home.html";
      controller:"";
    })
    .when("/about",{
      templateUrl:"about.html";
      controller:"";
    })
    .otherwise({
      redirectTo:"/";
      controller:"";
    })
    $locationProvider.html5Mode(true);
});
