# #### The ORM Pattern: 
# - DB tables(plural) -> Ruby classes(singular)
# - DB columns -> Ruby attributes(instance variables)
# - DB rows -> Ruby instances
class Hike

    attr_accessor :name, :mountain_id, :person_id, :id

    def initialize(name, mountain_id, person_id, id=nil)
        @name = name
        @mountain_id = mountain_id
        @person_id = person_id
        @id = id
    end

    def self.all
        sql = "SELECT * FROM hikes"
        hikes = DB.execute(sql)

        hikes.map { |hike| Hike.new(hike["name"], hike["mountain_id"], hike["person_id"], hike["id"]) }
    end
end