class Card < ApplicationRecord
  belongs_to :game

  validates :content, presence: true, uniqueness: true, length: {minimum: 1, maximum: 25}
end
