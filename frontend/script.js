let header = document.querySelector('header');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let nav = document.getElementById('navbar');
let menuIcon = document.getElementById('menu-icon');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-xmark');
    nav.classList.toggle('close');
});

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                // ===== active navLinks =====
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // ===== sticky header =====
    header.classList.toggle('sticky', window.scrollY > 50);
};