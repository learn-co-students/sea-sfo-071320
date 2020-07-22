require 'pry'
class Mod 
    attr_accessor :name, :description

    @@all = [ ]

    def initialize(name, description)
        @name = name
        @description = description
        @@all << self
    end

    def self.all
        @@all 
    end

    def self.all_descriptions
        @@all.map do |mod|
            # binding.pry
            mod.description
        end
        # binding.pry
    end


    def attendances_method
        Attendance.all.select do |attendance|
            # binding.pry
            self == attendance.mod
        end
    end

    def students
        # Student.all
        attendances = Attendance.all.select do |attendance|
            # binding.pry
            self == attendance.mod
        end

        attendances.map { |attendance| attendance.student }.uniq
        #another way with helper method
        attendances_method.map { |attendance| attendance.student }.uniq
    end
end

# binding.pry