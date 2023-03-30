import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

// -----------------------------------
// Змінні для роботи, допоки немає роботи по запитам

// загальна кількість сторінок
let totalPage = 999;
// поточна сторінка
let currentPage = 30;
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
// після натискання кнопки отримуємо номер сторінки, що на кнопці.
// передаємо цей номер в колбек та робимо запит до АPI для отримання данних відповідної сторінки
pagination.on('afterMove', ({ page }) => console.log(page));

