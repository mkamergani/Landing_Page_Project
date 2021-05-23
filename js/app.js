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
function changeActiveSection (){
    var section1 = document.getElementById("section1")
    const options = {
        
        threshold:0.5,
        rootMargin : "-100px"
    };

    observer = new IntersectionObserver( function (entries,observer){
        entries.forEach(entry =>{
            if (entry.isIntersecting)
            {
                for (i=0;i<sections.length;i++)
                {
                    sections[i].classList.remove("your-active-class")
                }
                entry.target.classList.add("your-active-class")
            }
           
        })
    },options)
    
    sections.forEach(section =>{
     observer.observe(section)
    }
        )
    
}


function scrollToSection (event){
 event.preventDefault();
 if ( event.target.nodeName.toLowerCase() === "a")
 {
     
     
     id=event.target.dataset.secName
     section = document.getElementById(id)
     console.log(section)
     section.scrollIntoView({behavior: "smooth", block: "center"});
 }

}
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
    link.dataset.secName = sections[i].id;
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
  const navigation = document.querySelector("#navbar__list");
  navigation.addEventListener("click",scrollToSection)


// Set sections as active
 window.addEventListener("scroll",changeActiveSection)


