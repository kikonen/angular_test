App.controller(
"TaskIndexController",
["$scope", "$location", "Task",
function($scope, $location, Task) {
  $scope.loc = $location;
  $scope.hello = {
    target: "This is just test",
    message: "I mean it TEST!"
  };
  $scope.tasks = Task.query();
}]);
