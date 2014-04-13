module Api
  class TaskController < ApplicationController
    def index
      tasks = Task.all
      render json: tasks.map {|t| t.values}
    end

    def show
      task = Task.find(params[:id])
      sleep 0.5
      render json: task
    end
  end
end
