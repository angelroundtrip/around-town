class User < ApplicationRecord
  has_secure_password
  has_many :posts, dependent: :destroy
  has_many :locations, through: :posts

  validates :username, presence: true, uniqueness: true, length: {minimum: 2, maximum: 12}
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: {minimum: 5, maximum: 12}
end
