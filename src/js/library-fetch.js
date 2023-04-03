import CreatePagination from './pagination';
import GetFilmsFromLocalStorage from './get-films-from-local-storage';

const SEARCH_URL = 'https://api.themoviedb.org/3/movie/';
const libraryMarkupRef = document.querySelector('.js-cards-list-library');

export const getWatched = new GetFilmsFromLocalStorage(
  JSON.parse(localStorage.getItem('watched')),
  SEARCH_URL,
  libraryMarkupRef
);

export const getQueued = new GetFilmsFromLocalStorage(
  JSON.parse(localStorage.getItem('queue')),
  SEARCH_URL,
  libraryMarkupRef
);

export default async function initializeLibrary() {
  const watchedButtonRef = document.querySelector('.js-watched');
  const queueButtonRef = document.querySelector('.js-queue');

  watchedButtonRef.addEventListener('click', doWatchedLibrary);
  queueButtonRef.addEventListener('click', doQueueLibrary);

  doWatchedLibrary();
}

async function doWatchedLibrary() {
  await getWatched.getFilms();
  const watchedPagination = new CreatePagination(getWatched);
  watchedPagination.activatePagination();
}

async function doQueueLibrary() {
  await getQueued.getFilms();
    const queuedPagination = new CreatePagination(getQueued);
  queuedPagination.activatePagination();
}
