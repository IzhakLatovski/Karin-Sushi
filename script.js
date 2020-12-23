// make the navbar dissapear on scrolling to bottom

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

// make the collapsable (phone) menu dissapear after clicking a link

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// make the line effect on navigation bar

$(".nav-about").hover(function(){
  $(".nav-about-animation").toggleClass("nav-line-animation");
});

$(".nav-menu").hover(function(){
  $(".nav-menu-animation").toggleClass("nav-line-animation");
});

$(".nav-news").hover(function(){
  $(".nav-news-animation").toggleClass("nav-line-animation");
});

$(".nav-gallery").hover(function(){
  $(".nav-gallery-animation").toggleClass("nav-line-animation");
});

$(".nav-reviews").hover(function(){
  $(".nav-reviews-animation").toggleClass("nav-line-animation");
});

$(".nav-contact").hover(function(){
  $(".nav-contact-animation").toggleClass("nav-line-animation");
});
