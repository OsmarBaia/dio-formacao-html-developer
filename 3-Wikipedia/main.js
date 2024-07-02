const nav_menu = document.querySelector("#nav-menu");
const nav_menuBtn = document.querySelector("#nav-menu-btn");
const nav_menuBtn_icon = document.querySelector("#nav-menu-btn i");
const colab_menu = document.querySelector("#colab-menu");
const colab_menuBtn = document.querySelector("#colab-menu-btn");

nav_menuBtn.addEventListener("click", () => {
    nav_menu.classList.toggle("active");

    // Change Icon
    toggleMenuIcon();
})

colab_menuBtn.addEventListener("click", () => {
    colab_menu.classList.toggle("active");
})


function toggleMenuIcon() {
    nav_menuBtn_icon.classList.toggle('fa-bars');
    nav_menuBtn_icon.classList.toggle('fa-times');
}