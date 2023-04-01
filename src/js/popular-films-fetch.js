import FetchFilms from './fetch-films';
import { settingsPagination } from './pagination';

let nextPage = 1;
const API_KEY = '959330b1b48c95e1fde96a992bbede29';
const URL = 'https://api.themoviedb.org/';

export const fetchPopularFilms = (nextPage=1) => {
 const fetchFilms = new FetchFilms(
 `${URL}/3/trending/movie/day?api_key=${API_KEY}&page=${nextPage}`,
  document.querySelector('.js-cards-list')
);
  try {
    fetchFilms.getFilms();
    settingsPagination.requestType = 'popularFilm';
  } catch (error) {
    console.log(error);
  }
}

fetchPopularFilms(nextPage);
  
 