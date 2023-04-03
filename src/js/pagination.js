import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';


export default class CreatePagination {
  constructor(object, requestType = '') {
    this.object = object;
    this.options = {
    totalItems: object.totalItems,
    itemsPerPage: object.itemsPerPage,
    visiblePages: 5,
    page: object.page,
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
  }
  }

  activatePagination() {
    const pagination = new Pagination('pagination', this.options);
      pagination.on('afterMove', ({ page }) => {
    this.object.moveToPage(page);
  });
  }
}