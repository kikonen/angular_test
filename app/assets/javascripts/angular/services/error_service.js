"use strict";
App.service(
"ErrorService",
["$location",
function($location) {
  var error = {
    status: null,
    message: null
  };

  this.show_error = function(status, message) {
    error.status = status;
    error.message = message;
  };
}]);
