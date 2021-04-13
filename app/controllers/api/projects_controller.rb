class Api::ProjectsController < ApplicationController

  before_action :require_sign_in

  def create
    @project = Project.new(project_params)
    @project.creator_id = current_user.id
    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def index 
    @projects = current_user.projects
    render :index
  end

  def show
    @project = Project.find_by(id: params[:id])
    render :show
  end

  def update
    @project = Project.find_by(id: params[:id])

    if @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    @project = Project.find_by(id: params[:id])
    if @project.creator_id != current_user.id
      render json: ["Only the project creator can delete the project"], status: 422
    else
      @project.destroy  
      render :show
    end
    
  end

  private

  def project_params
    params.require(:project).permit(:name, :description)
  end

end
