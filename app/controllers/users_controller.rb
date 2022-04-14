class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create]

  # GET /users
  def index
    @users = User.all
    render json: @users
  end

  def show
    # weatherAPIUrl = "http://api.weatherapi.com/v1/current.json?key=26d8da2542354788820132449220804&q=#{user.home_location}&aqi=no"
    # render json: {currentUser: @current_user, currentWeather: "This should be API stuff"}, status: :created
    render json: @current_user
  end
  # CREATE ACTION WOULD HAVE TO CONTACT API
  def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      # weatherAPIUrl = "http://api.weatherapi.com/v1/current.json?key=26d8da2542354788820132449220804&q=#{user.home_location}&aqi=no"
      # debugger
      # render json: {user: user, currentWeather: "This should be API stuff"}, status: :created
      render json: user, status: :created
  end

  def update 
    user = User.find(params[:id])
    user.update!(update_params)
    render json: user, status: :ok
  end


  def destroy 
    user = User.find(params[:id])
    user.destroy
    head :no_content
  end

  private

  def user_params
    params.permit(:username, :password, :email, :first_name, :home_location)
  end
  
  def update_params
    params.permit(:username, :password, :email, :first_name, :home_location)
  end

end