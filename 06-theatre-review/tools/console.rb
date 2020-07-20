require_relative '../config/environment'

grease = Musical.new("Grease", "High School")
hamilton = Musical.new("Hamilton", "New York")
wicked = Musical.new("Wicked", "Oz")

paramount = Theater.new("Paramount", "Seattle")
rcm =  Theater.new("Radio City Music Hall", "New York")
pt = Theater.new("Palace Theater", "Ohio")

# Performance.new
# Theater.new

Performance.new("12/12/20", grease, paramount)
hamilton.perform_in_theater("12/12/20", paramount)
grease.perform_in_theater("12/12/20", rcm)
wicked.perform_in_theater("11/11/11", paramount)
wicked.perform_in_theater("11/11/11", rcm)
binding.pry
0