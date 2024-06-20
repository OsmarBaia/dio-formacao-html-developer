/*
* HEADER
* */
const menuBtn = document.querySelector('#menu-btn');
const navbarMenu = document.querySelector('.navbar');
const navbar = document.querySelector("#navbar")

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navbarMenu.classList.toggle('active');
})

// Navbar OnScroll effects
let prevScrollPos = window.scrollY;
window.onscroll = function() {
    // Colapse floating panel
    menuBtn.classList.remove('fa-times');
    navbarMenu.classList.remove('active');

    // Hide/show navbar on scroll
    let currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-10rem";
    }
    prevScrollPos = currentScrollPos;
}