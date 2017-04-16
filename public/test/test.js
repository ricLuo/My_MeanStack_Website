var app=angular.module('myApp',[]);


app.directive('myDir', function(){
  return {
    restrict:'EA',
    templateUrl:'',
    scope:{
      list: '=',     //replaced by value of the text      equals list:'=list' binded to the same name
      title: '@'    //String
    }
  };
});

app.directive('myList',function(){
  return {
    restrict:'EA',
    // templateUrl: 'list_template.html',
    scope:{
      list:'='
    }
  }
});

app.controller('list', ['$scope', function($scope){
    $scope.myList = [
      {name:'Home', href:"index.html"},
      {name:'About',href:"about.html"},
      {name:'Project',href:"project.html"},
      {name:'Contact',href:"contact.html"}
    ]
  }]
);

// <my-todo list="todo" title="Angular To-do"></my-todo>
//   <div ng-repeat="todo in list">
//     <input type="checkbox" ng-model="todo.completed"> {{todo.name}}
//   </div>


app.controller('main', ['$scope', function($scope){
  $scope.myWeb = [
    {name: 'xxx', completed:true},
    {name: 'ooo', completed:true},
    {name: 'ddd', completed:false}
  ];
}]);


app.controller('project', ['$scope', function($scope){
  $scope.myProject = [
    {name: 'Web Application', url:"xxx"}
  ];
}]);
