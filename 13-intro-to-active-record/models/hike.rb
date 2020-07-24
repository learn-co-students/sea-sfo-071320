# #### The ORM Pattern: 
# - DB tables(plural) -> Ruby classes(singular)
# - DB columns -> Ruby attributes(instance variables)
# - DB rows -> Ruby instances
class Hike

    attr_accessor :name, :mountain_id, :person_id, :id

    def initialize(hike) #name, mountain_id, person_id, id=nil
        binding.pry
        @name = hike["name"]
        @mountain_id = hike["mountain_id"]
        @person_id = hike["person_id"]
        @id = hike["id"]
    end

    def self.all
        sql = "SELECT * FROM hikes"
        hikes = DB.execute(sql)

        hikes.map { |hike| Hike.new(hike) }
        # hike["name"], hike["mountain_id"], hike["person_id"], hike["id"]
    end
end