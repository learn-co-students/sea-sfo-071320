const baseURL = 'http://localhost:3000/api/v1/animals/';

document.addEventListener('DOMContentLoaded', function () {
  console.log('Document is ready.');

  renderAnimals();
  listenToFormSubmit();
});

function listenToFormSubmit() {
  const form = document.getElementsByTagName('form')[0];
  const tbody = document.getElementsByTagName('tbody')[0];

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = e.target.name.value;
    const gender = e.target.gender.value;
    const species = e.target.species.value;

    const body = { animal: { name, gender, species } };

    createAnimal(body).then((json) => {
      tbody.innerHTML += renderAnimal(json);
    });
  });
}

function createAnimal(body) {
  return fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then((res) => res.json());
}

function fetchAnimals() {
  return fetch(baseURL).then((res) => res.json());
}

function renderAnimals() {
  const tbody = document.getElementsByTagName('tbody')[0];

  fetchAnimals().then((json) => {
    json.forEach((animalData) => {
      tbody.innerHTML += renderAnimal(animalData);
    });
  });
}

function renderAnimal(animal) {
  return `
  <tr>
    <td>${animal.name}</td>
    <td>${animal.gender}</td>
    <td>${animal.species.name}</td>
  </tr>
  `;
}
