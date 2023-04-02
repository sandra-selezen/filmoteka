export const refs = {
    openModalBtn: document.querySelector("[data-modal-open-reg]"),
    closeModalBtn: document.querySelector("[data-modal-close-reg]"),
    regModal: document.querySelector("[data-modal-reg]"),
    backdrop: document.querySelector('.backdrop-reg'),
    logInBtn: document.querySelector('.js-log-in'),
    signUpBtn: document.querySelector('.js-sign-up'),
    logOutBtn: document.querySelector('.js-log-out'),

};

refs.openModalBtn.addEventListener("click", openHandler);
refs.closeModalBtn.addEventListener("click", closeRegModal);
// refs.backdrop.addEventListener("click", closeRegModal);

document.addEventListener('keydown', (evt) => {
    if (evt.code === "Escape") {
        closeRegModal();
    }
});

function openHandler() {
    refs.regModal.classList.remove("is-hidden");
};
  
export function closeRegModal() {
        refs.regModal.classList.add("is-hidden");
        refs.regModal.removeEventListener('keydown', closeRegModal);

};