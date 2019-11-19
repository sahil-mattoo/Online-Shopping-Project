$(document).ready(function() {

  var flag = 0;

  $('body').fadeIn(500);

  $('#menu-icon').click(function() {

    if (flag == 0) {
      $('#menu').animate({
        left: '0px'
      }, 500);
      $('body').animate({
        left: '200px'
      }, 500);
      flag = 1;
    } else {
      $('#menu').animate({
        left: '-200px'
      }, 500);
      $('body').animate({
        left: '0px'
      }, 500);
      flag = 0;
    }
  });

  $('#Body').mouseenter(function() {
    $('#menu').animate({
      left: '-200px'
    }, 500);
    $('body').animate({
      left: '0px'
    }, 500);
    flag = 0;

  });

});

