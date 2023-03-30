import FetchFilms from "./fetch-films";

const API_KEY = '959330b1b48c95e1fde96a992bbede29';
const URL = 'https://api.themoviedb.org/';
const URL_PARAMS =
  'https://api.themoviedb.org/3/trending/all/day?api_key=959330b1b48c95e1fde96a992bbede29';


const fetchFilms = new FetchFilms(URL_PARAMS);

fetchFilms.getFilms();
