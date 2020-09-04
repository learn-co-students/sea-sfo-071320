// Deliverables: Make each element on the page react to an event. When we get to the form, use the event to append new <li>'s to the page for each submission.

// List some steps to creating an event:
    // 1. select the element off the dom, 
    // 2. save it in a variable
    // 3. add the listener

// What are the arguments that the function addEventListener expects to receive? 

const clickableDiv = document.getElementById('div')
// could also use document.querySelector('#div)
// docuemnt.getElementsByTagName("div")[0]

clickableDiv.addEventListener('click', clickFunction)
// first argument is the type of event that you want to listen for
// second argument is a *reference* to the function to fire when the event occurs
function clickFunction(){
    alert("hey!!!")
}

const button = document.getElementById('button')

button.addEventListener('click', backgroundChanger)

function backgroundChanger(){
    const body = document.querySelector('body')
    console.log(body)
    body.style.backgroundColor = "paleturquoise"
    console.log(body)
}

const form = document.getElementById('inputForm')
const unorderedList = document.getElementById('ul')
unorderedList.innerText = ''

form.addEventListener('submit', addListItemsToPage)
// could also use this as the second argument: (ev)=>addListItemsToPage(ev). The syntax above is forcing an event to be passed as an argument behind the scenes. 

function addListItemsToPage(ev){
    ev.preventDefault()
    // 1. grab the user's input from the form
    const userInput = ev.target.input.value
    // 2. create a new <li> element
    const newLi = document.createElement('li')
    // 3. add the user input into the <li>'s innerText
    newLi.innerText = `${userInput}`
    // 4. append the <li> to the page
    unorderedList.append(newLi)
}
// <li>Text here</li>




const ronakButton = document.getElementById('ronak')
ronakButton.addEventListener('click', someEvent)

function someEvent(ev){
    console.log(ev)
    // ev.target is the button itself. It does not have access to textarea from the event. a click event really only knows about the X and Y coordinates of the mouse.
    const textArea = document.getElementById('textarea')
    // in order to grab other information off the page, you will have to query select for that element manually
}


// EVENT LISTENER CHEAT SHEET

// below is an example of just a normal *reference* to a function being used
div.addEventListener('click', someFunction)

// below is an example of wrapping the function in an anonymous function (otherwise known as an arrow function) in order to be able to pass arguments to your function
div.addEventListener('click', ()=>someFunction("arguments", "go", "here"))
// below is *exactly* the same thing, just written differently
div.addEventListener('click', function(){someFunction("arguments", "go", "here")})

// below is an example of passing through the event manually to your function
div.addEventListener('submit', (ev)=>someFunction(ev))
// and below is *exactly* the same thing, but making use of javascript magic to force an event through to the function
div.addEventListener('submit', someFunction)

// fun fact! line 69 is *also forcing an event through to the function*, but typically with "click" events, we don't need to use the event very much unless you are trying to track the X & Y location of the mouse. 