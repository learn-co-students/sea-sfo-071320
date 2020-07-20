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

    # def musical
    #     @musical
    # end

    # def theater
    #     @theater
    # end
end
