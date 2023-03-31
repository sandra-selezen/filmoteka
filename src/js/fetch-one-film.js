const listMovies = document.querySelector('.js-cards-list');
const btnCloseModalMovie = document.querySelector('.js-btn-close-modal');
const cardMovie = document.querySelector('.js-modal-card');
const backdropMovie = document.querySelector('.js-backdrop-movie');

listMovies.addEventListener('click', onOpenModalMovieClick);
btnCloseModalMovie.addEventListener('click', onCloseModalClick);

document.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    onCloseModalClick();
  }
});

backdropMovie.addEventListener('click', event => {
  if (event.target === backdropMovie) {
    onCloseModalClick();
  }
});

function onOpenModalMovieClick(params) {
  backdropMovie.classList.remove('is-hidden');
}

function onCloseModalClick() {
  backdropMovie.classList.add('is-hidden');
}

function selectColor(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
}
