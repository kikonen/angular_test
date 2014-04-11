App.controller("TaskShowController", function($scope, $location, $routeParams) {
    $scope.loc = $location;
    $scope.task = {
        title: 'Dummy task title',
        target: "task-" + $routeParams.taskId,
        message: "Some dummy data"
    };
});
