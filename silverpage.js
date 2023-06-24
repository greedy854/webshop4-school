const addToCartButtons = document.getElementsByClassName("games__button");
let cartMessage = 0;
let cartMessageValue = document.getElementsByClassName("shoppingCart__message")[0];
const shoppingModal = document.getElementById("js--shoppingModal");
let modalIOpen = false;

let champagne1 = 0;
let champagne2 = 0;
let champagne3 = 0;
let champagne4 = 0;

let totalValue = 0;
let totalValue1 = 0;
let totalValue2 = 0;
let totalValue3 = 0;
let totalValue4 = 0;

document.getElementById("total--price").innerText = "Total price: €"+ totalValue.toFixed(2).toString();
document.getElementById("total--price1").innerText = "€ " + totalValue1.toFixed(2).toString();
document.getElementById("total--price2").innerText = "€ " + totalValue2.toFixed(2).toString();
document.getElementById("total--price3").innerText = "€ " + totalValue3.toFixed(2).toString();
document.getElementById("total--price4").innerText = "€ " + totalValue4.toFixed(2).toString();


for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].onclick = function () {
        cartMessage += 1;
        cartMessageValue.innerHTML = cartMessage;
        switch (addToCartButtons[i].dataset.product) {
            case "champagne1":
                champagne1 += 1;
                totalValue1 += 34.99;
                break;
            case "champagne2":
                champagne2 += 1;
                totalValue2 += 34.99;
                break;
            case "champagne3":
                champagne3 += 1;
                totalValue3 += 44.99;
                break;
            case "champagne4":
                champagne4 += 1;
                totalValue4 += 2500;
                break;
        }
        totalValue = totalValue1 + totalValue2 + totalValue3 + totalValue4;

        document.getElementById("total--price").innerText = "Total price : €" + totalValue.toFixed(2).toString();
        document.getElementById("total--price1").innerText = "€ " + totalValue1.toFixed(2).toString();
        document.getElementById("total--price2").innerText = "€ " + totalValue2.toFixed(2).toString();
        document.getElementById("total--price3").innerText = "€ " + totalValue3.toFixed(2).toString();
        document.getElementById("total--price4").innerText = "€ " + totalValue4.toFixed(2).toString();

        if (modalIOpen === false) {
            shoppingModal.style.display = "flex";
            modalIOpen = true;
            setTimeout(function () {
                shoppingModal.style.display = "none";
                modalIOpen = false;
            }, 2000);
        }
    }
}





const checkOutButton = document.getElementById("js--checkOutButton");
const checkOutWindow = document.getElementById("js--checkOutWindow");
let checkOutIsOpen = false;

checkOutButton.onclick = function () {
    if (checkOutIsOpen === false) {
        document.querySelector("main").style.display = "none";
        checkOutWindow.style.display = "block";
        checkOutIsOpen = true;
        document.getElementById("js--amount-champagne1").innerHTML = champagne1 + "x";
        document.getElementById("js--amount-champagne2").innerHTML = champagne2 + "x";
        document.getElementById("js--amount-champagne3").innerHTML = champagne3 + "x";
        document.getElementById("js--amount-champagne4").innerHTML = champagne4 + "x";

        return;
    }
    document.querySelector("main").style.display = "block";
    checkOutWindow.style.display = "none";
    checkOutIsOpen = false;


}