export default class GetFilmsFromLocalStorage {
  constructor(ids, url, markupRef) {
    this.page = 1;
    this.ids = ids;
    this.apiKey = '959330b1b48c95e1fde96a992bbede29';
    this.url = url;
    this.markupRef = markupRef;
    this.genresUrl =
      'https://api.themoviedb.org/3/genre/movie/list?api_key=959330b1b48c95e1fde96a992bbede29&language=en-US';
    this.markup = [];
  }

  async getFilms() {
      this.reset();
    await this.doPromises();
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

  async doPromises() {
    const arrayOfPromises = this.ids.map(async id => {
      const response = await fetch(`${this.url}${id}?api_key=${this.apiKey}`);
      return response.json();
    });
    arrayOfPromises.push(await (await fetch(this.genresUrl)).json());
    this.data = await Promise.all(arrayOfPromises);
    this.genresData = this.data[this.data.length - 1].genres;
    this.data.pop();
  }

  getPosters() {
    this.posters = this.currentPage.map(filmData =>
      filmData.poster_path
        ? `https://image.tmdb.org/t/p/w500${filmData.poster_path}`
        : defaultImage
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
      filmData.vote_average.toFixed(1)
    );
  }

  getGenres() {
    this.genres = this.currentPage.map(filmData => {
      const res = filmData.genres.map(
        genre =>
          this.genresData.find(genreData => genre.id === genreData.id).name
      );
      return res.join(', ');
    });
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
    this.currentPage = this.data.slice(pageToElements, pageToElements + 20);
  }

  getPaginationInfo() {
    this.totalItems = this.data.length;
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
