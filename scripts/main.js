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

document.addEventListener("resize", function(){
    let hoverable = (window.innerWidth >= 992);
    if (hoverable) console.log("nice");
});

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

//https://www.w3schools.com/jsref/prop_win_localstorage.asp
// Get the menu select element and section menu elements
const menuSelect = document.getElementById('menu');
// Add event listener to the menu select element
menuSelect.addEventListener('change', toggleSection);

// Call the toggleSection function on page load
// toggleSection();

//https://www.w3schools.com/js/js_api_web_storage.asp
// Toggle the active section based on the selected option
function toggleSection() {
    const menu = document.getElementById('menu');
    if(menu)
    {
        const sections = document.getElementsByClassName('menu-items');
            const selectedSection = menu.value;
            for (let i = 0; i < sections.length; i++){
                if (sections[i].classList.contains(selectedSection)) sections[i].classList.remove("hidden");
                else sections[i].classList.add("hidden");
            }
    }
}

toggleSection();





//https://dev.to/stackfindover/products-quantity-counter-using-html-css-javascript-663
//item-counter
//got help from Ahmed
function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
    var inputs = document.getElementsByClassName("checkOutCartInputs")
    var sum = 0;
    for (var input of inputs){
        console.log(input)
         sum = sum + parseInt(input.value);
        console.log(sum)
        // return total;
    }
    document.getElementById("topCartCount").innerHTML = sum;
}

function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
    var inputs = document.getElementsByClassName("checkOutCartInputs")
    var sum = 0;
    for (var input of inputs){
        console.log(input)
         sum = sum + parseInt(input.value);
        console.log(sum)
        // return total;
    }
    document.getElementById("topCartCount").innerHTML = sum;
}

