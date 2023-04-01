import axios from 'axios';
import Notiflix from 'notiflix';
import FetchFilms from './fetch-films';

const API_KEY = '959330b1b48c95e1fde96a992bbede29';
const URL = 'https://api.themoviedb.org/';

export let nextPage = 1;
const refs = {
  form: document.querySelector('.js-header__form'),
  input: document.querySelector('.js-header__input'),
  inputError: document.querySelector('.header__js-input-error'),
};

export const onSearch = () => {
  Notiflix.Loading.circle();
  refs.inputError.classList.add('visually-hidden');

  const search = new FetchFilms(
    `${URL}/3/search/movie?api_key=${API_KEY}&query=${refs.input.value}&page=${nextPage}`,
    document.querySelector('.js-cards-list')
  );

  document.querySelector('.js-cards-list').innerHTML = '';

  const load = async () => {
    try {
        await search.getFilms();
    }
    catch (error) {
        console.log(error)
    }
    finally {
      if (search.ids.length === 0) {
        refs.inputError.classList.remove('visually-hidden');
      }
    }
  }
  load();
  Notiflix.Loading.remove();
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  refs.input.value == ''
    ? refs.inputError.classList.remove('visually-hidden')
    : onSearch();
});
