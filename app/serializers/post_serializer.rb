class PostSerializer < ActiveModel::Serializer
  attributes :id, :post_content, :user_id, :location_id
  has_one :user
  has_one :location
end
