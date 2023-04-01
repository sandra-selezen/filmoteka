import FetchFilms from './fetch-films';
// import { nextPage } from './api';

let nextPage = 3;
const API_KEY = '959330b1b48c95e1fde96a992bbede29';
const URL = 'https://api.themoviedb.org/';

export const fetchPopularFilms = (nextPage) => {
 const fetchFilms = new FetchFilms(
 `${URL}/3/trending/movie/day?api_key=${API_KEY}&page=${nextPage}`,
  document.querySelector('.js-cards-list')
);

fetchFilms.getFilms();
}

fetchPopularFilms(nextPage);
  
 