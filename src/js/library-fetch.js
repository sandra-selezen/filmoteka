import CreatePagination from './pagination';
import GetFilmsFromLocalStorage from './get-films-from-local-storage';
// import ModalLibrary from './modal-library';

const libraryMarkupRef = document.querySelector('.js-cards-list-library');
const modalMarkupRef = document.querySelector('.js-modal-card');
// const modalRef = document.querySelector('.js-cards-list-library');

export const getWatched = new GetFilmsFromLocalStorage(
  JSON.parse(localStorage.getItem('watched')),
  libraryMarkupRef
);

export const getQueued = new GetFilmsFromLocalStorage(
  JSON.parse(localStorage.getItem('queue')),
  libraryMarkupRef
);

export default function initializeLibrary() {
  const watchedButtonRef = document.querySelector('.js-watched');
  const queueButtonRef = document.querySelector('.js-queue');

  watchedButtonRef.addEventListener('click', doWatchedLibrary);
  queueButtonRef.addEventListener('click', doQueueLibrary);

  doWatchedLibrary();
}

function doWatchedLibrary() {
  getWatched.getFilms();
  const watchedPagination = new CreatePagination(getWatched);
  watchedPagination.activatePagination();
}

function doQueueLibrary() {
  getQueued.getFilms();
  const queuedPagination = new CreatePagination(getQueued);
  queuedPagination.activatePagination();
}



// const modalLibrary = new ModalLibrary(modalMarkupRef);
// modalLibrary.id = 76600;
// modalLibrary.createModal();

// function openModal(event) {
//   console.log(event.target);
// }