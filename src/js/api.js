import axios from "axios";

const API_KEY = '959330b1b48c95e1fde96a992bbede29';
const URL = 'https://api.themoviedb.org/';

/*
// refs for keysearch, will be changed
const refs = {
  form: document.querySelector('form'),
  input: document.querySelector('input'),
};
*/

/*
// function for keyword search, will be changed

const onSearch = async e => {
  Notiflix.Loading.circle();
  try {
    const response = await axios.get(
      `${URL}/3/search/movie?api_key=${API_KEY}&query=${refs.input.value}`
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  } finally {
    Notiflix.Loading.remove();
  }
};
*/

/*
// event listener for search input, will be changed
refs.form.addEventListener('submit', e => {
  e.preventDefault();
  refs.input.value == ''
    ? Notiflix.Notify.failure('Please enter a keyword')
    : onSearch();
});
*/
