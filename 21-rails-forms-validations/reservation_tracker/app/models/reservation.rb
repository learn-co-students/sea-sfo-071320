class Reservation < ApplicationRecord
  belongs_to :customer
  belongs_to :restaurant

  # validates :party_size, numericality: {greater_than_or_equal_to: 1, less_than_or_equal_to: 20}
  # validates :party_size, length: {in: 1..2}
  validates :customer, uniqueness: { scope: :restaurant, message: "you can only create one reservation per customer and restaurant combo" }

  validate :validate_num_for_party_size

  def validate_num_for_party_size
    # self is that particular reservation instance
    if self.party_size.class != Integer || self.party_size > 20
      self.errors.add(:party_size, "needs to be and interger, less than 20")
    end
  end
end
