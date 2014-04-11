App.controller("TaskShowController", function($scope, $location, $routeParams, Task) {
  $scope.loc = $location;
  $scope.taskId = $routeParams.taskId;
  $scope.loaded = 'Nope';
  $scope.task = {
    id: $scope.taskId,
    name: 'wait...',
    message: 'wait...'
  };

  Task.get(
    { taskId: $scope.taskId },
    function(task) {
      $scope.loaded = 'Wassup up';
      $scope.task = task;
      $scope.taskId = task.id;
    });
});
