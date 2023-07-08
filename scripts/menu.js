
//Image hoverstate over text in courtesty of
//https://codepen.io/coreDeiv/pen/YzqzRKK
//Handles where the images position is based on mouse position

const checkDesktopMode = () => {
    const width = window.innerWidth;
    window.localStorage.setItem("hovers", (width >= 992));
}

const activateHovers = () => {
    const menuItems = document.querySelectorAll(".menu-item-name");
    //checks for different image inputs for certain menu items
    menuItems.forEach(function(item) {
        const menuItemContainer = item.parentNode; // Get the parent container of the menu item
        const popupImage = menuItemContainer.querySelector(".popup-image"); // Get the respective popup image for the menu item
            menuItemContainer.addEventListener("mousemove", function(event) {
                if (window.localStorage.getItem("hovers") == "true") popupImage.style.display = "block";
                else popupImage.style.display = "none";
                popupImage.style.left = event.clientX + "px";
                popupImage.style.top = event.clientY + "px";
            });
    
            menuItemContainer.addEventListener("mouseleave", function() {
                popupImage.style.display = "none";
            });
    });
}


const activateHoversOnSize = () => {
    checkDesktopMode();
}

window.onresize = checkDesktopMode;
activateHovers();



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