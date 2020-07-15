require 'bundler'
Bundler.require

class Mountain
  attr_reader :name, :distance, :longitude, :latitude
  attr_accessor :elevation

  #keep track of all the mountains that have ever been created
  @@all = []

  def initialize(name, elevation, distance, longitude, latitude)
    @name = name
    @elevation = elevation
    @distance = distance
    @longitude = longitude
    @latitude = latitude
    # binding.pry
    @@all << self
  end

  #reader for our class variable @@all 
  def self.all
    @@all
  end

  def elevation
    # binding.pry
    @elevation.to_s + " ft."
  end
end

class Hike
  attr_accessor :name, :mountain

  @@all = [ ]

  def initialize(name, mountain)
    @name = name
    @mountain = mountain #( #instance of the mountain - tiger mountain)
    @@all << self
  end

  def self.all
    @@all
  end

  def mountain_name
    # Mountain.all.select { |mountain| mountain.name == self}
    @mountain.name
    self.mountain.name
    #first we are accessing the mountain object
    #second we are calling the name reader for that mountain objecy
    mountain.name
  end
end

si = Mountain.new("Mount Si", 4167, 4.5, 47.5077, 121.7398)
pilchuk = Mountain.new("Mount Pilchuk", 5341, 2.7, 48.0579, 121.7968)
tiger = Mountain.new("Tiger Mountain", 1850, 3.8, 47.4995, 122.0086)
# ranier = nil

ppt = Hike.new("Poo Poo Point", tiger)
Hike.new("Poo Poo Point", ranier)

binding.pry