import { refs } from './refs';

// const open = document.querySelector('.footer__link');
// const close = document.querySelector('.team-modal__btn--close');
// const body = document.querySelector('body');
// const backdrop = document.querySelector('.backdrop');
// const modal = document.querySelector("[data-modal-team]");
// const modals = document.querySelector(".team-modal");

refs.open.addEventListener('click', onTeamModalClick);
refs.close.addEventListener('click', onCloseModalClick);
refs.backdrop.addEventListener('click', onBackdropClick);
// modal.addEventListener("click", closeModal);

function onTeamModalClick() {
  refs.backdrop.classList.remove('visually-hidden');
  refs.body.classList.add('stop-scroll');
  window.addEventListener('keydown', onEscKeyDownModal);

  // modal.classList.toggle("visually-hidden");
  // modals.classList.toggle("visually-hidden");
  // const body = document.querySelector('body');
  // if (modal.classList.contains('visually-hidden')) {
  //   body.style.overflow = 'auto';
  // } else {
  //   body.style.overflow = 'hidden';
  // }
}

function onCloseModalClick() {
  window.removeEventListener('keydown', onEscKeyDownModal);
  refs.backdrop.classList.add('visually-hidden');
  refs.body.classList.remove('stop-scroll');
  // modal.classList.add("visually-hidden");
  // modals.classList.add("visually-hidden");

  // const body = document.querySelector('body');
  // body.style.overflow = 'auto';
}

function onEscKeyDownModal(event) {
  if (event.code === 'Escape') {
    onCloseModalClick();
  }
}

function onBackdropClick(event) {
  if (event.target === refs.backdrop) {
    onCloseModalClick();
  }
}
