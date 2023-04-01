import FetchFilms from './fetch-films';
// import { nextPage } from './api';

let nextPage = 1;
const API_KEY = '959330b1b48c95e1fde96a992bbede29';
const URL = 'https://api.themoviedb.org/';
const URL_PARAMS =
  `https://api.themoviedb.org/3/trending/movie/day?api_key=959330b1b48c95e1fde96a992bbede29&page=${nextPage}`;

const fetchFilms = new FetchFilms(
  URL_PARAMS,
  document.querySelector('.js-cards-list')
);

fetchFilms.getFilms();
