///// Media Query functions
// Get screen size
const desktopMediaQuery = window.matchMedia('(min-width: 671px');
const mobileMediaQuery = window.matchMedia('(max-width: 670px)');


// Match screen size
if (desktopMediaQuery.matches) {
    // Function
    document.querySelector("#mobile").style.display="none";
    document.querySelector(".orientation").style.display="none";
    document.querySelector(".information").style.display="none";
    document.querySelector(".guest").style.display="none";
}

if (mobileMediaQuery.matches) {
    document.querySelector("#mobile").style.display="";
    document.querySelector(".orientation").style.display="";
    document.querySelector(".information").style.display="";
    document.querySelector(".guest").style.display="";
}