// * * * * * * * * * * * * * * * * * * * * * * * * * * *
// 1. Get HTML Elements
// * * * * * * * * * * * * * * * * * * * * * * * * * * *
var openButton      = document.querySelector('#open-mobile-menu-button');
var closeButton     = document.querySelector('#close-mobile-menu-button');
var mobileMenu      = document.querySelector('#mobile-menu');


// * * * * * * * * * * * * * * * * * * * * * * * * * * *
// 2. Define Abilities (Functions)
// * * * * * * * * * * * * * * * * * * * * * * * * * * *
function openMenu() {
    mobileMenu.className = 'menu open visible-for-small-and-only';
}

function closeMenu() {
    mobileMenu.className = 'menu close visible-for-small-and-only';
}



// * * * * * * * * * * * * * * * * * * * * * * * * * * *
// 3. Wire everything up
// * * * * * * * * * * * * * * * * * * * * * * * * * * *
openButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
