class WeatherController < ApplicationController

  def index
    # weather = Weather.all
    # render json: weather
  end

  # * Updating a user's home location currently breaks the fetch. There's a discrepancy between US and international locations with how the data fetches (name, region, country)
  def show
      weatherAPIUrl = "http://api.weatherapi.com/v1/current.json?key=26d8da2542354788820132449220804&q=#{@current_user.home_location}&aqi=no"
      weather = RestClient.get(weatherAPIUrl)
      weatherData = JSON.parse(weather)
      currentCity = weatherData["location"]["name"] 
      currentCountryState = weatherData["location"]["country"]
      currentTemperature = weatherData["current"]["temp_f"]
      currentCondition = weatherData["current"]["condition"]["text"]
      # debugger
      render json: {currentCity: currentCity, currentCountryState: currentCountryState, currentTemperature: currentTemperature, currentCondition: currentCondition, currentCondition: currentCondition}
  end

end
