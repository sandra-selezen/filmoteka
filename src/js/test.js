import axios from 'axios';
import Notiflix from 'notiflix';

const API_KEY = '959330b1b48c95e1fde96a992bbede29';
const URL = 'https://api.themoviedb.org/';

async function fetchPopularFilms() {
  const url = `${URL}/3/trending/movie/day?api_key=${API_KEY}&page=1`;
  Notiflix.Loading.circle();
  try {
    const { data } = await axios.get(url);
    console.log('data:', data);
    return data;
  } catch (error) {
    console.log('error:', error);
  } finally {
    Notiflix.Loading.remove();
  }
}

fetchPopularFilms().then();

function markupPopularFilms(films) {
  return films.map(({ results }) => {
    console.log(results);
    const text = ` <li class="card__film" >
        <div class="thumb" >
          <img src='https://place-hold.it/276x402' alt='poster' />
        </div>
        <h2 class="card__title">Назва</h2>
        <p class="card__text">
          <span class="genres">жанр</span> 
          | <span class="release">1990</span> 
          <span class="card__vote_average">0</span>
        </p>
      </li>`;
  });
}
