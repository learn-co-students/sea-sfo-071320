class Mountain
  attr_reader :name, :distance, :longitude, :latitude
  attr_accessor :elevation

  @@all = []

  def initialize(name, elevation, distance, longitude, latitude)
    @name = name
    @elevation = elevation
    @distance = distance
    @longitude = longitude
    @latitude = latitude
    @@all << self
  end

  def add_hike(name)
    binding.pry
    hike = Hike.new(name, self)
  end

  def hikes
    Hike.all.select {  |hike| hike.mountain == self }
  end

  def self.all
    @@all
  end

  def elevation
    @elevation #.to_s + " ft."
  end
end