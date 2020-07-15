require 'pry'
class CashRegister  
  attr_reader :discount
  attr_accessor :total

  def initialize(discount=0)
    @total = 0
    @discount = discount
  end

  def add_item(title, price, quantity=1)
    # binding.pry
    price *= quantity
    self.total += price
  end
end