"use strict";
App.controller(
"TaskEditController",
["$scope", "$location", "$routeParams", "Task",
function($scope, $location, $routeParams, Task) {
  $scope.editMode = true;
  $scope.createMode = false;

  if ($routeParams.taskId) {
    $scope.ready = false;
    $scope.task = {
      id: $routeParams.taskId,
      name: 'wait...',
      message: 'wait...',
      done: false
    };

    Task.get(
      { taskId: $routeParams.taskId },
      function(task) {
        $scope.task = task;
        $scope.ready = true;
      });
  } else {
    $scope.task = new Task({
      id: null,
      name: '',
      message: '',
      done: false
    });
    $scope.ready = true;
    $scope.createMode = true;
  }

  $scope.handleCommit = function() {
    $scope.ready = false;
    console.log($scope.task);
    $scope.task.$save(function(task) {
      console.log(task);
      $location.url("/tasks/"+ $scope.task.id);
      if ($scope.createMode) {
        $location.url("/tasks");
      } else {
        $location.url("/tasks/"+ $scope.task.id);
      }
    });
  };

  $scope.handleRollback = function() {
    if ($scope.createMode) {
      $location.url("/tasks");
    } else {
      $location.url("/tasks/"+ $scope.task.id);
    }
  };
}]);
