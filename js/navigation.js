document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.nav-overlay');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        navOverlay.classList.toggle('active');
        this.classList.toggle('active');
    });

    navOverlay.addEventListener('click', function() {
        navLinks.classList.remove('active');
        navOverlay.classList.remove('active');
        navToggle.classList.remove('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navOverlay.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}); 