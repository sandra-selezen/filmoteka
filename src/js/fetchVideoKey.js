import axios from 'axios';
import Notiflix from 'notiflix';


const API_KEY = '959330b1b48c95e1fde96a992bbede29';
const BASE_URL = 'https://api.themoviedb.org/';


// const iframeRef = document.querySelector('.js-iframe');
// iframeRef.addEventListener('click', onClickYouTube);



export default async function fetchVideoKey(id) {
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
