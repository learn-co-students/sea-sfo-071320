# #### The ORM Pattern: 
# - DB tables(plural) -> Ruby classes(singular)
# - DB columns -> Ruby attributes(instance variables)
# - DB rows -> Ruby instances
class Hike < ActiveRecord::Base
    belongs_to :person
    belongs_to :mountain
end