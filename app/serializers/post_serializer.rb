class PostSerializer < ActiveModel::Serializer
  attributes :id, :location, :post
  has_one :user
end
