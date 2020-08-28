const form = document.getElementsByClassName('add-ice-cream-form')[0];
const iceCreamDiv = document.getElementById('ice-cream-list');
let errors = [];

fetchGetIceCreams();
listenToFormSubmit();
listenToSaveButtons();

// LISTENERS
function listenToFormSubmit() {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const flavorInput = e.target.flavor;
    const deliciousnessInput = e.target.deliciousness;

    const flavor = flavorInput.value;
    const deliciousness = deliciousnessInput.value;

    const newIceCream = { flavor: flavor, deliciousness: deliciousness };

    fetchPostIceCream(newIceCream);
  });
}

function listenToSaveButtons() {
  iceCreamDiv.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
      const iceCreamId = e.target.dataset.id;
      const flavorInput = e.target.previousElementSibling;

      const updatedFlavor = flavorInput.value;
      const updatedIceCream = { flavor: updatedFlavor };

      fetchPatchIceCream(iceCreamId, updatedIceCream);
    }
  });
}

// FETCH
function fetchPatchIceCream(iceCreamId, updatedIceCream) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedIceCream),
  };

  fetch(`http://localhost:3000/ice-creams/${iceCreamId}`, options)
    .then((resp) => {
      // debugger;
    })
    .catch((error) => console.log(error));
}

function fetchPostIceCream(newIceCream) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newIceCream),
  };

  fetch('http://localhost:3000/ice-creams', options);
}

function fetchGetIceCreams() {
  fetch('http://localhost:3000/ice-creams')
    .then((resp) => resp.json())
    .then((iceCreams) => renderIceCreams(iceCreams));
}

// Render
function renderIceCreams(iceCreams) {
  iceCreams.forEach((iceCream) => {
    iceCreamDiv.innerHTML += `<li><input class="hidden-input" value="${iceCream.flavor}" /><button class="btn" data-id="${iceCream.id}">Save</button></li>`;
  });
}

// Getting new items (or single item)
// 1. Make a fetch request
// 2. Append items to the page (if it's multiple you need to iterate)

// Creating a new item (via form)
// 1. Listen to form submit (make sure you preventDefault())
// 2. After submit (by user) - Grab input values from form (build new ice cream object)
// 3. Make a fetch POST request to persist that new ice cream object
///// 4(a). Waiting for fetch request to complete (& send response back - then...) update the DOM with that incoming data
// 4(b). Update DOM with new ice cream (optimistic render)

// Edit and item
// 1. Listen to form submit on en edit form (make sure you preventDefault())
// 2. After submit (by user) - Grab input values from form (build updated ice cream object)
// 3. Make a fetch PATCH request to persist that updated ice cream object
///// 4(a). Waiting for fetch request to complete (& send response back - then...) update the DOM with that incoming data
// 4(b). Update DOM with new ice cream (optimistic render)

// Deleting an item (using event delegation)
// 1. Listen to delete button click (beforehand we need to make sure we added a delete button, possibly with an id)
// 2. Grab the id of the item from the button
// 3. Make a fetch DELETE request to that id (with a method of DELETE)
