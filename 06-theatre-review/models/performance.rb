class Performance

    attr_reader :musical, :theater, :date

    @@all = [ ]

    def initialize(date, musical, theater)
        @date = date
        @musical = musical
        @theater = theater

        @@all << self
    end

    def self.all
        @@all 
    end

    #even though they ask for instance methods, these are what the attr_readers are doing, so don't define them here. 
    # def musical
    #     @musical
    # end

    # def theater
    #     @theater
    # end
end
