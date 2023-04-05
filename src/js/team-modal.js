const open = document.querySelector('.footer__link');
const close = document.querySelector('.team-modal__btn--close');
const body = document.querySelector('body');
const backdrop = document.querySelector('.backdrop');
// const modal = document.querySelector("[data-modal-team]");
// const modals = document.querySelector(".team-modal");

open.addEventListener('click', onTeamModalClick);
close.addEventListener('click', onCloseModalClick);
backdrop.addEventListener('click', onBackdropClick);
// modal.addEventListener("click", closeModal);

function onTeamModalClick() {
  backdrop.classList.remove('visually-hidden');
  body.classList.add('stop-scroll');
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
  backdrop.classList.add('visually-hidden');
  body.classList.remove('stop-scroll');
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
  if (event.target === backdrop) {
    onCloseModalClick();
  }
}
