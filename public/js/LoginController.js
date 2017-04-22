angular.module('app')

  .controller('loginController', ['$scope', 'AuthenticationService', 'FlashService', function($scope, AuthenticationService, FlashService){

      // initController();

      $scope.login = function(){
        AuthenticationService.Login($scope.username, $scope.password, function(res){
          if(res.success){
            FlashService.Success('Login Successfully');
          }
          else {
            FlashService.Error("username or password is incorrect");
          }
        });
      }

      // function initController(){
      //   AuthenticationService.ClearCredentials();
      // }
  }]);

    // loginController.$inject('$location', 'AuthenticationService', 'FlashService');

    // function loginController($scope){
    //   $scope.
    // }
