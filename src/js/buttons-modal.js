import { movieInfo } from './fetch-one-film';

const URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '959330b1b48c95e1fde96a992bbede29';

const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';

function saveToWatched() {
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
    localStorage.setItem(WATCHED_KEY, JSON.stringify(watchedArray));
  }
}

function saveToQueue() {
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
    // event.currentTarget.setAttribute('style', 'background-color: #fff');
  } else {
    removeFromWatched();
    event.currentTarget.textContent = 'Add to watched';
    // event.currentTarget.setAttribute('style', 'background-color: #ff6b01');
  }
}

function onQueueModalButton(event) {
  const currentButton = event.currentTarget.textContent;

  if (currentButton === 'Add to queue') {
    saveToQueue();
    event.currentTarget.textContent = 'Remove from queue';
    // event.currentTarget.setAttribute('style', 'background-color: #ff6b01');
  } else {
    removeFromQueue();
    event.currentTarget.textContent = 'Add to queue';
    // event.currentTarget.setAttribute('style', 'background-color: #fff');
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

// оранжевая - modal-card__watched-btn #ff6b01
// белая - modal-card__queue-btn #fff

// watched - modal-card__watched-btn js-add-watched-btn
// queue - modal-card__queue-btn js-add-queue-btn
