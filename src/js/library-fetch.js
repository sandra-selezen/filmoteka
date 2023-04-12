import CreatePagination from './pagination';
import GetFilmsFromLocalStorage from './get-films-from-local-storage';
import { refs } from './refs';

// const libraryMarkupRef = document.querySelector('.js-cards-list-library');
// const modalMarkupRef = document.querySelector('.js-modal-card');
// const libraryContainer = document.querySelector('.library__container');
// const libraryTitle = document.querySelector('.library__title');
export default function initializeLibrary() {
  const watchedButtonRef = document.querySelector('.js-watched');
  const queueButtonRef = document.querySelector('.js-queue');

  watchedButtonRef.addEventListener('click', doWatchedLibrary);
  queueButtonRef.addEventListener('click', doQueueLibrary);

  doWatchedLibrary();
}

function doWatchedLibrary() {
  const getWatched = new GetFilmsFromLocalStorage(
    JSON.parse(localStorage.getItem('watched')),
    refs.libraryMarkupRef
  );

  const storageIsNotEmpty = JSON.parse(localStorage.getItem('watched'));

  let storageCondition;
  if (`${storageIsNotEmpty}` === '') {
    storageCondition = 0;
  } else if (storageIsNotEmpty === null) {
    storageCondition = storageIsNotEmpty;
  } else {
    storageCondition = storageIsNotEmpty;
  }

  if (storageCondition) {
    refs.libraryContainer.setAttribute(
      'class',
      'library__container visually-hidden'
    );
  } else {
    refs.libraryContainer.setAttribute('class', 'library__container');
  }

  if (JSON.parse(localStorage.getItem('watched'))) {
    getWatched.getFilms();
    const watchedPagination = new CreatePagination(getWatched);
    watchedPagination.activatePagination();
  } else {
    refs.libraryMarkupRef.innerHTML = '';
  }
  document
    .querySelector('.js-watched')
    .setAttribute('class', 'library-btn enabled-btn js-watched');
  document
    .querySelector('.js-queue')
    .setAttribute('class', 'library-btn disabled-btn js-queue');
}

function doQueueLibrary() {
  const getQueued = new GetFilmsFromLocalStorage(
    JSON.parse(localStorage.getItem('queue')),
    refs.libraryMarkupRef
  );

  const qStorageIsNotEmpty = JSON.parse(localStorage.getItem('queue'));

  let qStorageConition;
  if (`${qStorageIsNotEmpty}` === '') {
    qStorageConition = 0;
  } else if (qStorageIsNotEmpty === null) {
    qStorageConition = qStorageIsNotEmpty;
  } else {
    qStorageConition = qStorageIsNotEmpty;
  }


  if (qStorageConition) {
    refs.libraryContainer.setAttribute(
      'class',
      'library__container visually-hidden'
    );
  } else {
    refs.libraryContainer.setAttribute('class', 'library__container');
  }

  if (JSON.parse(localStorage.getItem('queue'))) {
    getQueued.getFilms();
    const queuedPagination = new CreatePagination(getQueued);
    queuedPagination.activatePagination();
  } else {
    refs.libraryMarkupRef.innerHTML = '';
  }
  document
    .querySelector('.js-watched')
    .setAttribute('class', 'library-btn disabled-btn js-watched');
  document
    .querySelector('.js-queue')
    .setAttribute('class', 'library-btn enabled-btn js-queue');
}
