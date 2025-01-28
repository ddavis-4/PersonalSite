// This is the file for the navbar scroll effect.
//
//
//
//
document.addEventListener("DOMContentLoaded", function () {
    var lastScrollTop = 0; // Variable to store the last scroll position
    var navbar = document.querySelector('.navbar'); // Select the navbar and cast to HTMLElement
    if (navbar) {
        window.addEventListener('scroll', function () {
            var currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Get the current scroll position
            if (currentScroll > lastScrollTop) {
                // Scrolling down
                navbar.style.top = '-100px'; // Hide the navbar
            }
            else {
                // Scrolling up
                navbar.style.top = '0'; // Show the navbar
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Update last scroll top
        });
    }
});
