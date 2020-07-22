require 'pry'

class Student
    attr_accessor :name, :location

    @@all = [ ]

    def initialize(name, location)
        @name = name
        @location = location
        # binding.pry
        @@all << self
    end

    def self.all
        @@all
    end
end

# binding.pry