'use script'
const menutray = document.querySelector('.fa-solid');
const menuContainer = document.querySelector('.menu-container');
const closebtn = document.querySelector('.close-btn');

//open menu
const openMenu = function() {
  menuContainer.style.display = "flex";
}
menutray.addEventListener('click',openMenu );

//close menu
const closeMenu = function() {
  menuContainer.style.display = "none";
}
closebtn.addEventListener('click',closeMenu );