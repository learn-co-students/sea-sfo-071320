class Person
    attr_accessor :name, :location

    @@all = [ ]

    def initialize(name, location)
        @name = name
        @location = location

        @@all << self
    end


    def self.all
        @@all
    end

    def find_mountain(mountain_name) #mountain_name
        #which class do I need to talk to
        Mountain.all #find the mountain object that matches the name
        #what the datatype returned.
        #return the mountain object
    end

    def add_hike(mountain_name, hike_name) #association a person with a hike
        #self is going to be that instance
        #Create a new Hike.new(pass in the proper arguments)
    end
end