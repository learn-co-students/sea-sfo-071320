class Person
    attr_accessor :name, :id

    # Once we have a database, our @@all goes away since we are not storing the data in our ruby programs.
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
        people.map do |person|
            Person.new(person["name"], person["id"])
        end
    end

    def self.create_table
        sql = "CREATE TABLE people(id INTEGER PRIMARY KEY, name TEXT)"
        people = DB.execute(sql)
    end
end