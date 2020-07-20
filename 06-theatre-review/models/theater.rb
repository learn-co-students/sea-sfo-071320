class Theater
    attr_accessor :title, :city

    @@all = [ ]
    def initialize(title, city)
        @title = title
        @city = city

        @@all << self
    end

    def self.all
        @@all
    end

end