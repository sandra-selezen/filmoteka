import axios from 'axios';
import Notiflix from 'notiflix';
import { fetchFilms } from './popular-films-fetch';
import createPagination from './pagination';

const API_KEY = '959330b1b48c95e1fde96a992bbede29';
const URL = 'https://api.themoviedb.org/';

const refs = {
  form: document.querySelector('.js-header__form'),
  input: document.querySelector('.js-header__input'),
  inputError: document.querySelector('.header__js-input-error'),
};

export const onSearch = (nextPage=1) => {
  Notiflix.Loading.circle();
  refs.inputError.classList.add('visually-hidden');

  fetchFilms.url = `${URL}/3/search/movie?api_key=${API_KEY}&query=${refs.input.value}`;
  fetchFilms.page = nextPage;

  document.querySelector('.js-cards-list').innerHTML = '';

  const load = async () => {
    try {
      await fetchFilms.getFilms();
      createPagination('searchByWord');
    }
    catch (error) {
        console.log(error)
    }
    finally {
      if (fetchFilms.ids.length === 0) {
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
