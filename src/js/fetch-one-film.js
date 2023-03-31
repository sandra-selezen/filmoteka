import axios from 'axios';

const listMovies = document.querySelector('.js-cards-list');
const btnCloseModalMovie = document.querySelector('.js-btn-close-modal');
const cardMovie = document.querySelector('.js-modal-card');
const backdropMovie = document.querySelector('.js-backdrop-movie');

//-----слухачі подій-----

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

//-----функції------

async function onOpenModalMovieClick(event) {
  // показую модалку
  backdropMovie.classList.remove('is-hidden');
  // отримую id конкретного фільму
  const perentNodLi = event.target.closest('li');
  const idMovie = perentNodLi.dataset.id;
  
  const response = await fetchData('124046');
  console.log(response.data);
}

function onCloseModalClick() {
  backdropMovie.classList.add('is-hidden');
}

// функція запиту на бекенд
async function fetchData(idMovie) {
  const API_URL = `https://api.themoviedb.org/3/movie/${idMovie}`;
  // параметри запиту на бекенд
  const options = {
    params: {
      api_key: '959330b1b48c95e1fde96a992bbede29',
      language: 'en-US',
    },
  };
  try {
    const response = await axios.get(API_URL, options);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}
