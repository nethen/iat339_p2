const updateForcedCart = () => {
    let target = window.sessionStorage.getItem("target");
    let adder = 0;
    let cost = 0;
    const checkOutCartInputs= document.getElementsByClassName("checkOutCartInputs");
    const prices = document.getElementsByClassName("itemPrice");
    const total = document.querySelector(".totalItemPrice");
    adder = parseInt(window.sessionStorage.getItem(target));
    cost = adder * 5;
    if ((target) == "dine"){
        checkOutCartInputs[0].value = adder;
        prices[0].textContent = "$" + cost + ".00";
        console.log(checkOutCartInputs[0]);
    } else {
        console.log(checkOutCartInputs[1]);
        checkOutCartInputs[1].value = adder;
        prices[1].textContent = "$" + cost + ".00";
    }
    total.textContent = "$" + (5 + cost) + ".00";
    if (document.getElementById("topCartCount")) document.getElementById("topCartCount").textContent = (1 + adder);    
}

updateForcedCart();


//edited code from earlier method helped by Ahmed
function increaseCountNeue(a, b, target) {
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

    updateCartNumbers(target);
}

function decreaseCountNeue(a, b, target) {
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

    updateCartNumbers(target);
}

const updateCartNumbers = (target) => {
    const checkOutCartInputs= document.getElementsByClassName("checkOutCartInputs");
    const prices = document.getElementsByClassName("itemPrice");
    const total = document.querySelector(".totalItemPrice");
    if (target == "dine"){
        prices[0].textContent = "$" + (checkOutCartInputs[0].value * 5) + ".00";
    } else if (target =="drink"){
        prices[1].textContent = "$" + (checkOutCartInputs[1].value * 5) + ".00";
    }
    total.textContent = "$" + ((parseInt(checkOutCartInputs[0].value) + parseInt(checkOutCartInputs[1].value)) * 5) + ".00";
}

const removeItems = (target) => {
    const checkOutCartInputs= document.getElementsByClassName("checkOutCartInputs");
    const itemCons = document.getElementsByClassName("item-con");
    if (target == "dine") {
        itemCons[0].classList.add("hidden");
        checkOutCartInputs[0].value = 0;
    }
    else if (target == "drink") {
        itemCons[1].classList.add("hidden");
        checkOutCartInputs[1].value = 0;
    }
    updateCartNumbers(target);
}