# Working with APIs and Nested Data Structures

## Objectives

1. Use Ruby to programmatically make a web request to the [Star Wars API](https://swapi.dev/).
2. Use iteration and other techniques to parse a nested hash for specific information.

![](https://curriculum-content.s3.amazonaws.com/module-1/getting-remote-data-apis-and-iteration/Image_136_StarWarsLego.jpg)

## Overview

In this lab, we'll be using Ruby to send web requests to the Star Wars API. We'll make a web request to the API, and in return we will receive a collection of data, structured like a nested hash.

We will take that hash and parse it using iteration and other methods, in order to `puts` out some nicely formatted and extremely interesting Star Wars info for our user.

First, a little background.

## What's an API?

An **API**, or application programming interface, is a manner in which companies and organizations, like Twitter or the New York City government, or the super fans behind the Star Wars API, expose their data and/or functionality to the public (i.e. talented programmers like yourself) for use. APIs allow us to add important data and functionality to the applications we build.

We'll be learning much more about APIs later on in this course. For now, you can think of an API as one way in which data is exposed to us developers for use in our own programs.

Just like we can use Ruby to send a web request for a web page that is written in HTML, and receive a response that is full of HTML, we can use Ruby to send a web request to an API and receive a collection of JSON in return.

## What's JSON?
**JSON** is a language-agnostic way of formatting data. If we send a web request to the Star Wars API, it will return to us a JSON collection of data. With just one easy line of code, we can tell Ruby to treat that JSON collection as a nested hash. In this way, large and complicated amounts of data can be shared across platforms.

## How can Ruby Send a Web Request?

Ruby makes it super easy to send a web request. We can use the [Rest Client](https://github.com/rest-client/rest-client) gem to make it even easier!

Simply `gem install rest-client` in your terminal. Then, we can make a web request in the following manner:

```ruby
require 'rest-client'

RestClient.get('http://example.com/some-website/info')
```

Let's take a quick look at sending a web request to the Star Wars API:

```ruby
require 'rest-client'
character_data = RestClient.get('http://swapi.dev/api/people/1')

puts character_data
=> "{\"name\":\"Luke Skywalker\",\"height\":\"172\",\"mass\":\"77\",\"hair_color\":\"blond\",\"skin_color\":\"fair\",\"eye_color\":\"blue\",\"birth_year\":\"19BBY\",\"gender\":\"male\",\"homeworld\":\"http://swapi.dev/api/planets/1/\",\"films\":[\"http://swapi.dev/api/films/6/\",\"http://swapi.dev/api/films/3/\",\"http://swapi.dev/api/films/2/\",\"http://swapi.dev/api/films/1/\",\"http://swapi.dev/api/films/7/\"],\"species\":[\"http://swapi.dev/api/species/1/\"],\"vehicles\":[\"http://swapi.dev/api/vehicles/14/\",\"http://swapi.dev/api/vehicles/30/\"],\"starships\":[\"http://swapi.dev/api/starships/12/\",\"http://swapi.dev/api/starships/22/\"],\"created\":\"2014-12-09T13:50:51.644000Z\",\"edited\":\"2014-12-20T21:17:56.891000Z\",\"url\":\"http://swapi.dev/api/people/1/\"}"
```

Uh-oh, you might be thinking. The `character_data` variable that we used to capture the response from the API *isn't a nested hash*, it's a crazy long ugly-looking string.

Well, not exactly. The ugly response above is actually a string of **JSON.** We can tell Ruby how to take this JSON and parse it into an easy-to-work-with Ruby hash. To do this, we'll first require Ruby's JSON module, which will give us access to some handy methods, including one that will help us transform the data into Ruby:

```ruby
require 'JSON'
```
Now, we can access our data with the `parse` method:

```ruby
JSON.parse(character_data)
 => {
      "name": "Luke Skywalker",
      "height": "1.72 m",
      "mass": "77 Kg",
      "hair_color": "Blond",
      "skin_color": "Caucasian",
      "eye_color": "Blue",
      "birth_year": "19 BBY",
      "gender": "Male",
      "homeworld": "http://swapi.dev/api/planets/1/",
      "films": [
          "http://swapi.dev/api/films/1/",
          "http://swapi.dev/api/films/2/",
          "http://swapi.dev/api/films/3/"
      ],
      "species": [
          "http://swapi.dev/api/species/1/"
      ],
      "vehicles": [
          "http://swapi.dev/api/vehicles/14/",
          "http://swapi.dev/api/vehicles/30/"
      ],
      "starships": [
          "http://swapi.dev/api/starships/12/",
          "http://swapi.dev/api/starships/22/"
      ],
      "created": "2014-12-09T13:50:51.644000Z",
      "edited": "2014-12-10T13:52:43.172000Z",
      "url": "http://swapi.dev/api/people/1/"
}

```

That's much better!

Now that we have a pretty clear idea of how to work with APIs and use Ruby to send a web request, and parse the response into a hash, let's get started!

## Instructions

***Make sure you `gem install rest-client` in the directory of this project before you start coding!!***

### Understanding our Program

The basic structure of this lab has been provided for you. You'll be working on this project in groups of two, so one member of your pair should fork this repo, and add the other member as a collaborator.

Once you've cloned down this project onto your computer, open it up and get familiar with the file structure.

Notice that we've provided you with a `bin` directory and a `lib` directory.

The `bin` directory has one file, `run.rb`. This file is an *executable file*. That means that this is the file a user will run from the command line to execute the program. Something like this:

![](http://readme-pics.s3.amazonaws.com/Apis-and-Iteration_Screen_Cap.gif)

A user will run the program, see a lovely welcome message of your choosing, and then be prompted to enter the name of a character.

Your program will capture that input and use it to query the Star Wars API for that characters films, `puts`-ing out to the terminal, the info about the films that character has appeared in.

### `bin/run.rb`

Let's take a closer look at the content of the `run.rb` file:

```ruby
#!/usr/bin/env ruby

require_relative "../lib/api_communicator.rb"
require_relative "../lib/command_line_interface.rb"

welcome
character = get_character_from_user
show_character_movies(character)
```

This file requires the other files in the program, so that we can call methods defined in other files.

Why separate our program in this way? It's just more organized to separate our code according to the responsibilities of that code. This is known as the **single responsibility principle**.

First, we call the `welcome` method (which you will define in another file), then we call the `get_character_from_user` method, saving its return value to a variable, `character`. Lastly, we invoke the `show_character_movies` method, giving it an argument of the character name we captured above.

Let's take a look at how and where you will define those methods!

### `lib/api_communicator.rb`

This file is in charge of holding the code that talks to the API. It is here that we will define the methods that send requests to the API and parse the returned data from the API.

Take note of the `show_character_movies` method.

```ruby
def show_character_movies(character)
  films_array = get_character_movies_from_api(character)
  print_movies(films_array)
end
```

It takes in an argument of a character's name (which gets passed to the method when it is called in the `run.rb` file) and relies on two helper methods that you will define to make a request to the API and parse the response from that request.

The `get_character_movies` method will take in an argument of the character's name and use the Rest Client gem to query the API *for all the characters*.

Then, the resulting JSON is parsed into a handy Ruby hash. Don't forget to `require 'json'` at the top of the file. Any new outside libraries you use need to be required (i.e. rest-client, json, pry...).

Your job is to iterate over that hash and collect the API URLs for the movies that character appears in.

Then, you need to make a web request to each of those URLs using Rest Client. Collect and parse the responses of each of these web requests. You should end up with an array of hashes, each of which represents a movie.

```ruby
def get_character_movies_from_api(character)
  #make the web request
  response_string = RestClient.get('http://swapi.dev/api/people/')
  response_hash = JSON.parse(all_characters)

   # your code here
end
```

**Important:** You might be wondering: how do I iterate over the `response_hash` if I don't know what it looks like? Well, there are a couple of options. First of all, you can use `Pry` to freeze the program right after the `response_hash` is defined, and examine that hash in the terminal. Or, you can play around with the Star Wars API [here](https://swapi.dev/). If you fill out the form to make a request to `http://swapi.dev/people/`, you should see something like this:

```ruby
{
	"count": 87,
	"next": "http://swapi.dev/api/people/?page=2",
	"previous": null,
	"results": [
		{
			"name": "Luke Skywalker",
			"height": "172",
			"mass": "77",
			"hair_color": "blond",
			"skin_color": "fair",
			"eye_color": "blue",
			"birth_year": "19BBY",
			"gender": "male",
			"homeworld": "http://swapi.dev/api/planets/1/",
			"films": [
				"http://swapi.dev/api/films/6/",
				"http://swapi.dev/api/films/3/",
				"http://swapi.dev/api/films/2/",
				"http://swapi.dev/api/films/1/",
				"http://swapi.dev/api/films/7/"
			],
			"species": [
				"http://swapi.dev/api/species/1/"
			],
			"vehicles": [
				"http://swapi.dev/api/vehicles/14/",
				"http://swapi.dev/api/vehicles/30/"
			],
			"starships": [
				"http://swapi.dev/api/starships/12/",
				"http://swapi.dev/api/starships/22/"
			],
			"created": "2014-12-09T13:50:51.644000Z",
			"edited": "2014-12-20T21:17:56.891000Z",
			"url": "http://swapi.dev/api/people/1/"
		},
		{
			"name": "C-3PO",
			"height": "167",
			"mass": "75",
			"hair_color": "n/a",
			"skin_color": "gold",
			"eye_color": "yellow",
			"birth_year": "112BBY",
			"gender": "n/a",
			"homeworld": "http://swapi.dev/api/planets/1/",
			"films": [
				"http://swapi.dev/api/films/5/",
				"http://swapi.dev/api/films/4/",
				"http://swapi.dev/api/films/6/",
				"http://swapi.dev/api/films/3/",
				"http://swapi.dev/api/films/2/",
				"http://swapi.dev/api/films/1/"
			],
			"species": [
				"http://swapi.dev/api/species/2/"
			],
			"vehicles": [],
			"starships": [],
			"created": "2014-12-10T15:10:51.357000Z",
			"edited": "2014-12-20T21:17:50.309000Z",
			"url": "http://swapi.dev/api/people/2/"
		},
		{
			"name": "R2-D2",
			"height": "96",
			"mass": "32",
			"hair_color": "n/a",
			"skin_color": "white, blue",
			"eye_color": "red",
			"birth_year": "33BBY",
			"gender": "n/a",
			"homeworld": "http://swapi.dev/api/planets/8/",
			"films": [
				"http://swapi.dev/api/films/5/",
				"http://swapi.dev/api/films/4/",
				"http://swapi.dev/api/films/6/",
				"http://swapi.dev/api/films/3/",
				"http://swapi.dev/api/films/2/",
				"http://swapi.dev/api/films/1/",
				"http://swapi.dev/api/films/7/"
			],
			"species": [
				"http://swapi.dev/api/species/2/"
			],
			"vehicles": [],
			"starships": [],
			"created": "2014-12-10T15:11:50.376000Z",
			"edited": "2014-12-20T21:17:50.311000Z",
			"url": "http://swapi.dev/api/people/3/"
		},
		{
			"name": "Darth Vader",
			"height": "202",
			"mass": "136",
			"hair_color": "none",
			"skin_color": "white",
			"eye_color": "yellow",
			"birth_year": "41.9BBY",
			"gender": "male",
			"homeworld": "http://swapi.dev/api/planets/1/",
			"films": [
				"http://swapi.dev/api/films/6/",
				"http://swapi.dev/api/films/3/",
				"http://swapi.dev/api/films/2/",
				"http://swapi.dev/api/films/1/"
			],
			"species": [
				"http://swapi.dev/api/species/1/"
			],
			"vehicles": [],
			"starships": [
				"http://swapi.dev/api/starships/13/"
			],
			"created": "2014-12-10T15:18:20.704000Z",
			"edited": "2014-12-20T21:17:50.313000Z",
			"url": "http://swapi.dev/api/people/4/"
		},
		{
			"name": "Leia Organa",
			"height": "150",
			"mass": "49",
			"hair_color": "brown",
			"skin_color": "light",
			"eye_color": "brown",
			"birth_year": "19BBY",
			"gender": "female",
			"homeworld": "http://swapi.dev/api/planets/2/",
			"films": [
				"http://swapi.dev/api/films/6/",
				"http://swapi.dev/api/films/3/",
				"http://swapi.dev/api/films/2/",
				"http://swapi.dev/api/films/1/",
				"http://swapi.dev/api/films/7/"
			],
			"species": [
				"http://swapi.dev/api/species/1/"
			],
			"vehicles": [
				"http://swapi.dev/api/vehicles/30/"
			],
			"starships": [],
			"created": "2014-12-10T15:20:09.791000Z",
			"edited": "2014-12-20T21:17:50.315000Z",
			"url": "http://swapi.dev/api/people/5/"
		},
		{
			"name": "Owen Lars",
			"height": "178",
			"mass": "120",
			"hair_color": "brown, grey",
			"skin_color": "light",
			"eye_color": "blue",
			"birth_year": "52BBY",
			"gender": "male",
			"homeworld": "http://swapi.dev/api/planets/1/",
			"films": [
				"http://swapi.dev/api/films/5/",
				"http://swapi.dev/api/films/6/",
				"http://swapi.dev/api/films/1/"
			],
			"species": [
				"http://swapi.dev/api/species/1/"
			],
			"vehicles": [],
			"starships": [],
			"created": "2014-12-10T15:52:14.024000Z",
			"edited": "2014-12-20T21:17:50.317000Z",
			"url": "http://swapi.dev/api/people/6/"
		},
		{
			"name": "Beru Whitesun lars",
			"height": "165",
			"mass": "75",
			"hair_color": "brown",
			"skin_color": "light",
			"eye_color": "blue",
			"birth_year": "47BBY",
			"gender": "female",
			"homeworld": "http://swapi.dev/api/planets/1/",
			"films": [
				"http://swapi.dev/api/films/5/",
				"http://swapi.dev/api/films/6/",
				"http://swapi.dev/api/films/1/"
			],
			"species": [
				"http://swapi.dev/api/species/1/"
			],
			"vehicles": [],
			"starships": [],
			"created": "2014-12-10T15:53:41.121000Z",
			"edited": "2014-12-20T21:17:50.319000Z",
			"url": "http://swapi.dev/api/people/7/"
		},
		{
			"name": "R5-D4",
			"height": "97",
			"mass": "32",
			"hair_color": "n/a",
			"skin_color": "white, red",
			"eye_color": "red",
			"birth_year": "unknown",
			"gender": "n/a",
			"homeworld": "http://swapi.dev/api/planets/1/",
			"films": [
				"http://swapi.dev/api/films/1/"
			],
			"species": [
				"http://swapi.dev/api/species/2/"
			],
			"vehicles": [],
			"starships": [],
			"created": "2014-12-10T15:57:50.959000Z",
			"edited": "2014-12-20T21:17:50.321000Z",
			"url": "http://swapi.dev/api/people/8/"
		},
		{
			"name": "Biggs Darklighter",
			"height": "183",
			"mass": "84",
			"hair_color": "black",
			"skin_color": "light",
			"eye_color": "brown",
			"birth_year": "24BBY",
			"gender": "male",
			"homeworld": "http://swapi.dev/api/planets/1/",
			"films": [
				"http://swapi.dev/api/films/1/"
			],
			"species": [
				"http://swapi.dev/api/species/1/"
			],
			"vehicles": [],
			"starships": [
				"http://swapi.dev/api/starships/12/"
			],
			"created": "2014-12-10T15:59:50.509000Z",
			"edited": "2014-12-20T21:17:50.323000Z",
			"url": "http://swapi.dev/api/people/9/"
		},
		{
			"name": "Obi-Wan Kenobi",
			"height": "182",
			"mass": "77",
			"hair_color": "auburn, white",
			"skin_color": "fair",
			"eye_color": "blue-gray",
			"birth_year": "57BBY",
			"gender": "male",
			"homeworld": "http://swapi.dev/api/planets/20/",
			"films": [
				"http://swapi.dev/api/films/5/",
				"http://swapi.dev/api/films/4/",
				"http://swapi.dev/api/films/6/",
				"http://swapi.dev/api/films/3/",
				"http://swapi.dev/api/films/2/",
				"http://swapi.dev/api/films/1/"
			],
			"species": [
				"http://swapi.dev/api/species/1/"
			],
			"vehicles": [
				"http://swapi.dev/api/vehicles/38/"
			],
			"starships": [
				"http://swapi.dev/api/starships/48/",
				"http://swapi.dev/api/starships/59/",
				"http://swapi.dev/api/starships/64/",
				"http://swapi.dev/api/starships/65/",
				"http://swapi.dev/api/starships/74/"
			],
			"created": "2014-12-10T16:16:29.192000Z",
			"edited": "2014-12-20T21:17:50.325000Z",
			"url": "http://swapi.dev/api/people/10/"
		}
	]
}
```

Use this tool to preview the API requests you are making for this program. Don't fly blind! Examine your data at every step of the way.

**So, the `get_character_movies_from_api` method should return an array of hashes, where each hash represents a movie.**

This array of hashes is what gets passed to the `print_movies` method. This is the method in which you will iterate over that array of hashes to `puts` out movie information to the terminal.

### `lib/command_line_interface.rb`

This file is pretty basic. Define a `welcome` method that `puts` out a friendly greeting. Then, define the `get_character_from_user` method to ask the user for a characters name and capture that input. The return value of this method should be the captured user's input.

## Bonus

Once you have your program working as expected, challenge yourself. Can you add more methods so that a user can make additional queries to the API? Maybe a user should be able to input a movie name and get some movie info in return?

You can also put your refactoring skills to work. Take a closer look at the `get_character_movies_from_api` method. Does it look kind of long to you? Can you split it up into one or two helper methods?

<p class='util--hide'>View <a href='https://learn.co/lessons/apis-and-iteration'>Apis And Iteration</a> on Learn.co and start learning to code for free.</p>

---
---
# Active Record Integrations
# Questions:

1. Created a Gemfile and added following gems to include our rake tasks/database and Active Record
	- run `bundle init` in the terminal ( root folder of project.)
	- Include gems below in your `Gemfile`
		```Ruby
		gem 'rest-client'
		gem 'json'
		gem 'pry'
		gem 'sqlite3'
		gem 'activerecord', "~>5.2.3"
		gem 'sinatra-activerecord'
		gem 'rake'
		```
	- run `bundle install`
2. Moved all of our gems/required files/ and connection to the environment file.
	```Ruby
	#require gems in your project folder.
	require 'bundler'
	Bundler.require
	#require all of the files your will be using
	require_relative "../lib/api_communicator.rb"
	require_relative "../lib/command_line_interface.rb"
	#Create your database Connection
	ActiveRecord::Base.establish_connection(
		adapter: "sqlite3",
		database: "star_wars.db"
	)
	```
3. Add a Rakefile to our project 
	```Ruby
	#require all of your gems/files in your rake
	require_relative 'config/environment'
	#require rake tasks for our database
	require "sinatra/activerecord/rake"
	#Create a task so that we can launch a console session and use Pry
	desc "This will launch a console session"
	task :console do 
    	binding.pry
	end
	```
4. Create our Database
	```Ruby
	#Using the API, create your proper tables and columns
	rake db:create_migration NAME=create_characters
	rake db:create_migration NAME=create_films
	```
5. Link out Database to our models
	```Ruby 
	# Add a models folder and create a Ruby file for each table you added 
	- character.rb
	- film.rb
	```
6. Seed our data
	```Ruby
	#Connect your API to your Database ( seed data)
	# Active Record method to add data to our database ( typically .create)
	Character.create(name: "Character")
	Film.create(title: "Title")
	```

#search by id
Book.find(1)
Book.find_by(title: "Beneath the Bleeding") #search by column
Book.find_or_create_by(title: "Beneath the Bleeding");
Book.where("title = 'Beneath the Bleeding'")
Book.order(:title) #ascending
Book.order(title: :desc ) #descending

Creating an association from an Author instance:
Author.first.books << Book.second
b.authors << Author.second