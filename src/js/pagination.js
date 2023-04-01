import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { onSearch, nextPage } from './api';
import FetchFilms from './fetch-films';
// import { fetchPopularFilms } from './popular-films-fetch';


export const settingsPagination = {
  totalItems: null,
  itemsPerPage: null,
  page: 1,
  requestType: '',
  pagination: null,

}


// --------------------------------------
export const startPagination = (settingsPagination) => {
  console.log(settingsPagination.totalItems);
  console.log(settingsPagination.itemsPerPage);
  console.log(settingsPagination.page);
  //  об'єкт налаштувань tui-pagination
const options = {
  totalItems: settingsPagination.totalItems,
  itemsPerPage: settingsPagination.itemsPerPage,
  visiblePages: 5,
  page: settingsPagination.page,
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
  settingsPagination.pagination = pagination;
// після натискання кнопки отримуємо номер сторінки, що на кнопці.
// передаємо цей номер в колбек та робимо запит до АPI для отримання данних відповідної сторінки
pagination.on('afterMove', ({ page }) => {
  console.log(page);
  // nextPage = page;
  // console.log(nextPage);
  switch (settingsPagination.requestType) {
    case 'searchByWord':
      onSearch(page);
      break;
    case 'popularFilm':
      fetchPopularFilms(page);
      break;
  }
});
  // повертаємо готову пагінацію
  return pagination;
};


