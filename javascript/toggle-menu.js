document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const barsIcon = document.querySelector('.fa-bars');
    const timesIcon = document.querySelector('.fa-times');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        barsIcon.classList.toggle('hidden');
        timesIcon.classList.toggle('hidden');
    });
});
