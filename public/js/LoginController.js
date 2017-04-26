angular.module('login')

  .controller('loginController', ['$rootScope','$scope', '$window','$timeout', 'AuthenticationService', 'FlashService', function($rootScope, $scope, $window, $timeout, AuthenticationService, FlashService){
      $scope.loading = false;
      // initController();

      $scope.landingUrl = "http://" + $window.location.host;

      $scope.cancel = function(){
          // var landingUrl = "http://" + $window.location.host + "/";
          $window.location.href = "/";
      };

      $scope.login = function(){

          $scope.loading = true;
          AuthenticationService.Login($scope.username, $scope.password, function(res){
            $timeout(function(){
              console.log("sd");
            }, 300);
              if(res.success){
                console.log(res.data);

                $timeout(function(){
                  $scope.loading = false;
                  FlashService.Success('Login Successfully');
                  // $window.location='/';
                },1800);
                $timeout(function(){
                  $window.location='/';
                },2800);


                AuthenticationService.setCredentials($scope.username, $scope.password);

              }
              else if(res.data==null){
                console.log(res);
                $scope.loading = false;
                FlashService.Error("username or password is incorrect");
              }
              else {
                $scope.loading = false;
                FlashService.Error("System error, please visit later");
              }
          });


      };

      // function initController(){
      //   AuthenticationService.ClearCredentials();
      // }
  }]);

    // loginController.$inject('$location', 'AuthenticationService', 'FlashService');

    // function loginController($scope){
    //   $scope.
    // }
