import FetchFilms from './fetch-films';
import createPagination from './pagination';

const URL =
  'https://api.themoviedb.org/3/trending/movie/day?api_key=959330b1b48c95e1fde96a992bbede29';

export const fetchFilms = new FetchFilms(
  URL,
  document.querySelector('.js-cards-list')
);

initializeMainPage();

async function initializeMainPage() {
  await fetchFilms.getFilms();
  createPagination();
}
