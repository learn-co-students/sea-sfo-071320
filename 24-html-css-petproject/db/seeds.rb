# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Pet.create({ 
	name: 'Grumpy Cat', 
	description: "This cat can't even.", 
	species: 'Cat', 
	number_of_legs: 4, 
	size: 'normal', 
	grumpiness: 'Very', 
	image_url: 'https://cdn.cnn.com/cnnnext/dam/assets/190517103414-01-grumpy-cat-file-restricted-super-tease.jpg' 
})

Pet.create({ 
	name: 'Doge', 
	description: 'Most famous doggo on the internet.', 
	species: 'Doge', 
	number_of_legs: 4, 
	size: 'A bit small for a dog.', 
	grumpiness: 'Somewhere in the middle', 
	image_url: 'https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F013%2F564%2Fdoge.jpg' 
})

Pet.create({ 
	name: 'Pet Rock', 
	description: "It's a rock with eyes glued onto it.", 
	species: 'Rock', 
	number_of_legs: 0, 
	size: 'Tiny, tiny, and small', 
	grumpiness: 'No one knows', 
	image_url: 'https://townsquare.media/site/723/files/2015/04/Pet-Rock-12.jpg' 
})

Pet.create({
	name: 'My Housplant', 
	description: "Very resilient, otherwise I would have killed it already. Also, would definitely leave and go somewhere else if it could.", 
	species: 'Plant', 
	number_of_legs: 100,
	size: 'Hopefully larger after I water it', 
	grumpiness: 'Not very', 
	image_url: 'https://lh3.googleusercontent.com/TExLyZEhCCDkBAyPvMIWxprD8CKOeJOIXJcyERmNjRYFgsuBlwOnp04L4g20vh7Fg22QTouWQlbVYoJ7X36yw5AIdz4YPyg-sseB9yP-GYoIAnjVghHwuHCdhaC-8G3vFagmUroCrQypL8PVxD16YHst6U2H8OEdV4mg3HGLL9JIUD_PJodypcev_JXaxJkn4YmTmlYUHMlftfvr16PBsMYUAaCCt7J2iW_dPixWIBL3h0af46eYpy7DscNpxYEnsVASDmuQYWMwJev3F3VjiWCgB28T8X1EFsSXgOeyoJAs53mCxUe2YHPbMnrXVz3m-nBxiIf7wlz7q41K-5rst43SMil6AJYwthBdD4NGDVgIvOyyS2003og0aw4BqRLioOZhTFWoIfo3V_bdJmqYsYmtVY0905I8YAaL43YbJFBzGE0aw2YR3Q34EbuHTcD_o1zCFRRUwhqucx-9Oah26RgSH4W09TWu5UvrYMRPQP136BO70VLlG7IlTaKoOBfMdGkZZIp93K7qfguVN99WlpYK078Rs639vWwobyhsi5URPZTTB32KExCWP-mTlEAxPQsCm-bDbc36xogeJuA1B2T5Kw3XEM-UShyU9Y0iz0dGdM5K5xIS6I9cy-JiprHS2G4n0oRuiL_9w3sgC-58uid4Ey6qzvmDy3iTn3uVw8d-jguquzusKzK1O_pJvw=w1303-h977-no?authuser=0' 
})

Pet.create({
	name: 'Gary the Snail', 
	description: "Thinks he's a cat.", 
	species: 'Snail', 
	number_of_legs: 0,
	size: 'Pretty big for a snail', 
	grumpiness: 'Eh', 
	image_url: 'https://vignette.wikia.nocookie.net/spongebob/images/9/9e/Gary_looking_up_stock_art.png/revision/latest?cb=20181227162221' 
})

Pet.create({
	name: 'El Diablo', 
	description: "Lives in the alley behind the restaurant.", 
	species: 'Racoon', 
	number_of_legs: 4,
	size: 'large', 
	grumpiness: '9/10', 
	image_url: 'https://vignette.wikia.nocookie.net/bobsburgerpedia/images/8/87/El_Diablo.png/revision/latest/scale-to-width-down/340?cb=20150713111113' 
})

Pet.create({ 
	name: 'I Can Has Cheezburger Cat', 
	description: 'The original gangsta of cat memes.', 
	species: 'Cheezburger Cat', 
	number_of_legs: 4, 
	size: 'Fat', 
	grumpiness: '0', 
	image_url: 'https://i.chzbgr.com/original/875511040/h8EB4D6E9/famous-cat-meme-which-started-and-launched-the-website-i-can-haz-cheezburger' 
})
