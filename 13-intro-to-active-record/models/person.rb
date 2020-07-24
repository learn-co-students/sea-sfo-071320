class Person < ActiveRecord::Base
    has_many :hikes
    has_many :mountains, through: :hikes
    # has_many :phones
end

# class Phone < ActiveRecord::Base
#     belongs_to :person
# end