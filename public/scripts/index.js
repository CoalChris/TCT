$(document).ready(function() {

   $(".jumbotron").hide();
   $("footer").hide();
   $("header").hide();
   $("#dropdown-menu").hide();
   $("#scroll-up").hide();
   //$(".text").hide();
   

   $("header").slideDown(800);
   $(".jumbotron").fadeIn(1000);
   $("footer").fadeIn(3000);
   $("#menu-btn").click(function() {
      $("#dropdown-menu").toggle();
      $("#menu-btn").toggleClass('open');
   });
   $("#dropdown-menu").click(function() {
      $("#dropdown-menu").toggle();
      $("#menu-btn").toggleClass('open');
   });
   $(window).scroll(function() {
      if ($(window).width() > 1200) {
         if ($(window).height() <= $(window).scrollTop()) {
            $("#scroll-up").fadeIn(500);
         } else {
            $("#scroll-up").fadeOut(500);
         }
      }
   });
   
   /*
   $("#searchbar").focus(function() {
      $("#searchbtn").show(), 600, $(this).animate({
         "width": "600px"
      });
   });
   $("#searchbar").blur(function() {
      $("#searchbtn").hide(), 600, $(this).animate({
         "width": "200px"
      });
   });*/
});