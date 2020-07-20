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

    # "Welcome, this is {insert musical name here}, set in {insert city here}"
    def self.all_introductions
        # binding.pry
        self.all.each do |musical|
            puts "Welcome, this is #{musical.name}, set in #{musical.setting_city}"
        end
    end

    def perform_in_theater(date, theater)
        # what variables am in taking in this method. 
        # Variables will give a hint on what assocation we are creating. 
        Performance.new(date, self, theater)
    end
end