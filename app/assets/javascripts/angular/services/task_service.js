App.factory(
"Task",
["$resource",
function($resource) {
  return $resource(
    '/api/tasks/:taskId',
    {},
    {
      query: {
        method: 'GET',
        isArray: true
      }
    });
}]);
