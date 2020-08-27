// const pokemonContainer = document.getElementsByClassName('pokemon-container')[0];
const pokemonContainer = document.querySelector('.pokemon-container');

fetchAllPokemon();
listenToFormSubmit();
listenToDeleteClick();

function listenToDeleteClick() {
  pokemonContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
      // If we want to turn our string into a number
      // use parseInt - parseInt(e.target.dataset.id)
      // or the unary plus - +e.target.dataset.id

      const pokemonId = e.target.dataset.id;

      // Update backend
      fetch(`http://localhost:3000/pokemon/${pokemonId}`, { method: 'DELETE' });

      // Update frontend
      const pokemonCardToDelete = document.getElementById(pokemonId);
      pokemonCardToDelete.remove();
    }
  });
}

function listenToFormSubmit() {
  const form = document.querySelector('#pokemon-post-form');
  // 1. event listener for form submit
  form.addEventListener('submit', handleFormSubmit);
}

// Function that gets executed after user submits form
function handleFormSubmit(event) {
  // 2. prevent default
  event.preventDefault();

  // Find input fields within form
  // const nameInput = document.getElementById('name-input');
  const newPokemon = getPokemonInfoFromForm(event);

  // 3. update backend - add new pokemon to db
  persistNewPokemon(newPokemon);

  // 4. update frontend - render our new pokemon
  // optimistic render
  // const pokemonContainer = document.getElementsByClassName('pokemon-container')[0];
  // pokemonContainer.innerHTML += renderSinglePokemon(newPokemon);
}

function getPokemonInfoFromForm(event) {
  const nameInput = event.target.name;
  const frontInput = event.target.spriteFront;
  const backInput = event.target.spriteBack;

  // Get value from those input fields
  const name = nameInput.value;
  const front = frontInput.value;
  const back = backInput.value;

  const newPokemon = {
    name: name,
    sprites: {
      front: front,
      back: back,
    },
  };

  return newPokemon;
}

function persistNewPokemon(newPokemon) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPokemon),
  };

  fetch('http://localhost:3000/pokemon', options)
    .then((resp) => resp.json())
    .then((pokemon) => {
      // pessimistic render
      appendSinglePokemon(pokemon);
      // const pokemonContainer = document.getElementsByClassName('pokemon-container')[0];
      // pokemonContainer.innerHTML += renderSinglePokemon(pokemon);
    });
}

function fetchAllPokemon() {
  fetch('http://localhost:3000/pokemon')
    .then((resp) => resp.json())
    .then((data) => {
      appendPokepeople(data);
    });
}

function appendPokepeople(pokePeople) {
  pokePeople.forEach((pokemon) => {
    appendSinglePokemon(pokemon);
  });
}

function appendSinglePokemon(pokemon) {
  pokemonContainer.innerHTML += renderSinglePokemon(pokemon);
}

function renderSinglePokemon(pokemon) {
  return `
		<div class="pokemon-card" id="${pokemon.id}">
			<div class="pokemon-frame">
				<h1 class="center-text">${pokemon.name}</h1>
				<div class="pokemon-image">
					<img data-id="${pokemon.id}" class="toggle-sprite" src="${pokemon.sprites.front}">
        </div>
        <button data-id="${pokemon.id}" class="pokemon-button">Delete</button>
			</div>
    </div>`;

  // const outerDiv = document.createElement('div');
  // outerDiv.className = 'pokemon-card';
  // outerDiv.id = pokemon.id;

  // const frameDiv = document.createElement('div');
  // frameDiv.className = 'pokemon-frame';

  // const header = document.createElement('h1');
  // header.className = 'center-text';
  // header.textContent = pokemon.name;

  // frameDiv.append(header);
  // outerDiv.append(frameDiv);

  // console.log(outerDiv);
}

// These methods need to be called on DOM nodes (e.g. document, button, div)
// textContent - get content of tag
// value - get value of an input field
// innerHTML - appends string that gets turned into nodes to the DOM
// append - append strings or DOM nodes to the DOM

// create new pokemon - POST /pokemon
// update pokemon - PATCH/PUT /pokemon/:id
// delete pokemon - DELETE /pokemon/:id
// get all pokemon - GET /pokemon
// get single pokemon - GET /pokemon/:id
