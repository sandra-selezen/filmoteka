export const refs = {
  // from fetch-one-film
  body: document.querySelector('body'),
  btnCloseModalMovie: document.querySelector('.js-btn-close-modal'),
  cardMovie: document.querySelector('.js-modal-card'),
  backdropMovie: document.querySelector('.js-backdrop-movie'),
  buttonUp: document.querySelector('.up'),

  // from api
  form: document.querySelector('.js-header__form'),
  input: document.querySelector('.js-header__input'),
  inputError: document.querySelector('.header__js-input-error'),
  pages: document.querySelector('.tui-pagination'),
  notFound: document.querySelector('.not-found'),

  // from buttons-modal
  // watchedButton: document.querySelector('.js-add-watched-btn'),
  // queueButton: document.querySelector('.js-add-queue-btn'),

  // from library-fetch
  libraryMarkupRef: document.querySelector('.js-cards-list-library'),
  modalMarkupRef: document.querySelector('.js-modal-card'),
  libraryContainer: document.querySelector('.library__container'),
  libraryTitle: document.querySelector('.library__title'),

  // from popular-films-fetch
  mainPageMarkupRef: document.querySelector('.js-cards-list'),

  // from team-modal
  open: document.querySelector('.footer__link'),
  close: document.querySelector('.team-modal__btn--close'),
  backdrop: document.querySelector('.backdrop'),
};
