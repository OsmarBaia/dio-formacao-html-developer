/* Header */
const menuButton = document.querySelector('#menu-btn');
const menuButtonOpen = document.querySelector('#menu-btn_open');
const menuButtonClose = document.querySelector('#menu-btn_close');
const sideMenu = document.querySelector('#sideMenu');

menuButton.addEventListener('click', toggleMenu)

function toggleMenu() {
    menuButtonOpen.classList.toggle('hidden');
    menuButtonClose.classList.toggle('hidden');
    toggleSideMenuVisibility();
}

function toggleSideMenuVisibility(){
    const animationDuration = 500;

    if(sideMenu.classList.contains('hidden')){
        sideMenu.classList.add('slide-in-right');
        sideMenu.classList.toggle('hidden');
        setTimeout(()=>{
            sideMenu.classList.remove('slide-in-right');
        },animationDuration);
    }
    else
    {
        sideMenu.classList.add('slide-out-right');
        setTimeout(() => {
            sideMenu.classList.remove('slide-out-right');
            sideMenu.classList.toggle('hidden');
        }, animationDuration);
    }
}