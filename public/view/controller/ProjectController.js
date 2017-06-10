var projectModule = angular.module('Project', []);

projectModule.controller('projController',['$scope', '$window', function($scope,$window){

  $scope.sentiment1 = function(){
    var langdingUrl = 'http://'+$window.location.host+'/sentiment1';
    $window.location.href= langdingUrl;
  };

  $scope.sentiment2 = function(){
    var langdingUrl = 'http://'+$window.location.host+'/sentiment2';
    $window.location.href= langdingUrl;
  };

  $scope.projects = [
    {
      name:'Web Application',
      description:"Built this website in MVC structure. Dealt with ",
      iconImage:'fa fa-desktop fa-stack-1x fa-inverse',
      urls: [
        {name: 'React-D3-Python Project',address: 'https://github.com/ricLuo/Clipboard-Health-Coding-Challenge'},
        {name: 'Fitbit Oauth',address: 'https://github.com/ricLuo/fitbit_nodejs_oauth2'},
        {name: 'This Website',address: 'https://github.com/ricLuo/My_MeanStack_Website'}
      ]
    },
    {
      name:'Java Application',
      description:"Built this website in MVC structure. Dealt with ",
      iconImage:'fa fa-desktop fa-stack-1x fa-inverse',
      urls: [
        {name: 'Spring-Elasticsearch Project', address: 'https://github.com/ricLuo/Spring-Elasticsearch'},
        {name: 'Webservice Project',address: 'https://ide.c9.io/ricace/cloud_9_project_1'},
        {name: 'Hadoop System and Map Reduce', address: 'http://ec2-52-90-0-150.compute-1.amazonaws.com:50070'}
      ]
    },
    {
      name:'Data Analysis',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
      iconImage:'fa fa-file-word-o fa-stack-1x fa-inverse',
      urls: [
        {name: 'Python Aggregation', address:'https://gitlab.com/ricace/Python_Hiring_Test'},
        {name: 'SentimentAnalysis1'},
        {name: 'React-D3-Python Project', address:'Jupyter_Draft.html'}
      ]
    },
    {
      name:'Game Design',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
      iconImage:'fa fa-laptop fa-stack-1x fa-inverse',
      urls: [
        {name: 'CyEngine Game',address: 'http://ec2-52-72-72-204.compute-1.amazonaws.com:8080/'},
        {name: 'Fitbit Project',address: 'http://ec2-52-72-72-204.compute-1.amazonaws.com:8080/'}
      ]
    },

  ];
}]);
