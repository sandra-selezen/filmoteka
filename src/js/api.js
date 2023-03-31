import axios from "axios";
import Notiflix from 'notiflix';
import { nextPage, totalPage, currentPage, startPagination } from "./pagination";

const API_KEY = '959330b1b48c95e1fde96a992bbede29';
const URL = 'https://api.themoviedb.org/';


// наступна необхідна нам сторінка
export let nextPage = 1;
// загальна кількість сторінок
export let totalPage = 10;
// поточна сторінка
export let currentPage = 1;
// Кількість елементів для малювання на сторінці
export let itemsPerPage1 = 20;
/*
// refs for keysearch, will be changed
const refs = {
  form: document.querySelector('form'),
  input: document.querySelector('input'),
};
*/


// function for keyword search, will be changed

export const onSearch = async (query) => {
  Notiflix.Loading.circle();
  try {
    const response = await axios.get(
      `${URL}/3/search/movie?api_key=${API_KEY}&query=${query}&page=${nextPage=1}`
    );
    console.log(response.data);
    // записуємо донні для виклику пагінації
    totalPage = response.data.total_pages;
    currentPage = response.data.page;
    itemsPerPage1 = response.data.results.length;
      // викликаємо пагінацію
    startPagination({ totalPage, itemsPerPage1, currentPage });

  } catch (error) {
    console.log(error);
  } finally {
    Notiflix.Loading.remove();
  }
};


/*
// event listener for search input, will be changed
refs.form.addEventListener('submit', e => {
  e.preventDefault();
  refs.input.value == ''
    ? Notiflix.Notify.failure('Please enter a keyword')
    : onSearch();
});
*/


// робимо пошуковий запит
  onSearch('die');

