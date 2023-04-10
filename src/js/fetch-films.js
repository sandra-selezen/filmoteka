import defaultImage from '/src/images/no-poster.png';
import Notiflix from 'notiflix';

export default class FetchFilms {
  constructor(url, markupRef) {
    this.page = 1;
    this.url = url;
    this.genresUrl =
      'https://api.themoviedb.org/3/genre/movie/list?api_key=959330b1b48c95e1fde96a992bbede29&language=en-US';
    this.markupRef = markupRef;
    this.markup = [];
    this.markupSwiper = [];
  }

  async getFilms() {
    Notiflix.Loading.circle();
    this.reset();
    await this.doPromises();
    this.getFilmsInfo();
    this.createCards();
    this.createMarkup();
    Notiflix.Loading.remove();
  }

  async doPromises() {
    const urlsArray = [this.url, this.genresUrl];
    const arrayOfPromises = urlsArray.map(async url => {
      const response = await fetch(url);
      return response.json();
    });
    const response = await Promise.all(arrayOfPromises);
    this.filmsData = response[0].results;
    this.genresData = response[1].genres;
    this.totalItems = response[0].total_results;
    this.itemsPerPage = response[0].results.length;
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
      return res.join(', ');
    });
  }

  getFilmsInfo() {
    this.getGenres();
    this.getPosters();
    this.getTitles();
    this.getReleaseYear();
    this.getFilmsId();
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

  reset() {
    this.markup = [];
    document.querySelector('.js-cards-list').innerHTML = '';
  }

  async moveToPage(page) {
    this.reset();
    Notiflix.Loading.circle();
    this.page = page;
    const response = await fetch(`${this.url}&page=${this.page}`);
    const parse = await response.json();
    this.filmsData = parse.results;
    this.getFilmsInfo();
    this.createCards();
    this.createMarkup();
    Notiflix.Loading.remove();
  }

  // Swiper

  async getFilmsSwiper() {
    Notiflix.Loading.circle();
    await this.doPromises();
    this.getFilmsInfoSwiper();
    this.createCardsSwiper();
    this.createMarkupSwiper();
    Notiflix.Loading.remove();
  }

  getFilmsInfoSwiper() {
    this.getPosters();
    this.getTitles();
    this.getFilmsId();
  }

  createCardsSwiper() {
    for (let i = 0; i < this.filmsData.length; i += 1) {
      this.markupSwiper.push(`<li class="swiper-slide">
        <a class="swiper-link" href="#" data-id="${this.ids[i]}"><img src="https://image.tmdb.org/t/p/w500/${this.posters[i]}" alt="${this.titles[i]}" />
        </a>
      </li>`);
    }
  }

  createMarkupSwiper() {
    this.markupRef.insertAdjacentHTML('afterbegin', this.markupSwiper.join(''));
  }
}
