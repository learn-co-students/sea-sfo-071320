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

    def performances
        #Talk to Performance
        Performance.all.select do |performance|
            # binding.pry
            self == performance.theater
        end
        # binding.pry
    end

    def theaters
        # binding.pry
        self.performances.collect do |performances|
            performances.musicals
        end
    end

end