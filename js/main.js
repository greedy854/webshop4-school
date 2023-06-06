let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance:'65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});

let arrowButtons = document.getElementsByClassName("arrow");
let reviews = document.getElementsByClassName("review");
let modus = "one-two-three";
for(let i = 0; i < arrowButtons.length; i++){
    arrowButtons[i].onclick = function(){
        if(modus === "one-two-three"){
        reviews[0].style.display = "none";
        reviews[1].style.display = "none";
        reviews[2].style.display = "none";
        reviews[3].style.display = "block";
        reviews[4].style.display = "block";
        reviews[5].style.display = "block";
        modus = "four-five-six"
    }
    else{
        reviews[0].style.display = "block";
        reviews[1].style.display = "block";
        reviews[2].style.display = "block";
        reviews[3].style.display = "none";
        reviews[4].style.display = "none";
        reviews[5].style.display = "none";
        modus = "one-two-three"
    }
    }
}