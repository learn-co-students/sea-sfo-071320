# Active Record
1. Add in the Active Record Gem
2. Let's talk about rake tasks and the Rakefile
3. Integrating rake tasks from sinatra into our code
  - add in the `rake gems and tasks` 
  - add in the `rake tasks you need for the files`
4. Add in our new connection with Active Record 
  ```Ruby
  ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: "nature.db"
  )
  ```
4. ActiveRecord::Migrations
5. ActiveRecord::Base
  ```Ruby
  #Most Common Active Record Methods I have used: 
    .all
    .create
    .delete/destroy
    .destroy_all
    .find
    .find_by
    .first
    .id
    .new
    .save
    .where
    .update

  # Associations in Active Record!! 
    #<Mountain>.hikes
    #<Mountain>.people
    #<Mountain>.hikes_ids
    #<Mountain>.people_ids

    #and so many more!!
  ```

## CRUD -> Schema  ( where we modify the actual tables/columns)
 -  `ActiveRecord::Migration`
## CRUD -> Data ( where we modify values inside of the table ( rows ))
  - `ActiveRecord::Base`