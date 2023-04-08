import { refs } from './refs';
// const btnUp = document.querySelector('.up');
refs.btnUp.style.display = 'none';

refs.btnUp.addEventListener('click', topFunction);
window.addEventListener('scroll', scrollFunction);

// функція скролу
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    refs.btnUp.style.display = 'block';
  } else {
    refs.btnUp.style.display = 'none';
  }
}

// функція повернення на початок сторінки
function topFunction() {
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' }); // Для Chrome, Firefox, IE и Opera
}
