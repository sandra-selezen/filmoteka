import CreatePagination from './pagination';
import GetFilmsFromLocalStorage from './get-films-from-local-storage';

const libraryMarkupRef = document.querySelector('.js-cards-list-library');
const modalMarkupRef = document.querySelector('.js-modal-card');
// const modalRef = document.querySelector('.js-cards-list-library');

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
    libraryMarkupRef
  );
  if (JSON.parse(localStorage.getItem('watched'))) {
    getWatched.getFilms();
    const watchedPagination = new CreatePagination(getWatched);
    watchedPagination.activatePagination();
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
    libraryMarkupRef
  );
  if (JSON.parse(localStorage.getItem('queue'))) {
    getQueued.getFilms();
    const queuedPagination = new CreatePagination(getQueued);
    queuedPagination.activatePagination();
  }
  document
    .querySelector('.js-watched')
    .setAttribute('class', 'library-btn disabled-btn js-watched');
  document
    .querySelector('.js-queue')
    .setAttribute('class', 'library-btn enabled-btn js-queue');
}

