# 🏗 JS Basics: DOM Manipulation

## 🏃🏼‍♀️ Goals

- [ ] JS is awesome: https://threejs.org/
- [ ] Review basic JavaScript syntax 📖
- [ ] Discuss the connection between HTML, JS, and the browser ⛓
- [ ] Practice using the Chrome developer tools to debug 🐛
- [ ] Define the DOM 🏢
- [ ] Manipulate the DOM with JS 🏗

## 📖 Basic JavaScript

### ⚙️ How JavaScript Works

- JS is a scripting language for the web
- 🤓 JS is loaded, interpreted, and executed in the browser

  - Loaded: `.js` files referenced with `<script>` tag in `.html` file
  - Interpreted: Technically _just-in-time compiled_. Code gets compiled at run time. Scripts are run in order, from top to bottom.
  - Executed: Browser's JS engine executes interpreted code as soon as possible (if we want to reference HTML we need to make sure it's loaded first)

### 🖋 Syntax

- Variables (`const`, `let`, `var`)

  - Can these variables be reassigned?
    - var: yes `var myVar = "hello"` and `myVar = "bye"`
    - let: yes `let myVar = "hello"` and `let = "bye"`
    - const: no
  - Can these variables be redeclared?
    - var: yes `var myVar = "hello"` and `var myVar = "bye"`
    - let: no `let myVar = "hello"`
    - const: no `const myVar = "hello"`
  - What is the difference between declaration and assignment?
    - assignment no variable keyword
    - declaration with variable keyword
  - What is the scope of each variable?
    - var, let and const are function scoped
    - only let and cost are block scoped (like an if block)
  - What does a global variable look like?
    - `myVar = "hello"`

- `;` optional, but useful, line termination

- Comments

  ```JavaScript
  // Single line comment

  /*
  Multiline comment
  */
  ```

- Functions (watch for the `return` keyword!)

  ```javascript
  function add(a, b) {
    return a + b;
  }

  add(2, 3);
  ```

- Lexical operators (`+`, `-`, `*`, `/`, `=`, `==`, `===`, `!=`, `!==`)

  - What is the difference between `===` and `==`
  - `===` is strict equality

- Truthiness and Falsiness

  - Truthy: Everything except...
  - Falsey: `false`, `0`, `0n`, `null`, `undefined`, `NaN`, `""`

- Conditionals

  ```JavaScript
  let name = "Bob"
  if(name === "Bob") {
    alert("Hi Bob")
  } else {
    alert("Hi Stranger")
  }
  ```

## ⛓ HTML, JS, and the Browser

- The script tag `<script>`
  - Inline JS can be written between tags with the `type="text/javascript"` attribute
  - External JS can be imported with the `src` attribute: `<script src=“main.js”></script>` (placement matters!)
  - Order of `<script>` elements matters
- [How Browsers Load and Process JavaScript](https://www.innoq.com/en/blog/loading-javascript/)

## 🐛 Debugging with Dev Tools

- Browser console
- `console.log('Hello World')`
- `debugger` & breakpoints

## 🏢 The Document Object Model

> The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

[Introduction to the DOM - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

- The DOM's job is to describe the structure of an HTML document and the relationship between elements
- You can think of the DOM as a tree

## 🏗 DOM Manipulation

### 🚪 Accessing the DOM

- `window` is the JavaScript interface to the DOM container
  - `window.scrollY`
  - `window.alert("Make sure you floss daily!")`
- `document` is the JavaScript interface to the DOM
  - `addEventListener()` "sets up a function that will be called whenever the specified event is delivered to the target."
  - `getElementById` "returns an Element object representing the element whose id property matches the specified string."
- 🤔 _What are other `window` or `document` methods?_ Use dev console and MDN to explore.

### 🐒 Grabbing Elements

- By ID
  - `document.querySelector(‘#unique-element')`
  - `document.getElementById('my-id')`
- By Class
  - `document.querySelectorAll('.some-shared-class')`
  - `document.getElementsByClassName('some-shared-class')`
- By Tag
  - `document.querySelectorAll('#unique-element')`
  - `document.getElementsByTagName('body')[0]`
- `get` has wider support and maybe better performance than `query`, but is not as versatile
- Think of adjustable wrench vs. fixed spanner!

### 🛠 Modifying HTML and CSS

- `document.createElement`
- `Element.textContent`
- `Element.append`
- And more!!
- 🆚 _How can we have our webpage load with a random background color_ Hint: chain methods on `document` to set color.
- 🆚 _How can we add a list of SpongeBob Squarepants characters to page?_ Hint: get parent element, create and append children.
