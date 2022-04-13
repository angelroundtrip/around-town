class User < ApplicationRecord
  has_secure_password
  has_many :posts, dependent: :destroy
  has_many :locations, through: :posts
  # accepts_nested_attributes_for :locations

  # require_relative '../.api_key.rb'
  # weatherAPI = RestClient.get("http://api.weatherapi.com/v1/current.json?key=#{$api_key}&q=New York, NY&aqi=no")

  validates :username, :email, presence: true, uniqueness: true
  validates :password, presence: true, length: {minimum: 5, maximum: 30}
end
