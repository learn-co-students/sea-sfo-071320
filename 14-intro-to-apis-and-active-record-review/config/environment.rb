require 'bundler'
Bundler.require


require_relative "../lib/api_communicator.rb"
require_relative "../lib/command_line_interface.rb"

ActiveRecord::Base.establish_connection(
    adapter: "sqlite3",
    database: "db/star_wars.db"
)