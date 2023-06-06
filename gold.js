const addToCartButtons = document.getElementsByClassName("games__button");
let cartMessage = 0;
let cartMessageValue = document.getElementsByClassName("shoppingCart__message")[0];
const shoppingModal = document.getElementById("js--shoppingModal");
let modalIOpen = false;

let champagne1 = 0; 
let champagne2   = 0;
let champagne3  = 0;


for(let i = 0; i < addToCartButtons.length; i++){
    addToCartButtons[i].onclick = function(){
        cartMessage += 1;
        cartMessageValue.innerHTML = cartMessage;
        switch(addToCartButtons[i].dataset.product){
             case "champagne1":
                champagne1 += 1;
                break;
            case "champagne2":
                champagne2 += 1;
                break;
            case "champagne3":
                champagne3 +=1;
                break;
        }

        if(modalIOpen === false){
        shoppingModal.style.display ="flex";
        modalIOpen = true;
        setTimeout(function(){
            shoppingModal.style.display = "none";
            modalIOpen = false;
        },2000);
    }
    }
}

const checkOutButton = document.getElementById("js--checkOutButton");
const checkOutWindow = document.getElementById("js--checkOutWindow");
let checkOutIsOpen = false;

checkOutButton.onclick = function(){
    if(checkOutIsOpen === false){
        document.querySelector("main").style.display = "none";
        checkOutWindow.style.display = "block";
        checkOutIsOpen = true;
        document.getElementById("js--amount-champagne1").innerHTML = champagne1 + "x";
        document.getElementById("js--amount-champagne2").innerHTML = champagne2 + "x";
        document.getElementById("js--amount-champagne3").innerHTML = champagne3 + "x";

        return;
    }
        document.querySelector("main").style.display = "block";
        checkOutWindow.style.display = "none";
        checkOutIsOpen = false;


}