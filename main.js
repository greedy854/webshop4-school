
let navlist = document.querySelector('.navlist');


const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', { delay: 200, origin: 'top' });
sr.reveal('.hero-img', { delay: 450, origin: 'top' });
sr.reveal('.icons', { delay: 500, origin: 'left' });
sr.reveal('.scroll-down', { delay: 500, origin: 'right' });

let arrowButtons = document.getElementsByClassName("arrow");
let reviews = document.getElementsByClassName("review");
let modus = "one-two-three";
for (let i = 0; i < arrowButtons.length; i++) {
    arrowButtons[i].onclick = function () {
        if (modus === "one-two-three") {
            reviews[0].style.display = "none";
            reviews[1].style.display = "none";
            reviews[2].style.display = "none";
            reviews[3].style.display = "block";
            reviews[4].style.display = "block";
            reviews[5].style.display = "block";
            modus = "four-five-six"
        }
        else {
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