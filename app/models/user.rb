class User < ApplicationRecord
  has_secure_password

  has_many :comments

  validates :username, :email, presence: true, uniqueness: true
  validates :password, presence: true, length: {minimum: 5, maximum: 30}
end
