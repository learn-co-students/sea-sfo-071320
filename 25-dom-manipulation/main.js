// greetRepeatedly();
randomBackground();
generateCharacters();
addExclamationToFriday();
scareAfterTimeout();
generateTimestamp();

// Logging to the console
function greetRepeatedly() {
  setInterval(function () {
    console.log('hello');
  }, 2000);
}

// Changing style
function randomBackground() {
  const bodyEl = document.querySelector('body');
  bodyEl.style.background = 'tomato';
}

// Creating elements and appending to the DOM
function generateCharacters() {
  const characters = [
    'SpongeBob SquarePants',
    'Squidward Tentacles',
    'Patrick Star',
    'Mr. Krabs',
    'Sandy Cheeks',
  ];
  const list = document.getElementById('spongebob');

  for (let i = 0; i < characters.length; i++) {
    const character = characters[i];
    const listEl = document.createElement('li');
    listEl.className = 'character';
    // listEl.innerHTML = character;
    listEl.textContent = character;

    list.append(listEl);
  }
}

// Changing the textContent
function addExclamationToFriday() {
  const days = document.querySelectorAll('#days li');
  // console.log(document.querySelector('[name=test]'))

  for (let i = 0; i < days.length; i++) {
    const element = days[i];

    if (element.textContent === 'Friday') {
      element.textContent += '!!!';
    }
  }
}

function scareAfterTimeout() {
  setTimeout(function () {
    document.getElementById('scare').append('BOO!');
  }, 3000);
}

function generateTimestamp() {
  const time = document.getElementById('current-time');
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  time.textContent = `${hours}:${minutes}:${seconds}`;
}
