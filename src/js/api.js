import Notiflix from 'notiflix';
import { fetchFilms } from './popular-films-fetch';
import CreatePagination from './pagination';

const API_KEY = '959330b1b48c95e1fde96a992bbede29';
const URL = 'https://api.themoviedb.org/';

const refs = {
  form: document.querySelector('.js-header__form'),
  input: document.querySelector('.js-header__input'),
  inputError: document.querySelector('.header__js-input-error'),
  pages: document.querySelector('.tui-pagination'),
  notFound: document.querySelector('.not-found'),
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
      const apiPagination = new CreatePagination(fetchFilms, 'searchByWord');
      apiPagination.activatePagination();
    }
    catch (error) {
        console.log(error)
    }
    finally {
      refs.notFound.classList.add('visually-hidden');
      refs.pages.classList.remove('visually-hidden');
      if (fetchFilms.ids.length === 0) {
        refs.inputError.classList.remove('visually-hidden');
        refs.pages.classList.add('visually-hidden');
        refs.notFound.classList.remove('visually-hidden');
      }
    }
  }
  load();
  Notiflix.Loading.remove();
};

if (refs.input) {
  refs.form.addEventListener('submit', e => {
    e.preventDefault();
    refs.input.value == ''
      ? refs.inputError.classList.remove('visually-hidden')
      : onSearch();
  });

}

