# class Group < ApplicationRecord
#   attr_encrypted_options.merge!(key: ENV.fetch('ATTR_ENCRYPTED_SECRET'))
#   attr_encrypted :weather_api_key
# end