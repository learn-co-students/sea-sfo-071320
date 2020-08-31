const DOGSURL = "http://localhost:3000/dogs"
const main = document.querySelector('main')
// event listeners expect 2 arguments: the type of event, and a REFERENCE to a function
// to solve the problem of passing arguments when your event listener needs a REFERENCE, we wrap
// it in an anonymous function (otherwise called an arrow function)
main.addEventListener('submit', (ev) => submitComment(ev))

function submitComment(ev) {
    ev.preventDefault()
    // ev.target.matches('.commentForm')
    if (ev.target.className === 'commentForm') {
        // .comment.value, ev.target.parentElement.id
        patchComment(ev.target)
    }
}

function patchComment(target){
    let liList = target.parentElement.getElementsByTagName('ul')[0].getElementsByTagName('li')
    let commentCopy = Array.from(liList)
    commentCopy = commentCopy.map(li=>li.textContent)
    commentCopy.push(target.comment.value)

    //fetch also expects two arguments. the first is the URL to fetch to, the second (OPTIONAL) is the config object containing specific keys, one of them is method.
    fetch(`${DOGSURL}/${target.parentElement.id}`, {
        method: "PATCH",
        headers: {'Content-Type': 'application/json', Accept: 'application/json'},
        body: JSON.stringify({comments: commentCopy})
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
}


function fetchDogs() {
    return fetch(DOGSURL)
        .then(response => response.json())
        .then(data => {
            data.forEach(dataPiece => {
                renderDog(dataPiece)
            })
        })
}

function renderDog(dog) {
    // destructuring
    const { id, likes, breed, image, name, comments } = dog
    let useableHTML = `<div id=${id}>
            <h2>${name}</h2>
            <p>${breed}</p>
            <img src=${image}></img>
            <p>Likes: ${likes}</p>
            <p>Comments:</p>
            <ul>
                ${formatComments(comments)}
            </ul>
            <form class='commentForm'>
                <label>Add Comment:</label>
                <input placeholder='text here' type='text' name='comment'></input>
                <input type='submit'></input>
            </form>
        </div>`
    dogCard(useableHTML)
}

function dogCard(str) {
    main.innerHTML += str
}

function formatComments(comments) {
    // build up a string of comments, each one being turned into an LI
    let formattedComments = ''

    // for (const comment of comments){
    //     formattedComments += `<li>${comment}</li>`
    // }

    comments.forEach(comment => {
        formattedComments += `<li>${comment}</li>`
    })

    return formattedComments
}



fetchDogs()