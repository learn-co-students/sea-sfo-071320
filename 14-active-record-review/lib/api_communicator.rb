def get_data_from_api (url)
  response_string = RestClient.get(url)
  response_hash = JSON.parse(response_string)
end

def get_characters(character_name)
  response_hash = get_data_from_api('http://swapi.dev/api/people')
  character_hash = response_hash["results"].select { |result| 
    # binding.pry
    result["name"].include?(character_name) 
    Character.create(name:result["name"])
  }.first
end

def get_films(film_urls)
  film_urls.each_with_object([]) { |film_url, films| 
    film_hash = get_data_from_api(film_url)
    # binding.pry
    Film.create(title: film["title"], opening_crawl: film["opening_crawl"])
    films << film_hash
  }
end

def get_character_movies_from_api(character_name)
  character_films = get_characters(character_name)["films"]
  film_urls = character_films if character_films
  get_films(film_urls)
end

def print_movies(films)
  films.each do |film|
    puts "#{film["title"]}"
    puts "#{film["opening_crawl"]}"
  end
end

def show_character_movies(character)
  films = get_character_movies_from_api(character)
  print_movies(films)
end

def get_books
  google_books_url = "https://www.googleapis.com/books/v1/volumes?q=murakami"
  get_data_from_api(google_books_url)
  # binding.pry
end