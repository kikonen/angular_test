App.controller("TaskIndexController", function($scope, $location) {
    $scope.loc = $location;
    $scope.hello = {
        target: "Tasks",
        message: "Hello!!!!"
    };
});
