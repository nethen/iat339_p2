if (window.sessionStorage.getItem("drink") === null) window.sessionStorage.setItem("drink", 1);
if (window.sessionStorage.getItem("dine") === null) window.sessionStorage.setItem("dine", 1);
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
    if (document.getElementById("topCartCount")) document.getElementById("topCartCount").innerHTML = sum;
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
    if (document.getElementById("topCartCount")) document.getElementById("topCartCount").innerHTML = sum;
}

