// https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
// Script made by Nathan Lew in a quick hurry based on previous knowledge and new research on storage
const forceCart = (itemName) => {
    let amountToAdd = parseInt(document.getElementById("mainVal").value);
    window.sessionStorage.setItem(itemName, amountToAdd);
    window.sessionStorage.setItem("target", itemName);
    document.location.href = "checkout.html";
}