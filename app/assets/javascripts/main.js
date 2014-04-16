"use strict";
window.App = angular.module(
  'App', [
    'ngRoute',
    'ngResource',
    'ngCookies',
    'ng-auth',
    'ng-auth.strategies.basic'
  ]);

window.App.config(function(
  $httpProvider,
  $routeProvider,
  $locationProvider,
  authProvider)
{
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

  authProvider.register('basic', {
    strategy: 'basic'
  });

  $locationProvider.html5Mode(true);
  $routeProvider
    .when("/", {
      templateUrl: '../templates/home.html',
      controller: 'HomeController',

      // @see http://omarriott.com/aux/angularjs-html5-routing-rails/
      // Add our redirection handler, normally this is used
      // in otherwise routes, but we can co-opt it here
      redirectTo: function(current, path, search) {
        if (search.path) {
          // if we were passed in a search param, and it has a path
          // to redirect to, then redirect to that path
          return "/" + search.path;
        } else {
          // else just redirect back to this location
          // angular is smart enough to only do this once.
          return "/";
        }
      }
    })
    .when("/login", {
      templateUrl: '../templates/login.html',
      controller: 'LoginController'
    })
    .when("/logout", {
      redirectTo: function(current, path, search) {
        return "/";
      }
    })
    .when("/tasks", {
      templateUrl: '../templates/task/index.html',
      controller: 'TaskIndexController'
    })
    .when("/tasks/create", {
      templateUrl: '../templates/task/show.html',
      controller: 'TaskEditController'
    })
    .when("/tasks/:taskId", {
      templateUrl: '../templates/task/show.html',
      controller: 'TaskShowController'
    })
    .when("/tasks/:taskId/edit", {
      templateUrl: '../templates/task/show.html',
      controller: 'TaskEditController'
    })
    .otherwise({
      redirectTo: "/"
    });
});
