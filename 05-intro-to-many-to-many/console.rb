require 'bundler'
Bundler.require

# require_all '/models'

require_relative 'models/hike'
require_relative 'models/mountain'
require_relative 'models/person'



si = Mountain.new("Mount Si", 4167, 4.5, 47.5077, 121.7398)
pilchuk = Mountain.new("Mount Pilchuk", 5341, 2.7, 48.0579, 121.7968)
tiger = Mountain.new("Tiger Mountain", 1850, 3.8, 47.4995, 122.0086)
# ranier = nil

# ppt = Hike.new(tiger)
# ppt = tiger.add_hike("Poo Poo Point")

# bear = Mountain.all.sample.add_hike("Bear Peak Out and Back")
# sunshine = Mountain.all.sample.add_hike("Sunshine Lion's Lair Loop")
# green = Mountain.all.sample.add_hike("Green Hike via Ranger/Saddle Rock Loop")
# walker = Mountain.all.sample.add_hike("Walker Ranch")
# royal = Mountain.all.sample.add_hike("Royal Arch Out and Back")
# sanitas = Mountain.all.sample.add_hike("Mount Sanitas Loop")
# betasso = Mountain.all.sample.add_hike("Betasso Preserve")
# marshall = Mountain.all.sample.add_hike("Marshall Mesa to Spring Brook Loop")
# chautauque = Mountain.all.sample.add_hike("Welcome to Chautauqua")
# Hike.new("Poo Poo Point", ranier)

soundarya = Person.new("Soundarya", "Seattle")
ahmed = Person.new("Ahmed", "Denver")
bob = Person.new("Bob", "New York")
cindee = Person.new("Cindee", "Tim Buk Tu")

poo_poo_point = Hike.new("Poo Poo Point", tiger, soundarya)
poo_poo_point2 = Hike.new("Poo Poo Point", tiger, ahmed)
poo_poo_point3 = Hike.new("Poo Poo Point", tiger, bob)
binding.pry