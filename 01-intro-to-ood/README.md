# Intro to Object Orientation 🧱

## A (Really Basic Mountain) 🧩

## SWBATs(Student will be able to):
- Create a `class` and `instance/object`
- Create `instance` methods
- Create `instance` variables
- Use the initialize method to set inital values for instance variables
- take a look at `self`.
- if we have time take a look at `class` methods

- 4 pillars of programming
- encapsulation
  - all the methods and anything about the variables
  - instance variable in the class are all private.
- abstraction
  - how can we take a look at real life things, and convert into ruby objects, with properties/attributes && behavior.
- inheritance
- polymorphism

- What is the different between a class and objects ( instance )?
  - class is `blueprint` ( attributes/variables/propertries && methods ( behavior ) )
  - objects/instances and implementation of the `class`
  - the instance/object is the class itself
  - container for the data.
  - class can store methods

Here is a naive implementation of mountains in Ruby using only a hash which stores key-value pairs.

```ruby
mountains = [
  {name: "Mount Si", elevation: 4167 , distance: 4.5},
  {name: "Mount Pilchuk", elevation: 5341, distance: 2.7}, 
  {name: "Poo Poo Point", elevation: 1850, distance: 3.8},
]
```

## Objects 📦

### The Concept of an Object 🤔

- `object` in programming domain
  - OOP: Organize code like real objects
  - Object = data + methods
- Explain the difference between a class and an instance
  - Class:Instance as Blueprint:House
  - Class:Instance as Factory:Car
- An instance of a class is an object
### Objects in Ruby 💎

- Just about everything in Ruby is an object!
  - `#class`
  - A class is an object, too!
- Methods are messages to objects
  - Methods: behaviors an object performs upon its internal data and other code objects

### Creating Objects in Ruby 🏭

- **Instantiate an instance of the class `Mountain`**
  - TitleCase classes, e.g. `class ClassName`
  - `#new`
- Pass arguments to `new` by defining an `#initialize` method in class
  - Ruby interpreter looks for `#initialize` of `class`
  - Set initial object attributes in `#initialize`
    - `name`
  - ⚠️ *How could I set the name of a Mountain?*
- Instance methods
  - Methods that can be called on an instance
  - `def` & `end` as before, but now inside a class!
  - **Write method to print name of the Mountain**
  - **Write method to set name of the Mountain**
  - Can only be used in object instance
  - "Getter" and "setter" methods
    - "Getters and setters" read or write data encapsulated by an object
    - `#attr_` is family of helper methods for classes which defines "getter" and "setter" methods for instances
    - Define attribute readers and writers using `attr_` macros
    - ⚠️ *For `name` and `breed`, do we want to use `attr_reader`, `attr_writer`, or `attr_accessor`?*
- Class methods
  - Methods that can be called on a class
  - `def self.class_method`
  - **Write method to remember all instances of `Mountain`.**
  - Call methods on the implicit or explicit `self`
    - self is the "current object" and the default receiver of messages (method calls)
    - `binding.pry` inside class, instance methods to see what self is!
  - ⚠️ *What will `self` be at x, y, z?*
- Variable scope
  - Variables and methods are encapsulated depending on how and where they're 
  - `vanilla` => local variable
  - `@vanilla` => instance variable
  - `@@vanilla` => class variable
  - `$vanilla` => global variable
- Reminder: stay Responsible, stay DRY
  - Code smells not quite nice/When used more than thrice
  - Methods should be about 5 lines long
  - Classes should be less than 100 lines long

### Reference 
[What is a gemfile](https://tosbourn.com/what-is-the-gemfile/)