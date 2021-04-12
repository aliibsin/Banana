class Api::SectionsController < ApplicationController

  before_action :require_sign_in

  def create
    @section = Section.new(section_params)
    if @section.save
      render :index
    else
      render json: @section.errors.full_messages, status: 422
    end
  end

  def index 
    @sections = Project.find_by(id: params[:project_id]).sections
    render: index
  end

  def update
    @section = Section.find_by(id: params[:id])

    if @section.update(section_params)
      render :index
    else
      render json: @section.errors.full_messages, status: 422
    end
  end

  def destroy 
    @section = Section.find_by(id: params[:id])
    @section.destroy
    render :index
  end

  private

  def section_params 
    params.require(:section).permit(:name, :project_id)
  end

end
