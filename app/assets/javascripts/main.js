"use strict";
window.App = angular.module('App', ['ngRoute', 'ngResource']);

window.App.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when("/", {
      templateUrl: '../templates/home.html',
      controller: 'HomeController',

      // @see http://omarriott.com/aux/angularjs-html5-routing-rails/
      // Add our redirection handler, normally this is used
      // in otherwise routes, but we can co-opt it here
      redirectTo: function(current, path, search) {
        if (search.goto) {
          // if we were passed in a search param, and it has a path
          // to redirect to, then redirect to that path
          return "/" + search.goto;
        } else {
          // else just redirect back to this location
          // angular is smart enough to only do this once.
          return "/";
        }
      }
    })
    .when("/tasks", {
      templateUrl: '../templates/task/index.html',
            controller: 'TaskIndexController'
    })
    .when("/tasks/:taskId", {
      templateUrl: '../templates/task/show.html',
      controller: 'TaskShowController'
    })
    .otherwise({
      redirectTo: "/"
    });
})
