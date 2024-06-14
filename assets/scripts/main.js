/* Header */
const menuButton = document.querySelector('#menu-btn');
const menuButtonOpen = document.querySelector('#menu-btn_open');
const menuButtonClose = document.querySelector('#menu-btn_close');
const sideMenu = document.querySelector('#sideMenu');
const headerMenu = document.querySelector('header');

menuButton.addEventListener('click', toggleMenu)

function toggleMenu() {
    menuButtonOpen.classList.toggle('hidden');
    menuButtonClose.classList.toggle('hidden');
    toggleSideMenu();
}


/*
* SideMenu
* */
function toggleSideMenu() {
    const animationDuration = 500;
    if (sideMenu.classList.contains('hidden')) {
        sideMenu.classList.add('slide-in-right');
        sideMenu.classList.toggle('hidden');
        disableScroll();
        setTimeout(() => {
            sideMenu.classList.remove('slide-in-right');
        }, animationDuration);
    } else {
        sideMenu.classList.add('slide-out-right');
        setTimeout(() => {
            sideMenu.classList.remove('slide-out-right');
            sideMenu.classList.toggle('hidden');
            enableScroll();
        }, animationDuration);
    }
}
function disableScroll() {
    // Get the current scroll position
    const scrollY = window.scrollY;

    // Save the current scroll position as a negative top offset
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
}

function enableScroll() {
    // Retrieve the previous scroll position
    const scrollY = parseInt(document.body.style.top || '0', 10);

    // Restore the scroll position and reset styles
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, Math.abs(scrollY)); // Scroll to the previous position
}


// trigger is mouse delta
let prevScrollPos = window.scrollY;
window.onscroll = function() {
    let currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
        headerMenu.style.top = "0";
    } else {
        headerMenu.style.top = "-150px";
    }
    prevScrollPos = currentScrollPos;
}
