// All scripting is made by Nathan Lew based on prior knowledge and experimentation
// let second;
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

// // Intersection observer code courtesty of 
// // https://javascript.plainenglish.io/how-to-check-whether-an-element-is-in-the-viewport-or-not-eb5de51c0201
// // Handles scroll transition on hero
// const setupObserver = () => {
//     const hero = document.getElementsByClassName("shadow");
//     const second = document.getElementsByTagName("section")[1];

//     const options = {
//         root: null,
//         threshold: 0.5
//     };
//     const callback = function(entries, observer) {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting){
//                 for (let i = 0; i < hero.length; i++){
//                     hero[i].classList.add("shadow--active");
//                 }
//                 console.log(entry.intersectionRatio);
//             } else{
//                 for (let i = 0; i < hero.length; i++){
//                     hero[i].classList.remove("shadow--active");
//                 }
//             }
//         });
//     }
//     let observer = new IntersectionObserver(callback, options);

//     observer.observe(second);
// }

// setupObserver();