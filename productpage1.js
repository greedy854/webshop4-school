let allGames = document.getElementsByClassName("game");
let filters = document.getElementsByClassName("filter");


//hiermee start je altijd boven aan de pagina als je refresht
window.scrollTo(0,0);



setInterval(function(){
   document.getElementsByTagName("body")[0].style.overflow = "auto";
   document.getElementsByTagName("main")[0].style.opacity = "1";
}, 1500)


//als er op de filter knop gedrukt word... zijn de lijnen code hieronder
for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}


//als er op de filter knop gedrukt word ^ gaat de adventure genre weg
//

//adventure filter
let DutchFilter = document.getElementById("Dutch coins or banknotes");

DutchFilter.onchange = function(){
    if(DutchFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "Dutch coins or banknotes"){
                allGames[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "Dutch coins or banknotes"){
                allGames[i].style.display = "none";
            }
        }
    }
}

//sport filter
let BanknotesFilter = document.getElementById("Banknotes");

BanknotesFilter.onchange = function(){
    if(BanknotesFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "Banknotes"){
                allGames[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "Banknotes"){
                allGames[i].style.display = "none";
            }
        }
    }
}

//puzzle filter
let GoldFilter = document.getElementById("Gold");

GoldFilter.onchange = function(){
    if(GoldFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "Gold"){
                allGames[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "Gold"){
                allGames[i].style.display = "none";
            }
        }
    }
}


//shooter filter
let SilverFilter = document.getElementById("Silver");

SilverFilter.onchange = function(){
    if(SilverFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "Silver"){
                allGames[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "Silver"){
                allGames[i].style.display = "none";
            }
        }
    }
}

//action filler
let CopperFilter = document.getElementById("Copper");

CopperFilter.onchange = function(){
    if(CopperFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "Copper"){
                allGames[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "Copper"){
                allGames[i].style.display = "none";
            }
        }
    }
}

s