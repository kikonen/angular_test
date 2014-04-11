App.controller("TaskIndexController", function($scope, $location) {
    $scope.loc = $location;
    $scope.hello = {
        target: "Tasks",
        message: "Hello!!!!"
    };
    $scope.tasks = [
      {
          id: 1,
          title: 'task 1',
          message: 'dummy task 1 data'
      },
      {
          id: 2,
          title: 'task 2',
          message: 'dummy task 2 data'
      }
    ];
});
