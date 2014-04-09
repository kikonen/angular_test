App.controller("HomeController", function($scope, $location) {
    $scope.loc = $location;
    $scope.hello = {
        target: "Home",
        message: "Hello!!!!"
    };
});
