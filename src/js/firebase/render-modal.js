export const refs = {
    openModalBtn: document.querySelector("[data-modal-open-reg]"),
    // closeModalBtn: document.querySelector("[data-modal-close-reg]"),
    regModal: document.querySelector("[data-modal-reg]"),
    backdrop: document.querySelector('.backdrop-reg'),
    logInBtn: document.querySelector('.js-log-in'),
    signUpBtn: document.querySelector('.js-sign-up'),
    logOutBtn: document.querySelector('.js-log-out'),
    form: document.querySelector('.registration'),

};

refs.openModalBtn.addEventListener("click", openHandlerSignUp);
// refs.backdrop.addEventListener("click", closeRegModal);
refs.logInBtn.addEventListener("click", openHandlerlogIn);

document.addEventListener('keydown', (evt) => {
    if (evt.code === "Escape") {
        closeRegModal();
    }
});

function openHandlerSignUp() {
    refs.regModal.classList.remove("is-hidden");
    renderRegModal('signUp');
};

function openHandlerlogIn() {
    refs.regModal.classList.remove("is-hidden");
    renderRegModal('logIn');
};
  
export function closeRegModal() {
        refs.regModal.classList.add("is-hidden");
        refs.regModal.removeEventListener('keydown', closeRegModal);

};

