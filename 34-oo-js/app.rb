class Rectangle
  attr_accessor :height, :width

  def initialize(height, width)
    @height = height
    @width = width
  end

  def area
    @height * @width
  end
end

r1 = Rectangle.new(5, 10)
Rectangle.new(20, 25)

r1.area
