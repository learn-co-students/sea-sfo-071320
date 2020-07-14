require 'bundler'
Bundler.require

class Mountain
  attr_reader :name, :distance, :longitude, :latitude
  # attr_writer :elevation
  attr_accessor :elevation

  def initialize(name, elevation, distance, longitude, latitude)
    #local variables -> this is available within the scope of that method
    @name = name
    @elevation = elevation
    @distance = distance 
    @longitude = longitude
    @latitude = latitude
    binding.pry
  end


  # #instance methods
  # def name
  #   @name
  # end

  # def name=(name)
  #   @name = name
  # end


end

si = Mountain.new("Mount Si", 4167, 4.5, 0.0, 0.0)
si = Mountain.new("Mount Si", 4167, 4.5, 0.0, 0.0)
si = Mountain.new("Mount Si", 4167, 4.5, 0.0, 0.0)

binding.pry