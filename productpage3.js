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
$('button').click( function(event) {
    if ($(this).hasClass('submitted')){
      event.preventDefault();
      return;
    }
    $(this).addClass('submitted');
    $(this).html('Added to cart!');
    
    setTimeout(goback, 3000);
  });
  
  function goback() {
    $('button').removeClass('submitted').html('Submit stuff');
  }
  $('button').mousedown(function(){
    if ($(this).hasClass('submitted'))
    $(this).addClass('error');
  }).mouseup(function(){
    $(this).removeClass('error');
  });