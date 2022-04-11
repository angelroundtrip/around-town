class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :first_name, :home_location
  has_many :posts
end
