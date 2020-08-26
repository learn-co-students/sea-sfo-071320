fetch('https://api.github.com/users')
  .then((resp) => resp.json())
  .then((data) => console.log(data));

fetch('http://localhost:3000/pokemon')
  .then((resp) => resp.json())
  .then((allPokemon) => {
    appendAllPokemon(allPokemon);
  });

// fetch('http://localhost:3000/pokemon/2')
//   .then((resp) => resp.json())
//   .then((singlePokemon) => {
//     // append single pokemon
//   });

function appendAllPokemon(allPokemon) {
  const pokemonContainer = document.querySelector('.pokemon-container');
  // const randomNumber = Math.floor(Math.random() * allPokemon.length);
  // pokemonContainer.innerHTML += renderSinglePokemon(allPokemon[randomNumber]);

  allPokemon.forEach((pokemon) => {
    const pokemonCard = renderSinglePokemon(pokemon);

    pokemonContainer.innerHTML += pokemonCard;
  });
}

function renderSinglePokemon(pokemon) {
  // Create a pokemon card with divs/buttons etc, the id is how we figure out which pokemon has been clicked
  return `
		<div class="pokemon-card" id="${pokemon.id}">
			<div class="pokemon-frame">
				<h1 class="center-text">${pokemon.name}</h1>
				<div class="pokemon-image">
					<img data-id="${pokemon.id}" class="toggle-sprite" src="${pokemon.sprites.front}">
				</div>
			</div>
		</div>`;
}

// fetch('http://localhost:3000/pokemon').then(function (resp) {
//   debugger;
// });

// // Function expression
// const myFunctionExpression = function () {
//   return 'hello';
// };

// const myArrowFunctionExpression = () => {
//   return 'hello';
// };

// const myArrowFunctionExpression = () => 'hello';

// // Function declaration
// function functionDeclaration() {
//   return 'hello';
// }

// function makePokemonLogoClickable() {
//   // 1. grab the logo
//   const logoNode = document.getElementById('pokemon-logo');
//   // 2. attach an event listener to the logo
//   logoNode.addEventListener('click', function () {
//     // 3. grab the text
//     const textContainer = document.getElementsByClassName('pokemon-container')[0];
//     const textNode = textContainer.querySelector('center');
//     // 4. change the text content
//     textNode.textContent = 'Something else';
//   });
// }

// makePokemonLogoClickable();
