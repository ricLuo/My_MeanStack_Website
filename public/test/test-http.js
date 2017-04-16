angular.module('testhttp',[])
  .controller('thCtrl', ['$scope','$http', function($scope, $http){
      $scope.text={};
      $http.get("api/testhttp")
        .success(function(data){
          $scope.displays=data;
          console.log(data);
        });

      $scope.create = function(){
        $http.post('/api/testhttp', $scope.text)
          .success(function(data){
            $scope.text={};
            $scope.displays = data;
          });
      };
    }]);
