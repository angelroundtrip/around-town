class User < ApplicationRecord
  has_secure_password
  has_many :posts, dependent: :destroy
  has_many :cities, through: :posts

  validates :username, :email, presence: true, uniqueness: true
  validates :password, presence: true, length: {minimum: 5, maximum: 30}
end
