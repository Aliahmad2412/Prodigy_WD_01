// Select the navigation bar
const navbar = document.getElementById('navbar');

// Add an event listener to change the navbar style on scroll
window.addEventListener('scroll', function() {
    // If the user scrolls down 50px or more, add the 'scrolled' class to the navbar
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
