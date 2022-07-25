class HomeNewsSerializer < ActiveModel::Serializer
  attributes :id, :title, :date
  belongs_to :news

  def short_summary
    "#{self.object.text[0...50]} . . ."
  end
#might need to name this osmething else
  
end
