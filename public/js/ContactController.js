var contactModule = angular.module('Contact', []);

contactModule.controller('contactController', ['$scope','$http', '$location', '$window', function($scope, $http, $location, $window){
    // $scope.forms = [
    //   {type:'text', name: 'userName', placeholder:'Your Name *', val:'Please enter your name.'},
    //   {type:'email', name:'email', placeholder:'Your email *', val:'Please enter your email address.'},
    //   {type:'tel', name:'phone', placeholder:'Your Phone *', val:'Please enter your phone number.'}
    //   ];

    // $scope.userName = {};
    // $scope.email = {};
    // $scope.phone = {};

    $scope.login = function(){
      var landingUrl = "http://" + $window.location.host + "/login";
      // alert(landingUrl);
      $window.location.href = landingUrl;
    };

    $scope.listMessage = {};
    $scope.message = {
      userName:"",
      email:"",
      phone:"",
      text:""
    };

    $http.get("api/message")
      .success(function(data){
        $scope.listMessage=data;
        console.log(data);
      });

    $scope.sendMessage = function(){
      $http.post('/api/message', $scope.message)
        .success(function(data){
            $scope.listMessage = data;
            $scope.message.userName = '';
            $scope.message.email = '';
            $scope.message.phone = '';
            $scope.message.text = '';
            console.log(data);
        })
        .error(function(err, data){
          console.log(err);
          console.log(data);
        });
    };

    $scope.deleteMessage = function(id){
        $http.delete('/api/message/'+id)
            .success(function(data){
                $scope.listMessage = data;
            })
            .error(function(err, data){
              console.log(err);
              console.log(data);
            });
    }

    $scope.hoverIn = function(){
        this.hoverEdit = true;
    };

    $scope.hoverOut = function(){
        this.hoverEdit = false;
    };

}]);
