/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
var sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


const fragment = document.createDocumentFragment();

for (i=0;i<sections.length;i++)
{
    var item = document.createElement("li");
    var link = document.createElement("a");
    text =sections[i].dataset.nav;
    link.textContent=text
    link.href="#"+sections[i].id;
    link.classList.add("menu__link");
    item.appendChild(link);
    
    fragment.appendChild(item);
}
const navList = document.querySelector("#navbar__list");
navList.appendChild(fragment);



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active




