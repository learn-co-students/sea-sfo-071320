class Mountain
  attr_reader :name, :distance, :longitude, :latitude #, :hikes
  attr_accessor :elevation

  #keep track of all the mountains that have ever been created
  @@all = []
  # @@hikes = [{ "Mount Si": [<Hike1>, <Hike2>, <Hike3>],
                # { "Tiger Mountain"}}]

  def initialize(name, elevation, distance, longitude, latitude)
    @name = name
    @elevation = elevation
    @distance = distance
    @longitude = longitude
    @latitude = latitude
    # @hikes = [ ]
    # binding.pry
    @@all << self
  end

  def add_hike(name) #hike name
    # binding.pry
    # creates a new Hike
    # @mountain
    # this is where self is super helpful, we can get the mountain instance
    hike = Hike.new(name, self)
    # adds it to the Mountain's Hike collection
    # @hikes << hike
  end

  def hikes
    # Reference the Hike class
    # Secifically the Hike.all
    Hike.all.select {  |hike| hike.mountain == self }
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