// selecting DOM items

// Selecting the first menuBten div 
const menuBtn = document.querySelector('.btn-menu');

// Selecting the first menu div
const menu = document.querySelector('.menu');

//Selecting the first menuNav div
const menuNav = document.querySelector('.menu-nav');

//Selecting the first menu-branding div
const menuBranding = document.querySelector('.menu-branding');


//Taking all the navItems and storing it in a list, similar to an array
//Using quertSelectorAll() instead of querySelector(), because we want to store all the  nav items not just the first one that appears
const navItems = document.querySelectorAll('.nav-items');



//Settings the initial state of the menu

let showMenu = false; //we use let so we can change the value of the variable later on

//Adding an event listener when the menuBtn is clicked
//This event Listener will call the toggleMenu function
menuBtn.addEventListener('click', toggleMenu);


function toggleMenu() {
    //checking the state of the showMenu variable
    if (!showMenu) { //if the menu (the overLay) is not shown
        //adding the close class to the menuBtn using the .classList.add() on the dom item (menuBtn)
        menuBtn.classList.add('close');
        menu.classList.add('show');
    } {

    }
}