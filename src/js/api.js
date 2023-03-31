import axios from 'axios';
import Notiflix from 'notiflix';
import FetchFilms from './fetch-films';

const API_KEY = '959330b1b48c95e1fde96a992bbede29';
const URL = 'https://api.themoviedb.org/';

const refs = {
  form: document.querySelector('.js-header__form'),
  input: document.querySelector('.js-header__input'),
  inputError: document.querySelector('.header__js-input-error'),
};

const onSearch = () => {
  Notiflix.Loading.circle();
  refs.inputError.classList.add('visually-hidden');

  const search = new FetchFilms(
    `${URL}/3/search/movie?api_key=${API_KEY}&query=${refs.input.value}`,
    document.querySelector('.js-cards-list')
  );

  document.querySelector('.js-cards-list').innerHTML = '';

  search.getFilms();

  Notiflix.Loading.remove();

  if (document.querySelector('.js-cards-list').innerHTML == '') {
    refs.inputError.classList.remove('visually-hidden');
  }
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  refs.input.value == ''
    ? refs.inputError.classList.remove('visually-hidden')
    : onSearch();
});
