import { load, save, removeStore } from './localStorage';

const WATCHED_KEY = 'Watched';
const QUEUE_KEY = 'Queue';

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

const addToWatchedBtn = document.querySelector('.modal-card__watched-btn');
const addToQueueBtn = document.querySelector('.modal-card__queue-btn');

checkInStore(WATCHED_KEY, movieInfo, addToWatchedBtn, 'Added to watched');
checkInStore(QUEUE_KEY, movieInfo, addToQueueBtn, 'Added to queue');

addToWatchedBtn.addEventListener('click', onModalBtnWatchedClick);
addToQueueBtn.addEventListener('click', onModalBtnQueueClick);

function onModalBtnWatchedClick(event) {
  event.preventDefault();
  event.target.textContent = 'Added to watched';
  event.target.disabled = true;

  save(WATCHED_KEY, event.target.dataset.id);
}

function onModalBtnQueueClick(event) {
  event.preventDefault();
  event.target.textContent = 'Added to queue';
  event.target.disabled = true;

  save(QUEUE_KEY, event.target.dataset.id);
}

function checkInStore(key, movieInfo, btn, btnText) {
  const storage = load(key);
  const filmCurrent = movieInfo;
  const filmIncluded = storage.find(film => film.id === filmCurrent);

  if (filmIncluded) {
    btn.textContent = `${btnText}`;
    btn.disabled = true;
  }
}
