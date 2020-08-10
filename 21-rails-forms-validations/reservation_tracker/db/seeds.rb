# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

5.times do 
	Cusomer.create(name: Faker::Name.name, hungry: true)
end

c1 = Customer.first
c2 = Customer.create(name: "Mary", hungry: false)
c3 = Customer.create(name: "Lisa", hungry: true)

r1 = Restaurant.create(name: "Chipotle", rating: 3)
r2 = Restaurant.create(name: "In n Out", rating: 5)
r3 = Restaurant.create(name: "Taco Bell", rating: 4)

5.times do
	Reservation.create(date: DateTime.new(2020, 7, 11, 18, 00, 0), party_size: 12, customer: Customer.all.sample, restaurant: r3)
end

Reservation.create(date: DateTime.new(2020, 7, 11, 18, 00, 0), party_size: 12, customer: c1, restaurant: r3)
Reservation.create(date: DateTime.new(2020, 6, 9, 16, 30, 0), party_size: 2, customer: c2, restaurant: r2)
Reservation.create(date: DateTime.new(2020, 8, 18, 22, 00, 0), party_size: 15, customer: c3, restaurant: r1)
Reservation.create(date: DateTime.new(2020, 7, 4, 20, 15, 0), party_size: 5, customer: c1, restaurant: r1)
Reservation.create(date: DateTime.new(2020, 6, 20, 11, 30, 0), party_size: 3, customer: c2, restaurant: r1)
