import axios from 'axios';
import Notiflix from 'notiflix';
import defaultImage from '/src/images/no-poster.png';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import fetchVideoKey from './fetchVideoKey';
import addEventListenersOnButtons from './buttons-modal';

export let movieInfo = {};

const body = document.querySelector('body');

const btnCloseModalMovie = document.querySelector('.js-btn-close-modal');
const cardMovie = document.querySelector('.js-modal-card');
const backdropMovie = document.querySelector('.js-backdrop-movie');
const buttonUp = document.querySelector('.up');
//-----слухачі подій-----

if (document.querySelector('.js-cards-list')) {
  const mainPageListMovies = document.querySelector('.js-cards-list');
  mainPageListMovies.addEventListener('click', onOpenModalMovieClick);
} else {
  const mainPageListMovies = document.querySelector('.js-cards-list-library');
  mainPageListMovies.addEventListener('click', onOpenModalMovieClick);
}
//Swiper modal
if (document.querySelector('.js-swiper')) {
  const mainPageListMovies = document.querySelector('.js-swiper');
  mainPageListMovies.addEventListener('click', onOpenModalMovieClick);
}
// const mainPageListMovies = document.querySelector('.js-cards-list');
// mainPageListMovies.addEventListener('click', onOpenModalMovieClick);

btnCloseModalMovie.addEventListener('click', onCloseModalClick);

document.addEventListener('keydown', onEscKeyDownModal);

function onEscKeyDownModal(event) {
  if (event.code === 'Escape') {
    onCloseModalClick();
  }
}

backdropMovie.addEventListener('click', event => {
  if (event.target === backdropMovie) {
    onCloseModalClick();
  }
});

//-----функції------
// Виніс змінну для idMovie для трейлеру
let idMovie = undefined;
async function onOpenModalMovieClick(event) {
  // отримує id конкретного фільму
  const perentNodLi = event.target.closest('li');
  idMovie = perentNodLi?.dataset?.id;
  // перевірка що користувач клікнув саме на картку фільму
  if (idMovie === undefined) {
    return;
  }
  // чистимо модалку перед рендером
  cardMovie.innerHTML = '';
  // показує спінер
  Notiflix.Loading.circle();
  // показує модалку
  backdropMovie.classList.remove('is-hidden');
  body.classList.add('stop-scroll');
  // отримання інфо про конкретний фільм
  const response = await fetchData(idMovie);
  // console.log(response.data);
  movieInfo = getOneMovieInfo(response.data);

  // відображення модалки з інфо про фільм
  renderModalMovieInfo(movieInfo);
  if (document.querySelector('.js-cards-list')) {
    addEventListenersOnButtons();
  } else {
    addEventListenersOnButtons();
  }

  // ховає спінер
  Notiflix.Loading.remove();
  // слухач для трейлера
  const iframeRef = document.querySelector('.js-iframe');
  iframeRef.addEventListener('click', onClickYouTube);
  buttonUp.style.display = 'none';
}

// закриття модалки фільму
function onCloseModalClick() {
  backdropMovie.classList.add('is-hidden');
  body.classList.remove('stop-scroll');
  buttonUp.style.display = 'block';
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
  release_date,
}) {
  const posterPath = poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : defaultImage;

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
    release_date: release_date,
  };

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
  <a class="link-trailer js-iframe">
  <svg height="130" width="130"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 461.001 461.001" xml:space="preserve"><path fill:#f61c0d class="icon-youtube" d="M365.257 67.393H95.744C42.866 67.393 0 110.259 0 163.137v134.728c0 52.878 42.866 95.744 95.744 95.744h269.513c52.878 0 95.744-42.866 95.744-95.744V163.137c0-52.878-42.866-95.744-95.744-95.744zm-64.751 169.663-126.06 60.123c-3.359 1.602-7.239-.847-7.239-4.568V168.607c0-3.774 3.982-6.22 7.348-4.514l126.06 63.881c3.748 1.899 3.683 7.274-.109 9.082z"/></svg></a>
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
    <button class="modal-card__watched-btn js-add-watched-btn" data-id="${id}" data-name="watch">
      Add to watched
    </button>
    <button class="modal-card__queue-btn js-add-queue-btn" data-id="${id}" data-name="queue">
      Add to queue
    </button>
  </div>
</div>`;

  cardMovie.insertAdjacentHTML('beforeend', markup);
}

// Trailer

function onClickYouTube() {
  fetchVideoKey(idMovie).then(key => {
    document.removeEventListener('keydown', onEscKeyDownModal);
    const instance = basicLightbox.create(
      `
		<iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" frameborder="0" allowfullscreen></iframe>
	`,
      {
        onClose: () => {
          window.removeEventListener('keydown', onEscKeyDown);
          document.addEventListener('keydown', onEscKeyDownModal);
        },
      }
    );
    instance.show();

    window.addEventListener('keydown', onEscKeyDown);
    function onEscKeyDown(event) {
      if (event.code === 'Escape') {
        instance.close();
      }
    }
  });
}
