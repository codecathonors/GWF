class NewsSerializer < ActiveModel::Serializer
  attributes :id, :title, :text, :date
end
