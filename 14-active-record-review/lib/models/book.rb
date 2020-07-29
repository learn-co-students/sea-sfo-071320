class Book < ActiveRecord::Base
    has_many :authors_books
    has_many :authors, through: :authors_books
end