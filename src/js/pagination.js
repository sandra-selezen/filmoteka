import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

// -----------------------------------
// This is example for
// загальна кількість сторінок
let totalPage = 999;
// поточна сторінка
let currentPage = 10;
// --------------------------------------

// об'єкт налаштувань tui-pagination
const options = {
  totalItems: totalPage,
  itemsPerPage: 20,
  visiblePages: 5,
  page: currentPage,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
      '</a>'
  }
};

// створюємо екземпляр tui-pagination
const pagination = new Pagination('pagination', options);
// отримуємо номер поточної сторінки
// const page = pagination.getCurrentPage();
// console.log(page);

// pagination.on('beforeMove', evt => {
//   const { page } = evt;
//   const result = ajax.call({page});

//   if(result) {
//     pagination.movePageTo(page);
//   } else {
//     return false;
//   }
// });

// pagination.on('afterMove', ({ page }) => console.log(page));


// ------------------------------------------
// This is example for me
// import axios from "axios";
// import Notiflix from 'notiflix';

// const API_KEY = '959330b1b48c95e1fde96a992bbede29';
// const URL = 'https://api.themoviedb.org/';



// /*
// // refs for keysearch, will be changed
// const refs = {
//   form: document.querySelector('form'),
//   input: document.querySelector('input'),
// };
// */


// // function for keyword search, will be changed

// const onSearch = async (query) => {
//   Notiflix.Loading.circle();
//   try {
//     const response = await axios.get(
//       `${URL}/3/search/movie?api_key=${API_KEY}&query=${query}`
//     );
//     const { data } = response;
//     console.log(data);
//     totalPage = data.total_pages;
//     currentPage = data.page;


      
//   } catch (error) {
//     console.log(error);
//   } finally {
//     Notiflix.Loading.remove();
//   }
// };

// onSearch('die hard');