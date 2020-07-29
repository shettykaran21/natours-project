const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');
const popupClose = document.querySelector('.popup__close');
const cardContainer = document.querySelector('.card-container');

cardContainer.addEventListener('click', on);
popupClose.addEventListener('click', off);

function on(e) {
  if (e.target.classList.contains('popup-btn')) {
    popupContent.style.transform = 'translate(-50%, -50%) scale(1)';
    popup.style.opacity = 1;
    popup.style.visibility = 'visible';
  }

  e.preventDefault();
}

function off() {
  popup.style.opacity = 0;
  popup.style.visibility = 'hidden';
  popupContent.style.transform = 'translate(-50%, -50%) scale(0.3)';
}
