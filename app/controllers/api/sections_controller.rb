class Api::SectionsController < ApplicationController

  before_action :require_sign_in

  def create
    @section = Section.new(section_params)
    if @section.save
      render :show
    else
      render json: @section.errors.full_messages, status: 422
    end
  end

  # def projectSections
  #   sections = {}
  #   current_user.projects.each do |project|
  #     @sections[project.id] = project.sections
  #   end
  #   return sections
  # end

  def index 
    @sections = {}
    current_user.projects.each do |project|
      @sections[project.id] = project.sections
    end
    render json: @sections
  end

  def update
    @section = Section.find_by(id: params[:id])

    if @section.update(section_params)
      render :show
    else
      render json: @section.errors.full_messages, status: 422
    end
  end

  def destroy 
    @section = Section.find_by(id: params[:id])
    @section.destroy
    render :show
  end

  private

  def section_params 
    params.require(:section).permit(:name, :project_id)
  end

end
