require 'bundler'
Bundler.require

# require_all '/models'

require_relative '../models/hike'
require_relative '../models/mountain'
require_relative '../models/person'

# DB = SQLite3::Database.new("nature.db")
# DB.results_as_hash = true

ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3',
    database: "nature.db"
)
ActiveRecord::Base.logger = Logger.new(STDOUT)
