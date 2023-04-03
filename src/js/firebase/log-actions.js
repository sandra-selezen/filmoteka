import { toRegisterNewUser, exitUser, entryUser } from "./firebase-Init";
import { Notify } from "notiflix";
import { refs, closeRegModal } from "./render-modal";



export const actionsAfterRegistration = (user) => {
    if (user.email) {
        Notify.success('You are registered! Choose a movie and prepare popcorn!')
        closeRegModal();
        refs.logInBtn.classList.add('is-hidden');
        refs.signUpBtn.classList.add('is-hidden');
        refs.logOutBtn.classList.remove('is-hidden');
        refs.logOutBtn.classList.add('is-visible');
        refs.logOutBtn.addEventListener("click", logOutHandler);
        settingsOpportunities.isEntry = true;
        console.log('OK')
    };
};

const logOutHandler = () => {
    exitUser();
    refs.logInBtn.classList.remove('is-hidden');
    refs.signUpBtn.classList.remove('is-hidden');
    refs.logOutBtn.classList.add('is-hidden');
    settingsOpportunities.isEntry = false;
};

const settingsOpportunities = {
    isEntry: false,
};