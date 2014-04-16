"use strict";
App.service(
  "AuthenticationService",
["$http", "$location", "$cookies", "$cookieStore", "ErrorService", "auth",
function($http, $location, $cookies, $cookieStore, ErrorService, auth) {
  var basic = auth.get('basic');

  this.authenticated = function() {
    return !!$cookies.auth_token;
  };

  this.login = function(username, password) {
    $cookieStore.remove('auth_token');
    basic.credentials(username, password);
    basic.$http({method: 'GET', url: '/api/login', Authentication: 'xxx:yyy'})
      .success(function(data, status, headers, config) {
        console.log(status);
        console.log(data);
        $location.url("/");
      })
      .error(function(data, status, headers, config) {
        console.log(status);
        console.log(data);
        ErrorService.show_error(status, data);
      });
  };

  this.logout = function() {
    console.log("logout");
    basic.$http({method: 'DELETE', url: '/api/logout'})
      .success(function(data, status, headers, config) {
        $cookieStore.remove('auth_token');
        basic.forgetCredentials();
      })
      .error(function(data, status, headers, config) {
        $cookieStore.remove('auth_token');
        basic.forgetCredentials();
      });
  };
}]);
