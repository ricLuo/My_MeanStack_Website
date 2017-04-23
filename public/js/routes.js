angular.module("httpRoutes", ["ngRoute"])
.config(function($routeProvider,$locationProvider){
  $routeProvider
    .when("/",{
      // templateUrl:"/public/view/index.html",
      // controller:"thCtrl"
    })
    .when("/login",{
      templateUrl:"/public/view/login.html",
      controller:"loginController"
    })
    // .when("/about",{
    //   templateUrl:"about.html",
    //   controller:""
    // })
    .otherwise({
      redirectTo:"/"
    });
    $locationProvider.html5Mode(true);
});
