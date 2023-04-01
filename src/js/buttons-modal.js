import { load, save, removeStore } from './localStorage';

const addToWatchedBtn = document.querySelector('.modal-card__watched-btn');
const addToQueueBtn = document.querySelector('.modal-card__queue-btn');

addToWatchedBtn.addEventListener('click', onModalBtnWatchedClick);
addToQueueBtn.addEventListener('click', onModalBtnQueueClick);

function onModalBtnWatchedClick(event) {
  event.preventDefault();
  event.target.textContent = 'Added to watched';
  event.target.disabled = true;

  save(key, event.target.dataset.id);
}

function onModalBtnQueueClick(event) {
  event.preventDefault();
  event.target.textContent = 'Added to queue';
  event.target.disabled = true;

  save(key, event.target.dataset.id);
}
/*як правильно прописати змінну key, щоб записалося в WATCHED ?
по типу key = 'KEY-WATCHED'  'KEY_QUEUE*/
