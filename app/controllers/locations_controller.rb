class LocationsController < ApplicationController
  skip_before_action :authorize, only: [:create]

  def index
    render json: Location.all
  end

  def show
    location = Location.find(params[:id])
    render json: location, status: :ok
  end

  def update 
    location = Location.find(params[:id])
    location.update!(Location_params)
    render json: location, status: :ok
  end

  def create
    location = Location.create!(location_params)
    # location.user_id = @current_user.id
    session[:location_id] = location.id
    render json: location, status: :created
  end

  def destroy 
    location = Location.find(params[:id])
    location.destroy
    head :no_content
  end

  private
  
  def location_params
    params.permit(:name)
  end
end
