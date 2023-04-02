const btnUp = document.querySelector('.up');
// функція скролу
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    btnUp.style.display = 'block';
  } else {
    btnUp.style.display = 'none';
  }
}

// функція повернення на початок сторінки
function topFunction() {
  console.log('ooooo');
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' }); // Для Chrome, Firefox, IE и Opera
}
