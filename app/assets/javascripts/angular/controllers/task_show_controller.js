App.controller("TaskShowController", function($scope, $location, $routeParams, Task) {
  $scope.loc = $location;
  $scope.taskId = $routeParams.taskId;
  $scope.loaded = 'Nope';
  $scope.task = Task.get(
    { taskId: $scope.taskId },
    function(task) {
      console.log(task);
      $scope.loaded = 'Wassup up';
      console.log($scope.task);
    });
});
