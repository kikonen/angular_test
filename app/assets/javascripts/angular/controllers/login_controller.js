"use strict";
App.controller(
"LoginController",
["$scope", "$location", "AuthenticationService",
function($scope, $location, AuthenticationService) {
  $scope.user = {
    username: '',
    password: ''
  };

  $scope.valid = function() {
    return $scope.user.username.length > 0 && $scope.user.password.length > 0;
  };

  $scope.handleCommit = function() {
    AuthenticationService.login($scope.user.username, $scope.user.password);
  };

  $scope.handleRollback = function() {
    AuthenticationService.logout();
    $location.url("/login");
  };
}]);
