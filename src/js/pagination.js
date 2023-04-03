import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import { fetchFilms } from './popular-films-fetch';


export default function createPagination(requestType = '') {
  const pagination = new Pagination('pagination', {
    totalItems: fetchFilms.totalItems,
    itemsPerPage: fetchFilms.itemsPerPage,
    visiblePages: 5,
    page: fetchFilms.page,
    centerAlign: false,
    requestType: requestType,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
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
        '</a>',
    },
  });
  pagination.on('afterMove', ({ page }) => {
    fetchFilms.moveToPage(page);
  });
}
