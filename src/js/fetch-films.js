export default class FetchFilms {
    constructor(url) {
        this.page = 1;
        this.url = url;
    }

    async getFilms() {
        const response = await fetch(this.url);
        const data = await response.json();
        this.results = await data.results;
        this.getBackdrop();
        this.getTitles();
        this.getReleaseYear();
        this.getGenres();
        console.log(this.results);
        console.log(this.titles);
        console.log(this.releaseYears);
        console.log(this.genres);
    }

    getBackdrop() {
        this.backdrops = this.results.map(result => result.backdrop_path);
    }

    getTitles() {
        this.titles = this.results.map((result) => {
            return result.title ? result.title : result.name;
        });
    }

    getReleaseDate() {
        return this.results.map((result) => {
            return result.release_date ? result.release_date : result.first_air_date;
        })
    }

    getReleaseYear() {
        this.releaseYears = this.getReleaseDate().map(releaseDate => releaseDate.slice(0, 4));
    }

    async getGenres() {
        const response = await fetch(
          'https://api.themoviedb.org/3/genre/movie/list?api_key=959330b1b48c95e1fde96a992bbede29&language=en-US'
        );
        const data = await response.json();
        const genres = await data.genres;
        console.log(genres);

        this.genres = this.results.map((result) => {
            return result.genre_ids.map((genre_id) => {
                const genresNames = genres.find(genre => genre.id === genre_id);
                console.log(genresNames);
                const genresString = genresNames.name;
                return genresString;
            })
        })
    }


}