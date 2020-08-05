# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])

Dish.create(name: 'Pepperoni', cost: 20, size: "XL", extra_cheese: true)
Dish.create(name: 'Veggie', cost: 18, size: "L", extra_cheese: true)
Dish.create(name: '4 Cheese', cost: 22, size: "XXL", extra_cheese: true)
