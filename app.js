$(document).ready(function () {
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // Mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    centerMode: true, // Show 1.5 slides on mobile
                }
            }
        ]
    });
});
$('.owl-carousel').owlCarousel({
    loop: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1.1,
            nav: true
        },
        600: {
            items: 2.2,
            nav: false
        },
        1000: {
            items: 2.5,
            nav: true,
            loop: false
        }
    }
})

window.addEventListener('scroll', function () {
    // When the user scrolls, check the scroll position
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Set a threshold value, such as 100 pixels, to trigger the class change
    if (scrollPosition > 100) {
        // Assuming you have a reference to the div or you can select it using document.getElementById or other methods
        var myDiv = document.getElementById('navbar-example2');

        // Add a class to the div
        myDiv.classList.add('navbarBgWhite');
        myDiv.classList.add('animate__slideInDown');
    } else {
        // If the scroll position is less than the threshold, remove the class
        var myDiv = document.getElementById('navbar-example2');
        myDiv.classList.remove('navbarBgWhite');
        myDiv.classList.remove('animate__slideInDown');
    }
});

