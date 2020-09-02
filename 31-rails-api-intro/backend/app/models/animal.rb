class Animal < ApplicationRecord
  belongs_to :species

  validates :name, presence: true
end
