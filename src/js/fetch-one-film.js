import axios from 'axios';
import Notiflix from 'notiflix';

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
  cardMovie.innerHTML = '';
  // показує спінер
  Notiflix.Loading.circle();
  // показує модалку
  backdropMovie.classList.remove('is-hidden');
  // отримує id конкретного фільму
  const perentNodLi = event.target.closest('li');
  const idMovie = perentNodLi.dataset.id;

  const response = await fetchData(idMovie);
  // console.log(response.data);
  const movieInfo = getOneMovieInfo(response.data);

  renderModalMovieInfo(movieInfo);
  // ховає спінер
  Notiflix.Loading.remove();
}

// закриття модалки фільму
function onCloseModalClick() {
  backdropMovie.classList.add('is-hidden');
}

// функція запиту на бекенд за idMovie
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

// підготовка інформації для рендеру модального вікна з фільмом
function getOneMovieInfo({
  id,
  poster_path,
  original_title,
  title,
  genres,
  popularity,
  overview,
  vote_average,
  vote_count,
}) {
  const posterPath = poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : `https://astoriamuseums.org/wp-content/uploads/2020/10/OFM-poster-not-available.png`;

  let genresMovie = [];
  genres.forEach(genre => {
    genresMovie.push(genre.name);
  });
  genresMovie = genresMovie.join(', ');

  const movieInfo = {
    id: id,
    poster: posterPath,
    originalTitle: original_title,
    title,
    overview,
    genresMovie,
    popularity: popularity.toFixed(1),
    voteAverage: vote_average.toFixed(1),
    voteCount: vote_count,
  };
  // console.log(movieInfo);
  return movieInfo;
}

// рендер модального вікна з фільмом
function renderModalMovieInfo(movieInfo) {
  // деструктуризація данних з функції getOneMovieInfo
  const {
    id,
    poster,
    originalTitle,
    title,
    overview,
    genresMovie,
    popularity,
    voteAverage,
    voteCount,
  } = movieInfo;
  
  const markup = `<div class="modal-card__thumb-left">
  <img
    class="modal-card__img"
    src="${poster}"
    alt="${title}"
    data-id="${id}"
    />
  <a class="link-trailer">Trailer</a>
</div>
<div class="modal-card__thumb-right">
  <p class="thumb-right__title">${title}</p>
  <div class="thumb-right__details">
    <ul class="thumb-right__name-details">
      <li class="thumb-right__name-item">Vote / Votes</li>
      <li class="thumb-right__name-item">Popularity</li>
      <li class="thumb-right__name-item">Original Title</li>
      <li class="thumb-right__name-item">Genre</li>
    </ul>
    <ul class="thumb-right__value-details">
      <li class="thumb-right__value-item">
        <span class="thumb-right__vote">${voteAverage}</span>
        <span class="thumb-right__delimiter">/</span>
        <span class="thumb-right__votes">${voteCount}</span>
      </li>
      <li class="thumb-right__value-item">${popularity}</li>
      <li class="thumb-right__value-item">
        <span>${originalTitle}</span>
      </li>
      <li class="thumb-right__value-item">${genresMovie}</li>
    </ul>
  </div>
  <p class="thumb-right__about">About</p>
  <p class="thumb-right__overview">${overview}</p>

  <div class="modal-card__btn-wrap">
    <button class="modal-card__watched-btn" data-id="${id}" data-name="watch">
      Add to watched
    </button>
    <button class="modal-card__queue-btn" data-id="${id}" data-name="queue">
      Add to queue
    </button>
  </div>
</div>`;

  cardMovie.insertAdjacentHTML('beforeend', markup);
}
