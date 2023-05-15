const navBar = document.querySelector('nav');
const openMenu = document.getElementById('menu-button');
const closeMenu = document.querySelector('#menu-close');

function ToggleOpen(){
    navBar.classList.add('open');
       
}

function ToggleClose(){
    navBar.classList.remove('open');
}

openMenu.addEventListener('click', ToggleOpen);
closeMenu.addEventListener('click', ToggleClose);