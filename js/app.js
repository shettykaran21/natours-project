const popup = document.querySelector('.popup');
const cardContainer = document.querySelector('.card-container');

cardContainer.addEventListener('click', on);
popup.addEventListener('click', off);

function on(e) {
  if (e.target.classList.contains('popup-btn')) {
    popup.style.opacity = 1;
    popup.style.visibility = 'visible';
  }

  e.preventDefault();
}

function off() {
  popup.style.opacity = 0;
  popup.style.visibility = 'hidden';
}
