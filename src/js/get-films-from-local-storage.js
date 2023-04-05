import defaultImage from '/src/images/no-poster.png';

export default class GetFilmsFromLocalStorage {
  constructor(filmsData, markupRef) {
    this.page = 1;
    this.filmsData = filmsData;
    this.markupRef = markupRef;
    this.markup = [];
  }

  async getFilms() {
    this.reset();
    this.getPaginationInfo();
    this.parcelling();
    this.getCurrentPageIds();
    this.getPosters();
    this.getTitles();
    this.getReleaseYear();
    this.getVoteAverage();
    this.getGenres();
    this.createCards();
    this.createMarkup();
  }

  getPosters() {
    this.posters = this.currentPage.map(filmData =>
      filmData.poster
    );
  }

  getTitles() {
    this.titles = this.currentPage.map(filmData => filmData.title);
  }

  getReleaseDate() {
    return this.currentPage.map(filmData => filmData.release_date);
  }

  getReleaseYear() {
    this.releaseYears = this.getReleaseDate().map(releaseDate =>
      releaseDate.slice(0, 4)
    );
  }

  getVoteAverage() {
    this.votes = this.currentPage.map(filmData =>
      filmData.voteAverage
    );
  }

  getGenres() {
    this.genres = this.currentPage.map(filmData => filmData.genresMovie);
  }

  getCurrentPageIds() {
    this.currentPageIds = this.currentPage.map(filmData => filmData.id);
  }

  createCards() {
    for (let i = 0; i < this.currentPage.length; i += 1) {
      this.markup
        .push(`<li class="card__film" data-id="${this.currentPageIds[i]}">
          <div class="thumb">
            <img src=${this.posters[i]} alt="poster" />
          </div>
          <div class="card__content">
            <h2 class="card__title">${this.titles[i]}</h2>
            <p class="card__text">
              <span class="genres">${this.genres[i]}</span>
              | <span class="release">${this.releaseYears[i]}</span>
              <span class="card__vote_average">${this.votes[i]}</span>
            </p>
          </div>
        </li>`);
    }
  }

  createMarkup() {
    this.markupRef.insertAdjacentHTML('afterbegin', this.markup.join(''));
  }

  reset() {
    this.markup = [];
    this.markupRef.innerHTML = '';
  }

  parcelling() {
    const pageToElements = 20 * (this.page - 1);
    this.currentPage = this.filmsData.slice(
      pageToElements,
      pageToElements + 20
    );
  }

  getPaginationInfo() {
    this.totalItems = this.filmsData.length;
    this.itemsPerPage = 20;
  }

  moveToPage(page) {
    this.reset();
    this.page = page;
    this.parcelling();
    this.getPaginationInfo();
    this.getPosters();
    this.getTitles();
    this.getReleaseYear();
    this.getVoteAverage();
    this.getGenres();
    this.createCards();
    this.createMarkup();
  }
}
