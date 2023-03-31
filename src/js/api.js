import axios from 'axios';
import Notiflix from 'notiflix';
import FetchFilms from './fetch-films';

const API_KEY = '959330b1b48c95e1fde96a992bbede29';
const URL = 'https://api.themoviedb.org/';

// const refs = {
//   form: document.querySelector('form'),
//   input: document.querySelector('input'),
// };

// const onSearch = () => {
//   Notiflix.Loading.circle();
//   const search = new FetchFilms(
//     `${URL}/3/search/movie?api_key=${API_KEY}&query=${refs.input.value}`,
//     document.querySelector('.js-cards-list')
//   );
//   document.querySelector('.js-cards-list').innerHTML = '';
//   search.getFilms();
//   Notiflix.Loading.remove();
// };

// // event listener for search input, will be changed
// refs.form.addEventListener('submit', e => {
//   e.preventDefault();
//   refs.input.value == ''
//     ? Notiflix.Notify.failure('Please enter a keyword')
//     : onSearch();
// });