class Restaurant < ApplicationRecord
	has_many :reservations
	has_many :customers, through: :reservations
end
