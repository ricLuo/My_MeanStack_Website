angular.module('app')
  .factory('FlashService', FlashService);

  FlashService.$inject = ['$rootScope', 'Flash'];

  function FlashService($rootScope,Flash){
      var service = {};

      service.Success = Success;
      service.Error = Error;
      service.Warning = Warning;
      service.Info = Info;

      initService($rootScope);
      return service;


  function initService(){
    $rootScope.$on('$locationChangeStart', function(){
      clearFlashMessage();
    });
    function clearFlashMessage(){
      var flash = $rootScope.flash;
      if(flash){
        if(!flash.keepAfterLocationChange){
          delete $rootScope.flash;
        }
        else {
          flash.keepAfterLocationChange = false;
        }
      }
    }
  }

  // $scope.successAlert = function () {
  //     var message = '<strong>Well done!</strong> You successfully read this important alert message.';
  //     var id = Flash.create('success', message, 5000, {}, true);
  // }

  function Success(message, keepAfterLocationChange){
    $rootScope.flash = {
      message: message,
      type: 'success',
      keepAfterLocationChange: keepAfterLocationChange
    };
    Flash.create($rootScope.flash.type, message, 5000, {}, true);
  }

  function Error(message, keepAfterLocationChange){
    $rootScope.flash = {
      message: message,
      type: 'danger',
      keepAfterLocationChange: keepAfterLocationChange
    };
    Flash.create($rootScope.flash.type, message, 5000, {}, true);
  }

  function Info(message, keepAfterLocationChange){
    $rootScope.flash = {
      message: message,
      type: 'info',
      keepAfterLocationChange: keepAfterLocationChange
    };
    Flash.create($rootScope.flash.type, message, 5000, {}, true);
  }

  function Warning(message, keepAfterLocationChange){
    $rootScope.flash = {
      message: message,
      type: 'warning',
      keepAfterLocationChange: keepAfterLocationChange
    };
    Flash.create($rootScope.flash.type, message, 5000, {}, true);
  }

  // type:
  //     success
  //     info
  //     warning
  //     danger

}
