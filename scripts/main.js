// All scripting is made by Nathan Lew based on prior knowledge and experimentation
const toggleMenu = () => {
    const menu = document.getElementsByClassName("nav__overlay__wrapper")[0];
    const menuImgs = document.getElementsByClassName("nav__overlay__menu__img");
    const body = document.getElementsByTagName("body")[0];
    menu.classList.toggle("nav__overlay__wrapper--active");
    for(let element of menuImgs) {
        element.classList.toggle("nav__overlay__menu__img--active");
    };
    body.style.overflow = menu.classList.contains("nav__overlay__wrapper--active") ? "hidden" : "auto";
}

const closeMenu = () => {
    const menu = document.getElementsByClassName("nav__overlay__wrapper")[0];
    const menuImgs = document.getElementsByClassName("nav__overlay__menu__img");
    const body = document.getElementsByTagName("body")[0];
    menu.classList.remove("nav__overlay__wrapper--active");
    menuImgs[0].classList.add("nav__overlay__menu__img--active");
    menuImgs[1].classList.remove("nav__overlay__menu__img--active");
    body.style.overflow = menu.classList.contains("nav__overlay__wrapper--active") ? "hidden" : "auto";
}