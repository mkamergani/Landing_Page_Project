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
const sections = document.querySelectorAll("section");


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
    link.id=sections[i].id+"link"
    link.dataset.secName = sections[i].id;
    link.classList.add("menu__link");
    item.appendChild(link);
    
    fragment.appendChild(item);
}
const navList = document.querySelector("#navbar__list");
navList.appendChild(fragment);



// Add class 'active' to section when near top of viewport
links=document.querySelectorAll(".menu__link")

/* 
* @description Detect the section in the View Port 
*  and ADD Active state to it and it's navigation Link
*/
function changeActiveSection (){
    var section1 = document.getElementById("section1")
    const options = {   
        threshold:0.5,
        rootMargin : "-100px"
    };

    observer = new IntersectionObserver( function (entries,observer){
        entries.forEach(entry =>{
            if (entry.isIntersecting){
                for (i=0;i<sections.length;i++){
                    sections[i].classList.remove("your-active-class")
                }
                for(i=0;i<links.length;i++){
                    links[i].classList.remove("active")
                }
                   
                entry.target.classList.add("your-active-class")
                linkId=entry.target.id+"link"
                link =document.getElementById(linkId)
                link.classList.add("active")
            }
            
           
        })
    },options)
    
    sections.forEach(section =>{
        observer.observe(section)
    }
    )
    
}

// Scroll to anchor ID using scrollTO event

/* 
* @description Prevent the jump to Default Action and Smooth scroll to the section 
*/
function scrollToSection (event){
    event.preventDefault();
    if ( event.target.nodeName.toLowerCase() === "a"){
        id=event.target.dataset.secName
        section = document.getElementById(id)
        section.scrollIntoView({behavior: "smooth", block: "center"});
    }

}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
const navigation = document.querySelector("#navbar__list");
navigation.addEventListener("click",scrollToSection)


// Set sections as active
window.addEventListener("scroll",changeActiveSection)


