module Api
  class TaskController < ApplicationController
    def index
      tasks = [
        {
          id: 1,
          name: 'Buy milk',
          done: false,
        },
        {
          id: 2,
          name: 'Buy cheese',
          done: true
        },
      ]
      render json: tasks
    end
  end
end
