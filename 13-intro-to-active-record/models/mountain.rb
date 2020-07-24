# #### The ORM Pattern: 
# - DB tables(plural) -> Ruby classes(singular)
# - DB columns -> Ruby attributes(instance variables)
# - DB rows -> Ruby instances
class Mountain < ActiveRecord::Base
    has_many :hikes
    has_many :people, through: :hikes
end