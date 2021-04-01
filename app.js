
// burger click visibility
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}



// back-to-top button

//how to show back to top button when user scrolls more than 150 pixels up from bottom of document.
// Show/Hide the button
window.onscroll = function() {
    var pageOffset = document.documentElement.scrollTop || document.body.scrollTop,
        btn = document.getElementById('back-to-top');
    if (btn) btn.style.visibility = pageOffset > 450 ? 'visible' : 'hidden';
};