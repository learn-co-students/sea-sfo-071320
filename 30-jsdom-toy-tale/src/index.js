(function () {
  let addToy = false;
  const addBtn = document.querySelector('#new-toy-btn');
  const toyFormContainer = document.querySelector('.container');
  const toyContainer = document.querySelector('#toy-collection');
  const toyForm = document.querySelector('.add-toy-form');

  // FUNCTION CALLS
  fetchGetToys();

  listenToToggleButton();
  listenToFormSubmit();
  listenToLikeButtonClicks();

  // LISTENERS
  function listenToToggleButton() {
    addBtn.addEventListener('click', handleToggleButton);
  }

  function listenToFormSubmit() {
    toyForm.addEventListener('submit', handleFormSubmit);
  }

  function listenToLikeButtonClicks() {
    toyContainer.addEventListener('click', handleLikeButtonClicks);
  }

  // HANDLERS
  function handleLikeButtonClicks(e) {
    if (e.target.tagName === 'BUTTON') {
      const toyId = e.target.dataset.id;
      const likesElement = e.target.previousElementSibling;
      const currentNumLikes = +likesElement.textContent.split(' ')[0];
      const newNumLikes = currentNumLikes + 1;
      const updatedToy = { likes: newNumLikes };

      fetchPatchLikes(toyId, updatedToy);

      likesElement.textContent = `${newNumLikes} Likes`;
    }
  }

  function handleToggleButton() {
    // hide & seek with the form
    addToy = !addToy;

    if (addToy) {
      toyFormContainer.style.display = 'block';
    } else {
      toyFormContainer.style.display = 'none';
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const nameInput = e.target.name;
    const imageInput = e.target.image;
    const name = nameInput.value;
    const image = imageInput.value;
    const newToy = {
      name: name,
      image: image,
      likes: 0,
    };

    fetchPostToy(newToy);

    nameInput.value = '';
    imageInput.value = '';
  }

  // FETCHES
  function fetchGetToys() {
    fetch('http://localhost:3000/toys')
      .then((resp) => resp.json())
      .then((toys) => renderToyCards(toys));
  }

  function fetchPostToy(newToy) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newToy),
    };

    fetch('http://localhost:3000/toys', options)
      .then((response) => response.json())
      .then((newToy) => appendToy(newToy));
  }

  function fetchPatchLikes(toyId, updatedToy) {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedToy),
    };

    fetch(`http://localhost:3000/toys/${toyId}`, options);
  }

  // DOM MANIPULATION
  function renderToyCards(toys) {
    toys.forEach((toy) => appendToy(toy));
  }

  function appendToy(toy) {
    toyContainer.innerHTML += renderToyCard(toy);
  }

  function renderToyCard(toy) {
    return `<div class="card">
  <h2>${toy.name}</h2>
  <img src="${toy.image}" class="toy-avatar" />
  <p>${toy.likes} Likes </p>
  <button data-id="${toy.id}" class="like-btn">Like <3</button>
</div>`;
  }
})();

//************* Alternative Structure *************
// TOGGLE
// ADDING TOY
// FETCHING ALL TOYS
