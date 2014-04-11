App.factory("Task", function($resource) {
  return $resource(
    '/api/tasks/:taskId',
    {},
    {
      query: {
        method: 'GET',
        isArray: true
      }
    });
});
