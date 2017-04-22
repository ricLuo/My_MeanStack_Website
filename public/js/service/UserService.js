// (function{
//   'use strict';

  angular.module('app')
    .factory('UserService', UserService);

  UserService.$inject= ['$http', '$q', '$log'];

  function UserService($http, $q, $log){
    var service = {};

    service.GetCurrent = GetCurrent;
    service.GetAll = GetAll;
    service.GetById = GetById;
    service.GetByUsername = GetByUsername;
    service.Create = Create;
    service.Update = Update;
    service.Delete = Delete;

    return service;

    function GetCurrent(){
      return $http.get('/api/users/current').then(handleSuccess, handleError);
    }

    function GetAll(){
      return $http.get('/api/users').then(handleSuccess, handleError);
    }

    function GetById(_id){
      return $http.get('/api/users/'+_id).then(handleSuccess, handleError);
    }

    function GetByUsername(username){
      return $http.get('/api/users/'+username).then(handleSuccess, handleError);
    }

    function Create(user){
      return $http.post('/api/users', user).then(handleSuccess, handleError);
    }

    function Update(user){
      return $http.put('/api/users/', user._id, user).then(handleSuccess, handleError);
    }

    function Delete(_id){
      return $http.delete('/api/users/'+_id).then(handleSuccess, handleError);
    }

    function handleSuccess(res){
      $log.log('success: ');
      $log.log(res);
      return res;
    }

    function handleError(res){
      $log.log('error ');
      $log.log(res);
      return $q.reject(res.data.error);    //forward to next catch()
      // return res;
    }

  }





// })();
