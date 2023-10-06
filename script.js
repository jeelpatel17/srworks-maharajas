// ASSIGNING ALL ELEMENTS TO THEIR RESPECTIVE VARIABLE TO MAKE IT LOOK CONCISE
let navbar = document.getElementById("nav");
let navlinks = document.getElementById("nav__links");
let hamNav = document.getElementById("hamburger");

// ADDING A LITTLE NAVBAR ANIMATION WHICH CONTRACTS THE NAVBAR WHEN SCROLLED, SO THE USER HAS A BETTER VIEW OF THE SITE
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop <= 50) {
    navbar.style.padding = "30px 0";
  } else {
    navbar.style.padding = "10px 0";
  }
});

// DISPLAYING NAVBAR LINKS WHEN HAMBURGER ICON IS CLICKED
hamNav.addEventListener("click", () => {
  navlinks.classList.toggle("active");
  hamNav.classList.toggle("is-active");
});
