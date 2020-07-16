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