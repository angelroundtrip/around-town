class PostSerializer < ActiveModel::Serializer
  attributes :id, :post_content
  has_one :user
  has_one :location
end
