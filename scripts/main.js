// All scripting is made by Nathan Lew based on prior knowledge and experimentation
const toggleMenu = () => {
    const menu = document.getElementsByClassName("nav__wrapper__items")[0];
    const menuImgs = document.getElementsByClassName("nav__wrapper__menu__img");
    const body = document.getElementsByTagName("body")[0];
    menu.classList.toggle("nav__wrapper__items--active");
    for(let element of menuImgs) {
        element.classList.toggle("nav__wrapper__menu__img--active");
    };
    body.style.overflow = menu.classList.contains("nav__wrapper__items--active") ? "hidden" : "auto";
}

const closeMenu = () => {
    const menu = document.getElementsByClassName("nav__wrapper__items")[0];
    const menuImgs = document.getElementsByClassName("nav__wrapper__menu__img");
    const body = document.getElementsByTagName("body")[0];
    menu.classList.remove("nav__wrapper__items--active");
    menuImgs[0].classList.add("nav__wrapper__menu__img--active");
    menuImgs[1].classList.remove("nav__wrapper__menu__img--active");
    body.style.overflow = menu.classList.contains("nav__wrapper__items--active") ? "hidden" : "auto";
}