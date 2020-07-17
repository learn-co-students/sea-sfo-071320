# Intro to Object Orientation 🧱

## A (Really Basic Mountain) 🧩

## SWBATs(Student will be able to):
- Create a `class` and `instance/object`
  - Class is a container/template/blueprint. Instances can be created from the class.
- Create `instance` methods
  - method name with `def name` inside the class.
  - `attr_reader, attr_writer, attr_accessor`
  - instance can only be called off the instance itself.
- Create `instance` variables
  - `@name : gives object their own `private` space to store data"
  - can be accessed in the class, but not outside.
- Use the initialize method to set inital values for instance variables
  - `def initialize(params...)` 
- take a look at `self`
  - you are instance are able to be aware with themselves, can call methods and variables available.
- create `class` variables
  - variable accessible by the class itself `start with @@`
  - storing multiples multipile mountains instances
- create `class` methods
  accessible with the class `Mountain`
  - when you are accessing multipile mountains instances

# One to Many Relationships
## SWBATs
* [ ] Implement one object to many objects relationship
  * [ ] One object `has many` objects
    - mountain `has_many` hikes
  * [ ] One object `belongs to` another object
    - hikes `belongs_to` a mountain
* [ ] Practice passing custom instance as arguments to methods
* [ ] Demonstrate single source of truth
* [ ] Infer type of method (class or instance) through naming conventions
* [ ] Model/Domain
* [ ] Practice keeping groups of data related to classes on the class as a class variable
* [ ] Demonstrate _Single Source of Truth_ by **not** storing collections of objects on other objects
* [ ] Demonstrate _Single Source of Truth_ by **not** storing one object in multiple collections
* [ ] Which class creates something, and which classs stores that relationship
* [ ] How to represent a  has_many and belongs_to
* [ ] Models/Classes in the same sentences.
* [ ] Module && Classes in Ruby

## Deliverables
* Create a Mountain class. The class should have these methods:
  * [ ] `initialize` which takes a mountain name(and other attributes) and have
  * [ ]  a reader method for the mountain name
  * [ ] `hikes` that returns an array of Hike instances
  * [ ] `add_hike` that takes a name, creates a new Hike, and adds it to the Mountain's Hike collection
  * [ ] `hikes` -> hikes array.

* Create a Hike class. The class should have these methods:
  * [ ] Hike has a method `name` that returns a string
  * [ ] `mountain` that returns an instance of the Mountain class
  * [ ] `all` that returns all the Hikes created
  * [ ] `mountain_name` that returns the Mountain name of the Hike's Mountain

## Define
* _Model_ - A class whose primary responsibility is to store data
* _Domain_ - The subject matter of the problem, (e.g., Learn's domain is online education)
* _Domain modeling_ - Creating models for your domain to represent real or abstract ideas (e.g., Learn's domain model includes modules, cohorts, assignments as well as their relationships)
* _Relationships_ - How one model or thing is connected to another model or thing
  * _One to many relationship_ - A relationship describing a single model that contains or keeps track of other models (a tree has many leaves, an organism has many cells, the universe has many galaxies)
  * _Many to many relationship_ (today!)
  * `belongs_to`
  * `has_many`
  * `through`
* _Schema_ - A visual representation of your data (models, relationships, etc.)
* [_Single Source of Truth_](https://en.wikipedia.org/wiki/Single_source_of_truth) - The practice of structuring _models_ and _relationships_ such that every data element is stored exactly once; any possible linkages to this data element are by reference only
  * **Why?** - Ask yourself, in the _one to many relationship_ of country to citizen, is it easier for the country to know about all of its citizens or is it easier for a citizen to know the which country they belong to? So how does a country find out its citizens? It conducts a census (a method) that asks all the people in the country if they are a citizen!


  ## References
  - [Blog on Self](https://dev.to/danvyle/understanding-self-via-football-analogy-2f0e)