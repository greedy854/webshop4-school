let allGames = document.getElementsByClassName("part");
let filters = document.getElementsByClassName("filter");
let section = document.getElementsByClassName("part--section");


//hiermee start je altijd boven aan de pagina als je refresht
window.scrollTo(0,0);



setInterval(function(){
   document.getElementsByTagName("main")[0].style.overflow = "auto";
   document.getElementsByClassName("main")[0].style.opacity = "1";
}, 1500)


//als er op de filter knop gedrukt word... zijn de lijnen code hieronder
for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}


//als er op de filter knop gedrukt word ^ gaat de adventure genre weg
//

//PART 1
let part1Filter = document.getElementById("part--1");

part1Filter.onchange = function(){
    if(part1Filter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--1"){
                allGames[i].style.display = "block";
                section[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--1"){
                allGames[i].style.display = "none";
                section[i].style.display = "none";
            }
        }
    }
}

//PART 2
let part2Filter = document.getElementById("part--2");

part2Filter.onchange = function(){
    if(part2Filter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--2"){
                allGames[i].style.display = "block";
                section[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--2"){
                allGames[i].style.display = "none";
                section[i].style.display = "none";
            }
        }
    }
}

//PART 3
let part3Filter = document.getElementById("part--3");

part3Filter.onchange = function(){
    if(part3Filter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--3"){
                allGames[i].style.display = "block";
                section[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--3"){
                allGames[i].style.display = "none";
                section[i].style.display = "none";
            }
        }
    }
}


//PART 4
let part4Filter = document.getElementById("part--4");

part4Filter.onchange = function(){
    if(part4Filter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--4"){
                allGames[i].style.display = "block";
                section[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "part--4"){
                allGames[i].style.display = "none";
                section[i].style.display = "none";
            }
        }
    }
}



$("#click-slide").hover(function doALoadOfStuff() {

    if ($(window).width() >= 768) {

        if ($("#drop").hasClass('down')) {
            $("#click-slide").addClass('norm').delay(400).animate({
                paddingTop: "0",
                height: "80"
            }, 400);
            $("#dropdown-menu-r").animate({
                top: "-500"
            }, 400).delay(200).animate({
                opacity: "0"
            }, 100);
            setTimeout(function () {
                $("#drop").removeClass('down-color').removeClass('down');
            }, 500);
            $("#drop").delay(400).animate({
                top: "0"
            }, 400);
        } else {
            $("#click-slide").removeClass('norm').animate({
                paddingTop: "103",
                height: "307",
            }, 396);
            $("#dropdown-menu-r").animate({
                opacity: "1"
            }, 100).delay(500).animate({
                top: "-185"
            }, 400);
            $("#drop").addClass('down-color').animate({
                top: "122"
            }, 400).addClass('down');

        }

    }
});
