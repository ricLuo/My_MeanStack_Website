var projectModule = angular.module('Project', []);

projectModule.controller('projController',['$scope', function($scope){
  $scope.projects = [
    {
      name:'Web Application',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
      iconImage:'fa fa-desktop fa-stack-1x fa-inverse',
      url:''
    },
    {
      name:'Game Design',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
      iconImage:'fa fa-laptop fa-stack-1x fa-inverse',
      url:''
    },
    {
      name:'Sentiment Analysis',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
      iconImage:'fa fa-file-word-o fa-stack-1x fa-inverse',
      url:''
    }
  ];
}]);
