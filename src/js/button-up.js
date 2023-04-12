import { refs } from './refs';
// const buttonUp = document.querySelector('.up');
refs.buttonUp.style.display = 'none';

refs.buttonUp.addEventListener('click', topFunction);
window.addEventListener('scroll', scrollFunction);

// функція скролу
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    refs.buttonUp.style.display = 'block';
  } else {
    refs.buttonUp.style.display = 'none';
  }
}

// функція повернення на початок сторінки
function topFunction() {
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' }); // Для Chrome, Firefox, IE и Opera
}
