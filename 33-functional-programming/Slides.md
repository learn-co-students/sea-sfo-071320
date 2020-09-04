# Introduction to Functional Programming 🛠

Functional programming (often abbreviated FP) is the process of building software by composing **pure functions**, **avoiding shared state**, **mutable data**, and **side-effects**. Functional programming is **declarative** rather than imperative, and application state flows through pure functions. Contrast with object oriented programming, where application state is usually shared and colocated with methods in objects.

_You've probably already implemented functional programming!_

.cols[
.fifty[

#### Benefits of Functional Programming

- Easier to debug
- Easier to test
- Easier to read
- Easier to refactor
- More flexible programs

]
.fifty[

#### Let's explore these concepts

- First: _Functions as (first-class) objects_
- Pure Functions
- Declarative Programming
- Avoid Shared State
- Avoid Mutable Data
- Avoid Side Effects

]]

---

## **Functions as (first-class) objects**

A programming language is said to have First-class functions when **functions in that language are treated like _any other variable_.**
Functions can be...

```javascript
// assigned to variables
const eatPotatoes = () => console.log('I love potatoes!');

// referenced in arrays/objects
const person = { name: 'Amelie', eat: () => console.log('Eating potatoes') };

// passed as arguments & returned from functions (higher-order functions)
function multiplyBy(multiplier) {
  return function (num) {
    return multiplier * num;
  };
}

multiplyBy(2)(3);
const double = multiplyBy(2);
double(3);
```

---

### **Pure** · Declarative · Immutable · No Shared State/Side Effects

.cols[
.fifty[
A _pure_ function...

- always returns the same output given the same input
- has no side-effects

]

.fifty[
_Why use pure functions?_

- It's easier to test
- As a programmer we have to keep track of state in our head

]
]

.cols[
.fifty[
_Good (pure)_

```javascript
const add = (x, y) => x + y;

add(2, 3) === 5;
```

]

.fifty[
_Bad (impure)_

```javascript
let name = 'Amelie';

const getName = () => name;

const setName = (newName) => {
  name = newName;
};
```

]
]

---

### Pure · **Declarative** · Immutable · No Shared State/Side Effects

.cols[
.fifty[

**Imperative**: We tell the computer _How_ to achieve the result

```javascript
function double(arr) {
  let results = [];

  for (let i = 0; i < arr.length; i++) {
    results.push(arr[i] * 2);
  }

  return results;
}
```

]

.fifty[

**Declarative**: We tell the computer _What_ to do

```javascript
function double(arr) {
  return arr.map((item) => item * 2);
}
```

]]

[Imperative vs. Declarative Programming (in 60 seconds)](https://www.youtube.com/watch?v=JqvMTwnbhnA)

---

### Pure · Declarative · **Immutable** · No Shared State/Side Effects

An immutable object is an object that can’t be modified after it’s created. Conversely, a mutable object is any object which can be modified after it’s created.

- Immutability == Avoid mutating state

### What can we do to make our objects immutable?

- Object.freeze (doesn't do a deep freeze) or use a library e.g. Immutable.js

```javascript
const employee = {
  name: 'Lisa',
  address: {
    city: 'SF',
  },
};

Object.freeze(employee);
```

---

### Pure · Declarative · Immutable · **No Shared State/Side Effects**

Shared state is any variable, object, or memory space that exists in a shared scope, or as the property of an object being passed between scopes.

```javascript
// SHARED STATE
// With shared state, the order in which function calls are made changes the result of the function calls.
let x = 2;
const x1 = () => (x += 1);
const x2 = () => (x *= 2);
x1();
x2();
console.log(x); // 6

// NOT SHARED STATE
// It doesn't matter how we call our functions, we will always get the same results
const x = 2;
const x1 = (y) => y + 1;
const x2 = (y) => y * 2;
x2(x);
x1(x);
console.log(x1(x2(x))); // 5
```

---

## Takeaways

### Benefits of Functional Programming

- Easier to debug
- Easier to test
- Easier to read
- Easier to refactor
- More flexible programs

### Functional programming favors

- Pure functions instead of shared state & side effects
- Declarative rather than imperative code (what to do, rather than how to do it)
- Immutability over mutable data
- Lots of generic, reusable utilities that use higher order functions to act on many data types instead of methods that only operate on their colocated data

---

## Functional vs. Object-Oriented Programming 🚀

| Topic          | FP                                  | OOP                             |
| :------------- | :---------------------------------- | :------------------------------ |
| **Definition** | Emphasizes evaluations of functions | Based on concept of objects     |
| **Data**       | Immutable                           | Mutable                         |
| **Model**      | Declarative (What)                  | Imperative (How)                |
| **Execution**  | Any order                           | Particular order                |
| **Iteration**  | Recursion                           | Loops                           |
| **Elements**   | Variables and Functions             | Objects and Methods             |
| **Use**        | Few things with more operations     | Many things with few operations |

---

## Resources

- [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
- [MDN Article on First Class Functions](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)
- [Medium: What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)
- [EDUCBA: Functional Programming vs. OOP](https://www.educba.com/functional-programming-vs-oop/)
