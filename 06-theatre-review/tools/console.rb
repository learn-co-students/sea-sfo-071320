require_relative '../config/environment'

grease = Musical.new("Grease", "High School")
hamilton = Musical.new("Hamilton", "New York")

paramount = Theater.new("Paramount", "Seattle")
rcm =  Theater.new("Radio City Music Hall", "New York")
pt = Theater.new("Palace Theater", "Ohio")
# Performance.new
# Theater.new

Performance.new("12/12/20", grease, paramount)
hamilton.perform_in_theater("12/12/20", paramount)
grease.perform_in_theater("12/12/20", rcm)
binding.pry
0