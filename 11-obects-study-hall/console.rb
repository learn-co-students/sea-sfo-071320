require 'pry'

require_relative 'mod'
require_relative 'attendance'
require_relative 'student'

soundarya = Student.new("Soundarya", "Seattle")
ahmed = Student.new("Ahmed", "Denver")
brad = Student.new("Brad", "Seattle")
ashlee = Student.new("Ashlee", "Seattle")

one = Mod.new("1", "Ruby")
two = Mod.new("2", "Ruby on Rails")
three = Mod.new("3", "Javascript")
four = Mod.new("4", "React")

Attendance.new(Student.all.sample, Mod.all.sample)
Attendance.new(Student.all.sample, Mod.all.sample)
Attendance.new(Student.all.sample, Mod.all.sample)
Attendance.new(Student.all.sample, Mod.all.sample)
Attendance.new(Student.all.sample, Mod.all.sample)
Attendance.new(Student.all.sample, Mod.all.sample)
Attendance.new(Student.all.sample, Mod.all.sample)

binding.pry