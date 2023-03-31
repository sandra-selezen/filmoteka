import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { onSearch, nextPage } from './api';


// --------------------------------------
export const startPagination = ({ totalPage, itemsPerPage1, currentPage }) => {
  //  об'єкт налаштувань tui-pagination
const options = {
  totalItems: totalPage,
  itemsPerPage: itemsPerPage1,
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
// після натискання кнопки отримуємо номер сторінки, що на кнопці.
// передаємо цей номер в колбек та робимо запит до АPI для отримання данних відповідної сторінки
pagination.on('afterMove', ({ page }) => {
  console.log(page);
  nextPage = page;
  onSearch('die');
});
  // повертаємо готову пагінацію
  return pagination;
};

