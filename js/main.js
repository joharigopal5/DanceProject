// Header Scrolled Navbar
let nav = document.querySelector('.navbar');
window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add('header-scrolled');
    } else {
        nav.classList.remove('header-scrolled')
    }
}


// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})




// Owl Carousel JS
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 4,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
               
            },
            1000: {
                items: 5,
            }
        }
    })
})