import Pagination from 'tui-pagination';
import CreatePagination from './pagination';
import FetchFilms from './fetch-films';
import initializeLibrary from './library-fetch';
import { refs } from './refs';

const URL =
  'https://api.themoviedb.org/3/trending/movie/day?api_key=959330b1b48c95e1fde96a992bbede29';

// const mainPageMarkupRef = document.querySelector('.js-cards-list');

export const fetchFilms = new FetchFilms(URL, refs.mainPageMarkupRef);

if (document.querySelector('.js-cards-list')) {
  initializeMainPage();
} else {
  initializeLibrary();
}

async function initializeMainPage() {
  await fetchFilms.getFilms();
  const mainPagePagination = new CreatePagination(fetchFilms);
  mainPagePagination.activatePagination();
}
