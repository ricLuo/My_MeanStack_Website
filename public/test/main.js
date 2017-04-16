angular.module('main',[])
.controller('MainController', ['$scope', '$http', function($scope, $http){

    $scope.formData = {};
    $scope.loading = true;

    $http.get('/api/todos')
      .success(function(data){
        $scope.todos = data;
        console.log(data);
        $scope.loading = false;
      })
      .error(function(data){
        console.log('Error '+data);
      }
    );

    $scope.createTodo = function(){
      if($scope.formData.text != undefined){
        $scope.loading = true;

      $http.post('/api/todos', $scope.formData)
        .success(function(data){
          $scope.formData = {};
          $scope.loading = false;
          $scope.todos = data;
          console.log(data);
        })
        .error(function(data){
          console.log('Error '+data);
        });
      }
    };

    // $http.get(url, config).then(successCallback, errorCallback)
    // $http.post('url', data, config).then(successCallback, errorCallback)
    // config optional

    // var successCallback = function(response){
    // }

    $scope.deleteTodo = function(id){
      $scope.loading = true;

      $http.delete('/api/todos/'+id)
        .success(function(data){
          $scope.formData = {};
          $scope.todos = data;
          console.log(data);
        })
        .error(function(data){
          console.log('Error '+data);
        });
    };
  }

]);
