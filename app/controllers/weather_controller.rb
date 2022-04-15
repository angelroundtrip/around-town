class WeatherController < ApplicationController
  # This controller will handle the weather related API actions.
  def userWeather
      weatherAPI = "http://api.weatherapi.com/v1/current.json?key=26d8da2542354788820132449220804&q=#{@current_user.home_location}&aqi=no"

      # bundle add rest-client
      weather = RestClient.get(weatherAPI)

      # bundle add json
      weatherData = JSON.parse(weather)

      currentCity = weatherData["location"]["name"]

      currentState = weatherData["location"]["region"]

      currentCountry = weatherData["location"]["country"]

      currentTemperature = weatherData["current"]["temp_f"]

      currentCondition = weatherData["current"]["condition"]["text"]

      # debugger

      render json: {
        currentCity: currentCity, 
        currentState: currentState, 
        currentCountry: currentCountry, 
        currentTemperature: currentTemperature,
        currentCondition: currentCondition 
      }
  end

end
