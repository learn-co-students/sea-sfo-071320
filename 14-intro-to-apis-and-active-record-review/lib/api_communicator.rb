def get_character_movies_from_api(character_name)
  #make the web request


  response_string = RestClient.get('http://swapi.dev/api/people')
  response_hash = JSON.parse(response_string)
  character_hash = response_hash["results"].select do |result|
     result["name"] == character_name 
  end.first

  film_urls = character_hash["films"] if character_hash

  films = film_urls.each_with_object([]) do |film_url, films|
    response_string = RestClient.get(film_url)
    response_hash = JSON.parse(response_string)
    films << response_hash
  end
end

def print_movies(films)
  # some iteration magic and puts out the movies in a nice list
  films.each do |film|
    puts "#{film["title"]}"
    puts "#{film["opening_crawl"]}"
  end
end

def show_character_movies(character)
  films = get_character_movies_from_api(character)
  print_movies(films)
end

## BONUS

# that `get_character_movies_from_api` method is probably pretty long. Does it do more than one job?
# can you split it up into helper methods?