export function renderRegModal(type) {
  let titleString = '';
  let nameSubmitBtn = '';
  if (type === 'signUp') {
    titleString = `Hi! Let's register`;
    nameSubmitBtn = 'Sign up';
  }
  if (type === 'logIn') {
    titleString = `Welcome back, let's authenticate!`;
    nameSubmitBtn = 'Log in';

  };

    const markup =
    `<p class="registration__title">${titleString}</p>
      <label class="registration__fild">
        <span class="registration__label">Email</span>
        <input type="text" class="registration__input" name="email" data-action-${type}/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="registration__icon">
          <path d="M26.667 5.333H5.334A2.662 2.662 0 0 0 2.682 8l-.014 16c0 1.467 1.2 2.667 2.667 2.667h21.333c1.467 0 2.667-1.2 2.667-2.667V8c0-1.467-1.2-2.667-2.667-2.667zm-.534 5.668-9.426 5.892a1.343 1.343 0 0 1-1.421-.004l.006.003L5.866 11A1.133 1.133 0 1 1 7.07 9.083l-.004-.003 8.933 5.586 8.933-5.588a1.132 1.132 0 1 1 1.204 1.916l-.005.003z"/></symbol><symbol id="icon-close" viewBox="0 0 32 32"><path d="m26.667 7.303-1.97-1.97-7.808 7.808-7.808-7.808-1.97 1.97 7.808 7.808-7.808 7.808 1.97 1.97 7.808-7.808 7.808 7.808 1.97-1.97-7.808-7.808 7.808-7.808z"/></symbol><symbol id="icon-astronaut" viewBox="0 0 32 32"><path fill="var(--color1, #2196f3)" d="M31.974 4.524a.534.534 0 0 0-.43-.363l-1.91-.278-.855-1.731c-.179-.365-.777-.365-.956 0l-.855 1.731-1.91.278a.535.535 0 0 0-.296.91l1.383 1.348-.326 1.903c-.034.2.048.402.212.522a.53.53 0 0 0 .562.04l1.709-.899 1.709.899a.536.536 0 0 0 .775-.563l-.326-1.903 1.383-1.348a.536.536 0 0 0 .135-.547zm-2.463 1.327a.534.534 0 0 0-.153.472l.191 1.114-1-.526a.533.533 0 0 0-.498 0l-1.001.526.191-1.114a.534.534 0 0 0-.153-.472l-.81-.789 1.119-.163a.532.532 0 0 0 .402-.292l.5-1.013.5 1.013a.535.535 0 0 0 .402.292l1.119.163-.809.789zM26.134 20.522h-1.067v1.067h1.067v-1.067zM26.134 22.656h-1.067v1.067h1.067v-1.067zM27.2 21.589h-1.067v1.067H27.2v-1.067zM25.067 21.589H24v1.067h1.067v-1.067zM22.4 26.389h-1.067v1.067H22.4v-1.067zM22.4 28.522h-1.067v1.067H22.4v-1.067zM23.467 27.456H22.4v1.067h1.067v-1.067zM21.333 27.456h-1.067v1.067h1.067v-1.067zM16 24.256h-1.067v1.067H16v-1.067zM16 26.389h-1.067v1.067H16v-1.067zM17.067 25.322H16v1.067h1.067v-1.067zM14.933 25.322h-1.067v1.067h1.067v-1.067zM5.867 6.122H4.8v1.067h1.067V6.122zM5.867 8.255H4.8v1.067h1.067V8.255z"/><path fill="var(--color1, #2196f3)" d="M6.933 7.189H5.866v1.067h1.067V7.189zM4.8 7.189H3.733v1.067H4.8V7.189z"/><path fill="var(--color3, #212121)" d="M24.715 14.159a1.775 1.775 0 0 0-1.188-.705 1.778 1.778 0 0 0-1.34.352l-1.252.96-1.898 1.417-1.358-.541c2.421-1.086 4.114-3.508 4.114-6.32 0-3.823-3.123-6.933-6.961-6.933s-6.961 3.11-6.961 6.933a6.86 6.86 0 0 0 1.12 3.758l-2.764-.024h-.005c-.009 0-.015.004-.023.005a.515.515 0 0 0-.155.031l-.038.013c-.006.003-.013.003-.019.006l-3.233 1.596-.001.001-1.893.911a.397.397 0 0 0-.063.035 1.779 1.779 0 0 0-.598 2.295c.22.429.595.745 1.056.889a1.776 1.776 0 0 0 1.378-.128l1.388-.738 2.264-1.169 1.357-.008L2.2 22.211l-.002.001-1.339 1.333c-.316.315-.49.732-.49 1.178s.174.863.49 1.179c.325.323.752.485 1.179.485s.854-.162 1.18-.485l1.314-1.309 1.741-1.3.901.897-1.762 1.754-.002.001-1.339 1.333c-.316.315-.49.732-.49 1.178s.174.863.49 1.179c.325.323.753.485 1.18.485s.855-.162 1.18-.485l3.482-3.467.001-.002 1.01-1-.004-.004c.006-.006.015-.009.022-.015l5.166-5.658 3.471.494a.52.52 0 0 0 .262-.033c.018-.006.033-.015.05-.023.019-.01.039-.015.058-.027l3.213-2.133c.012-.008.018-.021.029-.029.013-.01.029-.014.041-.026l1.271-1.191c.662-.62.753-1.635.212-2.362zM2.13 17.77a.714.714 0 0 1-.558.052.717.717 0 0 1-.213-1.26l1.314-.632.449 1.312-.992.528zm3.498-1.828-1.548.8-.439-1.283 2.027-1.001-.04 1.484zm15.099-6.62a5.79 5.79 0 0 1-.599 2.559l-4.181-1.899a1.863 1.863 0 0 0-.788-1.388l1.464-4.86c2.378.756 4.105 2.974 4.105 5.588zm-11.789 0c0-3.235 2.644-5.867 5.894-5.867.253 0 .5.021.745.052l-1.432 4.754c-.019-.001-.037-.006-.057-.006-1.033 0-1.873.837-1.873 1.867s.84 1.867 1.873 1.867c.694 0 1.294-.383 1.618-.945l3.862 1.755a5.894 5.894 0 0 1-4.737 2.39c-3.25 0-5.894-2.632-5.894-5.867zm5.956.8c0 .441-.362.8-.806.8s-.806-.359-.806-.8c0-.441.362-.8.806-.8s.806.359.806.8zM2.465 25.146a.608.608 0 0 1-.854.001.592.592 0 0 1 0-.844l.962-.958.851.848-.959.955zm3.214 3.734a.608.608 0 0 1-.855.001.592.592 0 0 1 0-.844l.963-.959.852.848-.96.955zm3.481-3.469-.002.001-1.765 1.76-.852-.848 1.763-1.755.002-.001c.04-.04.065-.088.09-.135.007-.014.02-.026.026-.04.017-.041.019-.085.026-.129.003-.025.014-.047.014-.073 0-.036-.013-.07-.02-.106-.006-.032-.006-.065-.019-.095a.55.55 0 0 0-.091-.138c-.01-.012-.014-.027-.025-.038h-.001l-.001-.002-1.607-1.6c-.017-.017-.039-.024-.058-.038a.507.507 0 0 0-.087-.058.515.515 0 0 0-.093-.033.507.507 0 0 0-.103-.02.5.5 0 0 0-.095.005.53.53 0 0 0-.104.02.477.477 0 0 0-.094.045c-.02.011-.042.015-.061.029L4.23 23.486l-.901-.897 2.399-2.386 4.361 4.289-.928.919zm6.819-7.017c-.015-.002-.03.004-.045.003a.556.556 0 0 0-.3.075.492.492 0 0 0-.083.061c-.013.011-.028.017-.04.029l-4.698 5.146-4.328-4.257 2.833-2.818a.534.534 0 0 0-.379-.911v-.001l-2.219.013.028-1.607 3.104.027a6.947 6.947 0 0 0 4.981 2.101c.437 0 .864-.045 1.279-.123.04.032.079.065.13.085l2.41.96.331 1.644-3.003-.427zm4.041.178-.313-1.558 1.446-1.08.947 1.257-2.08 1.381zm3.754-2.831-.838.785-.931-1.236.831-.637a.735.735 0 0 1 .543-.143.718.718 0 0 1 .48.284.713.713 0 0 1-.085.947z"/><path fill="var(--color3, #212121)" d="m13.602 18.544-2.143-2.133a.534.534 0 0 0-.753 0l-2.142 2.133a.537.537 0 0 0 0 .756l2.142 2.133a.536.536 0 0 0 .753 0l2.143-2.133a.535.535 0 0 0 0-.756zm-2.519 1.759-1.387-1.381 1.387-1.381 1.387 1.381-1.387 1.381zM17.164 5.071l-.258 1.036c.071.018 1.738.452 1.738 2.149h1.067c0-2.017-1.666-2.965-2.547-3.185zM19.711 9.322h-1.067v1.067h1.067V9.322z"/>
        </svg>
      </label>
      <label class="registration__fild">
        <span class="registration__label">Password</span>
        <input type="text" class="registration__input" name="password" data-action-${type}/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"class="registration__icon">
          <path d="M20 10H8V7.2c0-2.1 1.5-4 3.6-4.2C14 2.8 16 4.7 16 7c0 .6.4 1 1 1h1c.6 0 1-.4 1-1 0-3.8-3-6.9-6.8-7C8.3-.1 5 3.1 5 7v3H4c-1.1 0-2 .9-2 2v7c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5v-7c0-1.1-.9-2-2-2zm-7 7.7V19c0 .5-.5 1-1 1s-1-.5-1-1v-1.3c-.6-.3-1-1-1-1.7 0-1.1.9-2 2-2s2 .9 2 2c0 .7-.4 1.4-1 1.7z"/>
        </svg>
      </label>
      <span class="registration__text"
          >By continuing, you are indicating that you accept our 
          <a href="https://docs.google.com/document/d/1gts0bWn88sGYx4_uxewd6W5EBXprwx1UQyUq7QGTmqU/edit?usp=sharing" class="registration__contract-link">Privacy Policy</a></span
        >
      </label>
      <button class="registration__form-button" type="submit">${nameSubmitBtn}</button>`
    
    refs.form.innerHTML = '';
    refs.form.insertAdjacentHTML('beforeend', markup);
};