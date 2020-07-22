class Hike
  attr_accessor :name, :mountain, :person

  @@all = [ ]

  def initialize(name, mountain, person)
    @name = name
    @mountain = mountain
    @person = person
    @@all << self
  end

  def self.all
    @@all
  end

  def mountain_name
    @mountain.name
    # self.mountain.name
    # mountain.name
  end
end