# #### The ORM Pattern: 
# - DB tables(plural) -> Ruby classes(singular)
# - DB columns -> Ruby attributes(instance variables)
# - DB rows -> Ruby instances
class Mountain

    attr_accessor :name, :id

    def initialize(name,id=nil)
        @name = name
        @id = id
    end

    def self.all
        sql = "SELECT * FROM mountains"
        mountains = DB.execute(sql)

        mountains.map { |mountain| Mountain.new(mountain["name"], mountain["id"]) }
    end
end