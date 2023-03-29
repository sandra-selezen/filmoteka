import axios from 'axios';
import Notiflix from 'notiflix';

const API_KEY = '959330b1b48c95e1fde96a992bbede29';
const URL = 'https://api.themoviedb.org/';

const refs = {
  form: document.querySelector('form'),
  input: document.querySelector('input'),
};

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

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  refs.input.value == ''
    ? Notiflix.Notify.failure('Please enter a keyword')
    : onSearch();
});
