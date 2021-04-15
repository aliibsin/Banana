class Api::SectionsController < ApplicationController

  before_action :require_sign_in

  def create
    @section = Section.new(section_params)
    @section.creator_id = current_user.id
    if @section.save
      render :show
    else
      render json: @section.errors.full_messages, status: 422
    end
  end

  def index 
    @sections = current_user.sections
    render :index
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
