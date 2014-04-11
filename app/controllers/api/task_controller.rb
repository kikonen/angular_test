module Api
  class TaskController < ApplicationController
    def index
      ap index: tasks
      render json: tasks
    end

    def show
      task = tasks_by_id[params[:id].to_i]
      ap show: "#{params[:id]}", task: task
      sleep 0.5
      render json: task
    end

    def tasks_by_id
      @tasks_by_id = Hash[tasks.map {|t| [t[:id], t] }]
    end

    def tasks
      @tasks ||= [
        {
          id: 1,
          name: 'Buy milk',
          message: 'From grogers',
          done: false,
        },
        {
          id: 2,
          name: 'Buy cheese',
          message: 'Cheese shelf',
          done: true
        },
      ]
    end
  end
end
