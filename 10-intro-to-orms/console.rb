require 'bundler'
Bundler.require

# require_all '/models'

require_relative 'models/hike'
require_relative 'models/mountain'
require_relative 'models/person'

DB = SQLite3::Database.new("nature.db")
DB.results_as_hash = true

binding.pry

# module SQlite3
#     class Database
#         def initialize

#         end
#     end

#     class Person
#         def initialize

#         end
#     end

#     class ...
# end