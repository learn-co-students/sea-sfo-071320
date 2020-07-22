# Intro to ORMS (Object Relational Mapping)

![Database Image](sql-intro.png "Databases")

Terminology/Notes: 
1. Schema: Going to give us a high level overview of the table and rows for our DB.
2. Table: table names are always plural.
3. Columns: we will typically always have a primary key inside of the tables. 
4. Rows: where our actual data inside of our table is
5. Foreign Keys: will always have the convention `table_name`, always reference the foreign key of a different table.
6. CRUD
  - Create ( any time we are insterting new information into the DB)
  ##### CREATE : Schema
  ```SQL
    - CREATE TABLE people(id INTEGER PRIMARY KEY, name TEXT)
    - CREATE TABLE hike(id INTEGER PRIMARY KEY, name TEXT, mountain_id INTEGER, person_id INTEGER)
    - CREATE TABLE mountain(id INTEGER PRIMARY KEY, name TEXT)
  ```

  ##### READ : Schema
  ```SQL
    .schema
  ```

  ##### Update: Schema
  ```SQL
    ALTER TABLE people ADD COLUMN age INTEGER
  ```

  ##### Delete: Schema
  ```SQL
    - DROP TABLE people
  ```
  ---
  ---
  ---
  ##### CREATE : Data
  ```SQL
    - INSERT INTO people(name) VALUES("Soundarya")
    - INSERT INTO people(name) VALUES("Ahmed")
    - INSERT INTO people(name) VALUES("Cody")
  ```
  ##### READ : Data
  ```SQL
    - SELECT * 
    - SELECT columns ...
    - SELECT * WHERE column = 
    - ORDER BY
  ```
  ##### Update: Data
  ```SQL
    - UPDATE people SET name = 'Soundaryaa' WHERE id = 1
  ``
  ##### Delete: Data
  ```SQL
    DELETE FROM people WHERE name = 'Soundaryaa'
  ```


#### Using Sqlite3
- install the sqlite3 gem.
- create a connection : `DB = SQLite3::Database.new("nature.db")`
#### The ORM Pattern: 
- DB tables(plural) -> Ruby classes(singular)
- DB columns -> Ruby attributes(instance variables)
- DB rows -> Ruby instances

