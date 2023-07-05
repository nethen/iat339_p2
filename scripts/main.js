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



//Image hoverstate over text in courtesty of
//https://codepen.io/coreDeiv/pen/YzqzRKK
//Handles where the images position is based on mouse position

document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu-item-name");
    //checks for different image inputs for certain menu items
    menuItems.forEach(function(item) {
        const menuItemContainer = item.parentNode; // Get the parent container of the menu item
        const popupImage = menuItemContainer.querySelector(".popup-image"); // Get the respective popup image for the menu item

        menuItemContainer.addEventListener("mousemove", function(event) {
            popupImage.style.display = "block";
            popupImage.style.left = event.clientX + "px";
            popupImage.style.top = event.clientY + "px";
        });

        menuItemContainer.addEventListener("mouseleave", function() {
            popupImage.style.display = "none";
        });
    });
});


//Switch between sections to view food menu and drinks menu
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_state_switch1

// Get references to the menu and sections
const menu = document.getElementById('menu');
const sections = document.getElementsByClassName('section-menu');

menu.addEventListener('change', function() {
    const selectedSection = menu.value;

    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
    }

    const sectionToShow = document.getElementById(selectedSection);
    if (sectionToShow) {
        sectionToShow.classList.add('active');
    }
});

// Get the menu select element and section menu elements
const menuSelect = document.getElementById('menu');
const sectionMenus = document.querySelectorAll('.section-menu');

// Retrieve the active section from localStorage
const activeSection = localStorage.getItem('activeSection');

// Set the initial active section
if (activeSection) {
    const activeOption = menuSelect.querySelector(`option[value="${activeSection}"]`);
    if (activeOption) {
        activeOption.selected = true;
    }
}


//https://www.w3schools.com/js/js_api_web_storage.asp
// Toggle the active section based on the selected option
function toggleSection() {
    const selectedOption = menuSelect.options[menuSelect.selectedIndex];
    const selectedSectionId = selectedOption.value;

    // Store the active section in localStorage
    localStorage.setItem('activeSection', selectedSectionId);

    // Toggle the active class on section menus
    sectionMenus.forEach((section) => {
        section.classList.remove('active');
    });

    const selectedSection = document.getElementById(selectedSectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}

// Add event listener to the menu select element
menuSelect.addEventListener('change', toggleSection);

// Call the toggleSection function on page load
toggleSection();
