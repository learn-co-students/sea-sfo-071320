document.addEventListener('DOMContentLoaded', function () {
  // listenToAlertMeButtonClick();
  listenToFormSubmit();
  listenToButtonClicks();
});

function listenToButtonClicks() {
  const helicopterParent = document.getElementById('helicopter-parent');

  helicopterParent.addEventListener('click', function (e) {
    const dataName = e.target.dataset.name;

    if (dataName === 'alert') {
      alert('potatoes!');
    } else if (dataName === 'log') {
      console.log('hello');
    } else if (dataName === 'error') {
      console.error('warning');
    }
  });
}

function listenToFormSubmit() {
  const commentForm = document.getElementById('comment-form');
  commentForm.addEventListener('submit', handleCommentFormSubmit);
}

function handleCommentFormSubmit(e) {
  e.preventDefault();

  // const commentInput = document.getElementById('new-comment');
  // const commentInput = e.target.querySelector('input')
  const commentInput = e.target.comment;
  const commentValue = commentInput.value;

  const commentEl = document.createElement('p');
  commentEl.textContent = commentValue;

  const commentsContainer = document.getElementById('comments-container');
  commentsContainer.appendChild(commentEl);

  commentInput.value = '';
}

function listenToAlertMeButtonClick() {
  const myButton = document.querySelector('button[data-name=alert]');

  myButton.addEventListener('click', function (event) {
    alert('Warning!');
  });
}
