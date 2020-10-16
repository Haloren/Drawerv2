class Player < ApplicationRecord
  belongs_to :game

  validates :name, presence: true, length: {minimum: 1, maximum: 20}
end
