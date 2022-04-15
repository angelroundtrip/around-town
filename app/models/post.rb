class Post < ApplicationRecord
  belongs_to :user
  belongs_to :location

  validates :post_content, presence: true
end
