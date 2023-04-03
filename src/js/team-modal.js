const open = document.querySelector(".footer__link");
const close = document.querySelector(".team-modal__btn--close");
const modal = document.querySelector("[data-modal-team]");
const modals = document.querySelector(".team-modal");
const bcgdop = document.querySelector(".backdrop");

open.addEventListener("click", teamModal);
close.addEventListener("click", teamModal);
modal.addEventListener("click", closeModal);

document.addEventListener('keydown', (evt) => {
        if (evt.code === "Escape") {
          closeModal();
        }
    });

function teamModal() {
    modal.classList.toggle("visually-hidden");
    modals.classList.toggle("visually-hidden"); 
    const body = document.querySelector('body');
  if (modal.classList.contains('visually-hidden')) {
    body.style.overflow = 'auto';
  } else {
    body.style.overflow = 'hidden';
  }
}

function closeModal() {
  modal.classList.add("visually-hidden");
  modals.classList.add("visually-hidden");

  const body = document.querySelector('body');
  body.style.overflow = 'auto';
}



