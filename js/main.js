
// owl-carousel
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        loop: true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplaySpeed:1000,
        // autoplayHoverpause:true,
        smartSpeed:1500
    });
  });

// typed-js

  var typed5 = new Typed("#typed5", {
        strings: ["Developer", "Designer", "Freelancer"],
        typeSpeed: 60,
        backSpeed: 60,
        cursorChar: "|",
        shuffle: true,
        smartBackspace: false,
        loop: true
      });