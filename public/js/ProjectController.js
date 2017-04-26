var projectModule = angular.module('Project', []);

projectModule.controller('projController',['$scope', function($scope){
  $scope.projects = [
    {
      name:'Web Application',
      description:"Built this website in MVC structure. Dealt with ",
      iconImage:'fa fa-desktop fa-stack-1x fa-inverse',
      urls: [
        {name: 'Fitbit Project',address: 'http://ec2-52-72-72-204.compute-1.amazonaws.com:8080/'},
        {name: 'Java Project',address: 'https://ide.c9.io/ricace/cloud_9_project_1'},
        {name: 'This Website',address: '#'}
      ]
    },
    {
      name:'Game Design',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
      iconImage:'fa fa-laptop fa-stack-1x fa-inverse',
      urls: [
        {name: 'Fitbit Project',address: 'http://ec2-52-72-72-204.compute-1.amazonaws.com:8080/'},
        {name: 'Fitbit Project',address: 'http://ec2-52-72-72-204.compute-1.amazonaws.com:8080/'}
      ]
    },
    {
      name:'Sentiment Analysis',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
      iconImage:'fa fa-file-word-o fa-stack-1x fa-inverse',
      urls: [
        {name: 'SentimentAnalysis',address: 'https://localhost:8080/sentiment'},
        {name: 'Fitbit Project',address: 'http://ec2-52-72-72-204.compute-1.amazonaws.com:8080/'}
      ]
    }
  ];
}]);
