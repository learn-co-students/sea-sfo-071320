def get_data_from_api (url)
  response_string = RestClient.get(url)
  response_hash = JSON.parse(response_string)
end

def get_characters(character_name)
  response_hash = get_data_from_api('http://swapi.dev/api/people')
  character_hash = response_hash["results"].select { |result| 
    result["name"] == character_name 
  }.first
end

def get_films(film_urls)
  film_urls.each_with_object([]) { |film_url, films| 
    films << get_data_from_api(film_url) 
  }
end

def get_character_movies_from_api(character_name)
  film_urls = get_characters(character_name)["films"] if get_characters(character_name)
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