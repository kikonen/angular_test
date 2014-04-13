module Api
  class TaskController < ApplicationController
    def index
      tasks = Task.all
      render json: tasks.map {|t| t.values}
    end

    def show
      task = Task.find(params[:id])
      sleep 0.5
      render json: task.values
    end

    def create
      task = save
      sleep 0.5
      render json: task.values
    end

    def update
      task = save
      sleep 0.5
      render json: task.values
    end

    private

    def save
      attrs = params.clone
      attrs.delete :action
      attrs.delete :controller
      attrs.delete :format

      task = Task.new(attrs)
      task.save
      task
    end
  end
end
