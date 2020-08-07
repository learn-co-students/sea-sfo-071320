class Game < ApplicationRecord
	has_many :games_players
	has_many :players, through: :games_players

	validates :title, presence: true
end
