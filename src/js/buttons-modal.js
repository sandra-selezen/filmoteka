import { load, save, removeStore } from './localStorage';
import fetchData from './fetch-one-film';
import getOneMovieInfo from './fetch-one-film';
import { movieInfo } from './fetch-one-film';
import { settingsOpportunities } from './firebase/log-actions';
import { Notify } from 'notiflix';

const URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '959330b1b48c95e1fde96a992bbede29';

const WATCHED_KEY = 'Watched';
const QUEUE_KEY = 'Queue';

// const movieInfo = {
//   id: id,
//   poster: posterPath,
//   originalTitle: original_title,
//   title,
//   overview,
//   genresMovie,
//   popularity: popularity.toFixed(1),
//   voteAverage: vote_average.toFixed(1),
//   voteCount: vote_count,
// };

// checkInStore(WATCHED_KEY, movieInfo, addToWatchedBtn, 'Added to watched');
// checkInStore(QUEUE_KEY, movieInfo, addToQueueBtn, 'Added to queue');



// function onModalBtnWatchedClick(event) {
//   event.preventDefault();
//   event.target.textContent = 'Added to watched';
//   event.target.disabled = true;

//   save(WATCHED_KEY, event.target.dataset.id);
// }

// function onModalBtnQueueClick(event) {
//   event.preventDefault();
//   event.target.textContent = 'Added to queue';
//   event.target.disabled = true;

//   save(QUEUE_KEY, event.target.dataset.id);
// }
// export default function addEventListenersOnButtons() {
//   const addToWatchedBtn = document.querySelector('.modal-card__watched-btn');
//   const addToQueueBtn = document.querySelector('.modal-card__queue-btn');

// addToWatchedBtn.addEventListener('click', onModalBtnWatchedClick);
// addToQueueBtn.addEventListener('click', onModalBtnQueueClick);
// }

// function checkInStore(key, movieInfo, btn, btnText) {
//   const storage = load(key);
//   const filmCurrent = movieInfo;
//   const filmIncluded = storage.find(film => film.id === filmCurrent.id);

//   if (filmIncluded) {
//     btn.textContent = `${btnText}`;
//     btn.disabled = true;
//   }
// }

// ------------------------------------------ //

function saveToWatched(event) {
  console.log('to watched!');
  
  if (!settingsOpportunities.isEntry) {
    Notify.failure('Please sign up or log in to access advanced features');
    return
  };

  const filmId = document.querySelector('.js-modal-card img').dataset.id;
  if (localStorage.getItem('watched')) {
    const watched = localStorage.getItem('watched');
    const parsedWatched = JSON.parse(watched);
          event.preventDefault();
  event.target.textContent = 'Added to watched';
    event.target.disabled = true;
    if (parsedWatched.includes(filmId)) {
      return;
    }
    parsedWatched.push(filmId);
    localStorage.setItem('watched', JSON.stringify(parsedWatched));
      event.preventDefault();
  event.target.textContent = 'Added to watched';
    event.target.disabled = true;
  } else {
    localStorage.setItem('watched', JSON.stringify([filmId]));
  }
}

function saveToQueue(event) {
  console.log('to quevue!');

  if (!settingsOpportunities.isEntry) {
    Notify.failure('Please sign up or log in to access advanced features');
    return
  };

  const filmId = document.querySelector('.js-modal-card img').dataset.id;
    event.preventDefault();
  event.target.textContent = 'Added to queue';
  event.target.disabled = true;
  if (localStorage.getItem('queue')) {
    const queue = localStorage.getItem('queue');
    const parsedQueue = JSON.parse(queue);
    if (parsedQueue.includes(filmId)) {
      return;
    }
    parsedQueue.push(filmId);
    localStorage.setItem('queue', JSON.stringify(parsedQueue));
  } else {
    localStorage.setItem('queue', JSON.stringify([filmId]));
  }
}

export default function addEventListenersOnButtons() {
  const watchedButton = document.querySelector('.modal-card__watched-btn');
  const queueButton = document.querySelector('.modal-card__queue-btn');

  watchedButton.addEventListener('click', saveToWatched);
  queueButton.addEventListener('click', saveToQueue);
}
