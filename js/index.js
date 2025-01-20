var menuResponsive = document.querySelector('.menu-responsive');
var closeMenu = document.querySelector('.close-menu');
var nav = document.querySelector('nav');

console.log('teste')

/* Menu Reponsivo */
menuResponsive.addEventListener('click', (e) => {
    nav.style.left = "0px";
});

closeMenu.addEventListener('click', (e) => {
    nav.style.left = "-400px";
})