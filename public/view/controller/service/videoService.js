angular.module('video', ['youtube-embed'])

  .controller('videoController', ['$scope',function($scope){
      $scope.videoUrl = 'https://www.youtube.com/watch?v=8i7pZ_i1Ijs';

  }]);
