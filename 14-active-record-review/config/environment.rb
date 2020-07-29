require 'bundler'
Bundler.require


require_relative "../lib/api_communicator.rb"
require_relative "../lib/command_line_interface.rb"
# require_relative "../lib/models/character.rb"
# require_relative "../lib/models/film.rb"
# require_relative "../lib/models/book.rb"
require_all 'lib'
ActiveRecord::Base.establish_connection(
    adapter: "sqlite3",
    database: "db/star_wars.db"
)
ActiveRecord::Base.logger = nil
