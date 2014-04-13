"use strict";
App.controller(
"HomeController",
["$scope", "$location",
function($scope, $location) {
  $scope.loc = $location;
  $scope.hello = {
    target: "Home",
    message: "Hello!!!!"
  };
}]);
