import FetchFilms from './fetch-films';
import Swiper, { Autoplay } from 'swiper';
// import Swiper styles
import 'swiper/swiper.min.css';

const URL =
  'https://api.themoviedb.org/3/trending/movie/day?api_key=959330b1b48c95e1fde96a992bbede29';
const swiperRefs = document.querySelector('.swiper-wrapper');

const swiper = new Swiper('.swiper', {
  modules: [Autoplay],
  loop: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 8,
      spaceBetween: 15,
    },
  },
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
  },
});

const fetchFilmsSwiper = new FetchFilms(URL, swiperRefs);
if (document.querySelector('.swiper-wrapper')) {
  initializeSwiper();
}

async function initializeSwiper() {
  await fetchFilmsSwiper.getFilmsSwiper();
}
