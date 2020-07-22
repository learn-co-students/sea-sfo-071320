class Person
    attr_accessor :name, :id

    # @@all = [ ]

    def initialize(name, id=nil)
        @name = name
        @id = id

        # @@all << self
    end

    #READ SELECT * 
    def self.all
        # @@all
        # 1. Create the sql query 
        sql = "SELECT * FROM people;"
        people = DB.execute(sql)

        # 2. Convert into objects
        # people.map do |person|
        #     Person.new(person["name"], person["id"])
        # end
    end

    def find_mountain(mountain_name) #mountain_name
        #which class do I need to talk to
        Mountain.all.select { |mountain| mountain.name == mountain_name}
    end

    def add_hike(mountain_name, hike_name) #association a person with a hike
        #self is going to be that instance
        #Create a new Hike.new(pass in the proper arguments)
        Hike.new(hike_name, self.find_mountain(mountain_name), self)
    end
end