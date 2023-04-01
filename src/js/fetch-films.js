export default class FetchFilms {
  constructor(url, markupRef) {
    this.page = 1;
    this.url = url;
    this.genresUrl =
      'https://api.themoviedb.org/3/genre/movie/list?api_key=959330b1b48c95e1fde96a992bbede29&language=en-US';
    this.markupRef = markupRef;
    this.markup = [];
  }

  async getFilms() {
    await this.doPromises();
    this.getGenres();
    this.getPosters();
    this.getTitles();
    this.getReleaseYear();
    this.getFilmsId();
    this.createCards();
    this.createMarkup();
    this.createPagination();
  }

  async doPromises() {
    const urlsArray = [this.url, this.genresUrl];
    const arrayOfPromises = urlsArray.map(async url => {
      const response = await fetch(url);
      return response.json();
    });
    const response = await Promise.all(arrayOfPromises);
    this.filmsData = response[0].results;
    this.page = response[0].page;
    this.totalItems = response[0].total_pages;
    this.itemsPerPage = response[0].results.length;
    this.genresData = response[1].genres;
  }

  getFilmsId() {
    this.ids = this.filmsData.map(filmData => filmData.id);
  }

  getPosters() {
    this.posters = this.filmsData.map(filmData =>
      filmData.poster_path
        ? `https://image.tmdb.org/t/p/w500${filmData.poster_path}`
        : defaultImage
    );
  }

  getTitles() {
    this.titles = this.filmsData.map(filmData => filmData.title);
  }

  getReleaseDate() {
    return this.filmsData.map(filmData => filmData.release_date);
  }

  getReleaseYear() {
    this.releaseYears = this.getReleaseDate().map(releaseDate =>
      releaseDate.slice(0, 4)
    );
  }

  getGenres() {
    this.genres = this.filmsData.map(filmData => {
      const res = filmData.genre_ids.map(
        genre_id => this.genresData.find(genre => genre.id === genre_id).name
      );
      return [...res].join(', ');
    });
  }

  createCards() {
    for (let i = 0; i < this.filmsData.length; i += 1) {
      this.markup.push(`<li class="card__film" data-id='${this.ids[i]}'>
          <div class="thumb">
            <img src='${this.posters[i]}' alt='poster' />
          </div>
          <div class="card__content">
            <h2 class="card__title">${this.titles[i]}</h2>
            <p class="card__text">
              <span class="genres">${this.genres[i]}</span>
              | <span class="release">${this.releaseYears[i]}</span>
            </p>
          </div>
        </li>`);
    }
  }

  createMarkup() {
    this.markupRef.insertAdjacentHTML('afterbegin', this.markup.join(''));
  }

  createPagination() {
    console.log(this.page);
    console.log(this.totalItems);
    console.log(this.itemsPerPage);
    settingsPagination.page = this.page;
    settingsPagination.totalItems = this.totalItems;
    settingsPagination.itemsPerPage = this.itemsPerPage;
    startPagination(settingsPagination);
  }
}
