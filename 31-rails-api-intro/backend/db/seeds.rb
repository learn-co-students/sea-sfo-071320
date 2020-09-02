# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

s1 = Species.create(name: "Dog")
s2 = Species.create(name: "Cat")

Animal.create(name: "Fido", gender: "male", species: s1)
Animal.create(name: "Pixel", gender: "female", species: s1)
Animal.create(name: "Rupert", gender: "male", species: s2)
Animal.create(name: "Bob", gender: "female", species: s2)
