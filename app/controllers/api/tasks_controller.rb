class Api::TasksController < ApplicationController

  def create
    @task = Task.new(task_params)
    @task.creator_id = current_user.id
    @task.done = false
    if @task.save
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def index
    @tasks = current_user.tasks
    render :index
  end

  def show
    @task = Task.find_by(id: params[:id])
    render :show
  end

  def update
    @task = Task.find_by(id: params[:id])
    if @task.update(task_params)
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    @task = Task.find_by(id: params[:id])
    @task.destroy
    render :show
  end

  private
  def task_params 
    params.require(:task).permit(
      :name, 
      :description, 
      :due_date, 
      :priority, 
      :done, 
      :project_id,
      :section_id
    )
  end

end
