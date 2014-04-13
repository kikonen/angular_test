App.controller(
"TaskShowController",
["$scope", "$location", "$routeParams", "Task",
function($scope, $location, $routeParams, Task) {
  $scope.loc = $location;
  $scope.taskId = $routeParams.taskId;
  $scope.loaded = 'Nope';
  $scope.load_time = null;
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
      $scope.load_time = new Date();
    });
}]);
