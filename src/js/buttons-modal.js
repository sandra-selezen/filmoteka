import { load, save, removeStore } from './localStorage';
import fetchData from './fetch-one-film';
import getOneMovieInfo from './fetch-one-film';
// import { movieInfo } from './fetch-one-film';
import { movieInfo } from './fetch-one-film';
import { settingsOpportunities } from './firebase/log-actions';
import { Notify } from 'notiflix';

const URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '959330b1b48c95e1fde96a992bbede29';

const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';

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

// function checkInStore(key, movieInfo) {
//   const storage = load(key);
//   const filmCurrent = movieInfo;
//   const filmIncluded = storage.find(film => film.id === filmCurrent.id);

//   if (filmIncluded) {
//     console.log('film included')
//   }
// }

// ------------------------------------------ //

// function saveToWatched(event) {
  // console.log('to watched!');
  
  // if (!settingsOpportunities.isEntry) {
  //   Notify.failure('Please sign up or log in to access advanced features');
  //   return
  // };

export default function saveToWatched() {
    console.log('to watched!');
  
  if (!settingsOpportunities.isEntry) {
    Notify.failure('Please sign up or log in to access advanced features');
    return
  };
  const currentLocalStorageContent = JSON.parse(
    localStorage.getItem(WATCHED_KEY)
  );
  console.log(currentLocalStorageContent);
  const filmId = document.querySelector('.js-modal-card img').dataset.id;
  const watchedArray = [];

  if (currentLocalStorageContent) {
    const filmIncluded = currentLocalStorageContent.find(
      filmData => filmData.id === movieInfo.id
    );
    if (!filmIncluded) {
      currentLocalStorageContent.push(movieInfo);
      localStorage.setItem(
        WATCHED_KEY,
        JSON.stringify(currentLocalStorageContent)
      );
    }
    {
      return;
    }
  } else {
    watchedArray.push(movieInfo);
    console.log(watchedArray);
    localStorage.setItem(WATCHED_KEY, JSON.stringify(watchedArray));
  }

}

// function saveToQueue(event) {
  // console.log('to quevue!');

  // if (!settingsOpportunities.isEntry) {
  //   Notify.failure('Please sign up or log in to access advanced features');
  //   return
  // };

function saveToQueue() {
  console.log('to quevue!');

  if (!settingsOpportunities.isEntry) {
    Notify.failure('Please sign up or log in to access advanced features');
    return
  };
  const currentLocalStorageContent = JSON.parse(
    localStorage.getItem(QUEUE_KEY)
  );
  console.log(currentLocalStorageContent);
  const filmId = document.querySelector('.js-modal-card img').dataset.id;
  const queueArray = [];

  if (currentLocalStorageContent) {
    const filmIncluded = currentLocalStorageContent.find(
      filmData => filmData.id === movieInfo.id
    );
    if (!filmIncluded) {
      currentLocalStorageContent.push(movieInfo);
      localStorage.setItem(
        QUEUE_KEY,
        JSON.stringify(currentLocalStorageContent)
      );
    }
    {
      return;
    }
  } else {
    queueArray.push(movieInfo);
    console.log(queueArray);
    localStorage.setItem(QUEUE_KEY, JSON.stringify(queueArray));
  }

}

export default function addEventListenersOnButtons() {
  const watchedButton = document.querySelector('.js-add-watched-btn');
  const queueButton = document.querySelector('.js-add-queue-btn');

  if (checkInWatchedStore()) {
    watchedButton.textContent = 'Remove from watched';
  } else {
    watchedButton.textContent = 'Add to watched';
  }
    if (checkInQueueStore()) {
    queueButton.textContent = 'Remove from queue';
  } else {
    queueButton.textContent = 'Add to queue';
  }  

  watchedButton.addEventListener('click', onWatchedModalButton);
  queueButton.addEventListener('click', onQueueModalButton);
}

function checkInWatchedStore() {
    const currentLocalStorageContent = JSON.parse(
    localStorage.getItem(WATCHED_KEY)
  );
  console.log(currentLocalStorageContent);
  const filmId = document.querySelector('.js-modal-card img').dataset.id;
  const watchedArray = [];

  if (currentLocalStorageContent) {
    const filmIncluded = currentLocalStorageContent.find(
      filmData => filmData.id === movieInfo.id
    );
    return filmIncluded;
  } else {
    return false;
  }
}

function checkInQueueStore() {
    const currentLocalStorageContent = JSON.parse(
    localStorage.getItem(QUEUE_KEY)
  );
  console.log(currentLocalStorageContent);
  const filmId = document.querySelector('.js-modal-card img').dataset.id;
  const queueArray = [];

  if (currentLocalStorageContent) {
    const filmIncluded = currentLocalStorageContent.find(
      filmData => filmData.id === movieInfo.id
    );
    return filmIncluded;
  } else {
    return false;
  }
}

function onWatchedModalButton(event) {
  const currentButton = event.currentTarget.textContent;

  if (currentButton === 'Add to watched') {
    saveToWatched();
    event.currentTarget.textContent = 'Remove from watched';
  } else {
    removeFromWatched();
    event.currentTarget.textContent = 'Add to watched';
  }
}

function onQueueModalButton(event) {
    const currentButton = event.currentTarget.textContent;

  if (currentButton === 'Add to queue') {
    saveToQueue();
    event.currentTarget.textContent = 'Remove from queue';
  } else {
    removeFromQueue()
    event.currentTarget.textContent = 'Add to queue';
  }
}

function removeFromWatched() {
  const filmId = document.querySelector('.js-modal-card img').dataset.id;
  const films = localStorage.getItem('watched');
  const parsedFilms = JSON.parse(films);

  const indexOfTheFilm = parsedFilms.findIndex(film => `${film.id}` === filmId);

  parsedFilms.splice(indexOfTheFilm, 1);

  localStorage.setItem('watched', JSON.stringify(parsedFilms));
}

function removeFromQueue() {
  const filmId = document.querySelector('.js-modal-card img').dataset.id;
  const films = localStorage.getItem('queue');
  const parsedFilms = JSON.parse(films);

  const indexOfTheFilm = parsedFilms.findIndex(film => `${film.id}` === filmId);

  parsedFilms.splice(indexOfTheFilm, 1);

  localStorage.setItem('queue', JSON.stringify(parsedFilms));
}