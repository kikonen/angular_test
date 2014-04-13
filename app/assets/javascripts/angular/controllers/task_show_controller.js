"use strict";
App.controller(
"TaskShowController",
["$scope", "$location", "$routeParams", "Task",
function($scope, $location, $routeParams, Task) {
  $scope.editMode = false;
  $scope.ready = false;
  $scope.task = {
    id: $routeParams.taskId,
    name: 'wait...',
    message: 'wait...'
  };

  Task.get(
    { taskId: $routeParams.taskId },
    function(task) {
      $scope.task = task;
      $scope.ready = true;
    });

  $scope.handleCommit = function() {
    $location.url("/tasks/"+ $scope.task.id + "/edit");
  };
}]);
