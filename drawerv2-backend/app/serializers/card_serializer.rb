class CardSerializer < ActiveModel::Serializer
    attributes :id, :content, :game_id
    belongs_to :game
end