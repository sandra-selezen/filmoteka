import axios from 'axios';
import Notiflix from 'notiflix';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const API_KEY = '959330b1b48c95e1fde96a992bbede29';
const BASE_URL = 'https://api.themoviedb.org/';
const id = 638974;

const iframeRef = document.querySelector('.iframe');
iframeRef.addEventListener('click', onClickYouTube);
// https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US

function onClickYouTube() {
  fetchVideoKey().then(key => {
    const instance = basicLightbox.create(
      `
		<iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" frameborder="0" allowfullscreen></iframe>
	`,
      {
        onClose: () => {
          window.removeEventListener('keydown', onEscKeyDown);
        },
      }
    );
    instance.show();

    window.addEventListener('keydown', onEscKeyDown);
    function onEscKeyDown(event) {
      if (event.code === 'Escape') {
        instance.close();
      }
      console.log(event);
    }
  });
}

async function fetchVideoKey() {
  const url = `${BASE_URL}/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
  Notiflix.Loading.circle();
  try {
    const { data } = await axios.get(url);
    console.log('data:', data);
    const filmKey = data.results[0].key;
    console.log('filmKey:', filmKey);
    return filmKey;
  } catch (error) {
    console.log('error:', error);
  } finally {
    Notiflix.Loading.remove();
  }
}

// async function fetchPopularFilms() {
//   const url = `${URL}/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
//   Notiflix.Loading.circle();
//   try {
//     const { data } = await axios.get(url);
//     console.log('data:', data);
//     const filmsArr = data.results;
//     console.log('filmsArr:', filmsArr);
//     return data;
//   } catch (error) {
//     console.log('error:', error);
//   } finally {
//     Notiflix.Loading.remove();
//   }
// }

// fetchPopularFilms().then();

// function markupPopularFilms(films) {
//   return films.map(({ results }) => {
//     console.log(results);
//     const text = ` <li class="card__film" >
//         <div class="thumb" >
//           <img src='https://place-hold.it/276x402' alt='poster' />
//         </div>
//         <h2 class="card__title">Назва</h2>
//         <p class="card__text">
//           <span class="genres">жанр</span>
//           | <span class="release">1990</span>
//           <span class="card__vote_average">0</span>
//         </p>
//       </li>`;
//   });
// }
