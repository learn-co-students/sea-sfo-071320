class Attendance
    attr_accessor :student, :mod

    @@all = [ ]
    def initialize(student, mod)
        @student = student
        @mod = mod
        @@all << self
    end

    def self.all
        @@all
    end
end