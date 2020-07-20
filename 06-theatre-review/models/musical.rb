class Musical
    attr_reader :setting_city
    attr_accessor :name

    @@all = [ ]
    def initialize(name, setting_city)
        @name = name
        @setting_city = setting_city

        @@all << self
    end

    def self.all
        @@all
    end

    def self.all_introductions
        self.all.each do |musical|
            puts "Welcome, this is #{musical.name}, set in #{musical.setting_city}"
        end
    end

    def perform_in_theater(date, theater) 
        Performance.new(date, self, theater)
    end

    # - [ ] `Musical` should have a method `Musical#performances` should return an array of all that musical's performances
    # OUTPUT: [#<P>, #<P>]
    def performances
        #Talk to Performance
        Performance.all.select do |performance|
            # binding.pry
            self == performance.musical
        end
        # binding.pry
    end

    def theaters
        # binding.pry
        self.performances.collect do |performances|
            performances.theater
        end
    end
end