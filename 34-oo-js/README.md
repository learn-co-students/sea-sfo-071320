# Object-Oriented Programming in JavaScript 🧱

## Goals 🏰

- [ ] Review object-oriented programming 🤔
- [ ] Create objects with `class` 🚀
- [ ] Compare objects in Ruby to objects in JS 🔬
- [ ] OO JS Class Inheritance ⚖️
- [ ] Static (class) methods in JS
- [ ] `.call`, `.apply`, `.bind`

---

## Why _Object_ Orientation? 🤔

> The basic idea of OOP is that we use objects to model real world things that we want to represent inside our programs...

> Objects can contain related data and code... and functionality or behavior that you want it to have.

- An object is the combination of attributes (data) and methods (behavior)

## The `class` keyword 🚀

- `class`, introduced with ES6, will do a lot of work for us (that we previously had to do manually)
- `constructor` method creates and initializes object from `class`

```javascript
class Pokemon {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }
  eat(amount) {
    console.log(`${this.name} is eating.`);
    this.hp += amount;
  }
  fight(length) {
    console.log(`${this.name} is fighting.`);
    this.hp -= length;
  }
}

const ditto = new Pokemon("ditto", 48);
const rapidash = new Pokemon("rapidash", 65);
```

## Comparing JS "Classes" to Ruby Classes 🔬

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }
}

let rectangle1 = new Rectangle(5, 10);
let rectangle2 = new Rectangle(20, 25);
```

```ruby
class Rectangle
  attr_accessor :height, :width

  def initialize(height, width)
    @height = height
    @width = width
  end

  def area
    @height * @width
  end
end

Rectangle.new(5, 10)
Rectangle.new(20, 25)
```

- `initialize` in Ruby is similar to the `constructor` in JS
- `attr_accessor` in Ruby is similar to setting attributes in our constructor in JS
- instance methods in Ruby are similar to instance methods in JS
- class methods in Ruby are similar to static methods in JS

## OO JS Class Inheritance

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super();
    this.height = length;
    this.width = length;
  }
}

let rectangle1 = new Rectangle(5, 10);
let rectangle2 = new Rectangle(20, 25);
let square1 = new Square(5);
```

## Class (`static`) methods in JS

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
    setTimeout(function () {
      // no this
    }, 100);
  }

  static largestOf(rectangles) {
    let largest = rectangles[0];
    rectangles.forEach((rectangle) => {
      if (largest.area() < rectangle.area()) {
        largest = rectangle;
      }
    });
    return largest;
  }
}

let rectangle1 = new Rectangle(5, 10);
let rectangle2 = new Rectangle(20, 25);

Rectangle.largestOf([rectangle1, rectangle2]);
```

## `bind`, `call`, `apply`

- `this` allows us to reuse functions with different contexts
- To figure out what `this` is, ask, "Where is this function being called?"

### Implicit binding

> I’d say it’ll tell you what the this keyword is referencing about 80% of the time.

- Look to the left of the dot!

```javascript
function ask(question) {
  console.log(this.teacher, question);
}

const lecture1 = {
  teacher: "Amelie",
  ask: ask,
};

const lecture2 = {
  teacher: "Levi",
  ask: ask,
};

lecture1.ask("What is implicit binding?");
lecture2.ask("What is implicit binding?");

// The `this` is set based on what object we call this method on
// We only have to have one ask function but can invoke it in two different contexts
```

### Explicit binding with `.call` & `.apply`

> The call() method calls a function with a given this value and arguments provided individually.
> The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).

```javascript
// First argument is the `this`
ask.call(lecture1, "What is implicit binding?");
ask.call(lecture2, "What is implicit binding?");
// We are explicitly sharing the ask function (wherever that function comes from, invoke it within the particular context that I specify)
ask.apply(lecture1, ["What is implicit binding?"]);
```

> Compared to call and apply, which immediately invoke a function bind creates a new function. The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.myFunction = this.myFunction.bind(this);
  }

  myFunction() {
    console.log(this);
  }
  area() {
    setTimeout(this.myFunction, 100);
  }
}
```

---

## Takeaways

- [x] Object orientation in programming gives us a means of organizing our code.
- [x] Objects can be created in an analogous way as Ruby.

## Resources

- [MDN: Object-oriented JavaScript for beginners](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [Tyler McGinnis: A Beginner's Guide to JavaScript's Prototype](https://tylermcginnis.com/beginners-guide-to-javascript-prototype/)
- [MDN: Object.create()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
- [MDN: Object prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- [MDN: this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [MDN: `new` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
- [MDN: Details of the Object Model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)
- [Raganwald: Classes vs. Prototypes in JavaScript](https://raganwald.com/2013/02/10/prototypes.html)
- [Medium: What's the Difference between Class & Prototypal Inheritance](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9)
- [Tyler McGinnis: The this keyword, call, apply, and bind in JavaScript](https://tylermcginnis.com/this-keyword-call-apply-bind-javascript/)
- [Tyler McGinnis: JavaScript Private and Public Class Fields](https://tylermcginnis.com/javascript-private-and-public-class-fields/)
- [Tyler McGinnis: JavaScript Inheritance and the Prototype Chain](https://tylermcginnis.com/javascript-inheritance-and-the-prototype-chain/)
