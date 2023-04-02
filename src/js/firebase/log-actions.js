import { refs } from "../register-modal";
import { toRegisterNewUser, exitUser } from "./firebaseInit";
import { Notify } from "notiflix";
import { closeRegModal } from "../register-modal";



export const actionsAfterEntry = (user) => {
    if (user.email) {
        Notify.success('You are registered! Choose a movie and prepare popcorn!')
        closeRegModal();
        refs.logInBtn.classList.add('is-hidden');
        refs.signUpBtn.classList.add('is-hidden');
        refs.logOutBtn.classList.remove('is-hidden');
        console.log('OK')
    };
};

const logOutHandler = () => {
    exitUser();
    refs.logInBtn.classList.remove('is-hidden');
    refs.signUpBtn.classList.remove('is-hidden');
    refs.logOutBtn.classList.add('is-hidden');
};
refs.logOutBtn.addEventListener("click", logOutHandler);