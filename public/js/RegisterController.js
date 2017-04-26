angular.module('register')

  .controller('RegisterController', RegisterController);

  // RegisterController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];

  // function RegisterController(UserService, $location, $rootScope, FlashService){
  function RegisterController($rootScope, $scope, FlashService, $timeout, $window, UserService, $location, $log){
      // var vm = this;


      $scope.dataLoading = false;

      // $scope.successAlert = function () {
      //     var message = '<strong>Well done!</strong> You successfully read this important alert message.';
      //     var id = Flash.create('success', message, 5000, {}, true);
      //     $log.log('called successAlert');
      // }

      // FlashService.Info('Registration Successfull!', true);
      //
      // FlashService.Warning('Registration Failed!', true);

      $scope.cancel = function(){
          // var landingUrl = "http://" + $window.location.host + "/";
          $window.location.href = "/";
      };

      $scope.register = function(){
        $scope.dataLoading = true;



        UserService.Create({username:$scope.username, password: $scope.password})


          .then(function(res){
            $log.log(res.status);
            if(res.status==200){
              FlashService.Clear();

              $log.log(res.data);
              $log.log(res);

              // $location.path('/api/users');

              $timeout(function(){
                $scope.dataLoading = false;
                FlashService.Success('Registration Successfull!', true);
              },1800);

              $timeout(function(){
                $window.location='/login';

              },2800);
              //add loading sign

              $scope.username = '';
              $scope.password = '';
              // $log.log($rootScope.flash.type);
            }
            else {
              FlashService.Error(res.data.error);
              $scope.dataLoading = false;
              // vm.dataLoading = false;
              console.log(res);
            }

          })
          .catch(function(err){
            FlashService.Error(err);
            $scope.dataLoading = false;
          });
      }
  }
