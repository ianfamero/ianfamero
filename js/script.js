/* HAMBURGER MENU */
const hamburger_icon = document.querySelector(".hamburger-icon");
const menu_list = document.querySelector(".menu-list");

hamburger_icon.addEventListener("click", () => {
  if (menu_list.classList.contains("show-menu")) {
    menu_list.classList.remove("show-menu");
  } else {
    menu_list.classList.add("show-menu");
  }
});


/* SCROLL TO TOP */
const scroll_to_top = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", (e) => { // show scroll to top button when location is greater than 600px
  if(e.currentTarget.scrollY > 600) {
    scroll_to_top.classList.add("scroll-to-top-block");
  } else {
    scroll_to_top.classList.remove("scroll-to-top-block");
  }
});

scroll_to_top.addEventListener("click", (e) => { // scroll to the top of the page when the scroll to top button is clicked
  window.scrollTo(0, 0);
  e.preventDefault();
});


/* SAME-PAGE MENU */
const skill_menu = document.querySelector(".skill-menu");
const technical_skills = document.querySelector(".technical-skills");

skill_menu.addEventListener("click", (e) => { // get the location of the element then scroll to it
  window.scrollTo(0, technical_skills.getBoundingClientRect().top);
  e.preventDefault();
});

window.addEventListener("scroll", (e) => {  // close the menu on scroll
  if(e.target) {
    menu_list.classList.remove("show-menu");
  }
});