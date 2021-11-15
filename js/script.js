const hamburger = document.querySelector('.hamburger-icon');
const menuList = document.querySelector('.menu-list');
const scrollToTop = document.querySelector('.scroll-to-top');
const techSkills = document.querySelector('.technical-skills');
const skillMenu = document.querySelector('.skill-menu');

hamburger.addEventListener("click", () => {
  if (menuList.classList.contains('show-menu')) {
    menuList.classList.remove('show-menu');
  } else {
    menuList.classList.add('show-menu');
  }
});

window.addEventListener("scroll", (event) => {
  if(event.target) {
    menuList.classList.remove('show-menu');
  }

  if(event.currentTarget.scrollY > 600) {
    scrollToTop.classList.add('show-scroll-to-top');
  } else {
    scrollToTop.classList.remove('show-scroll-to-top');
  }
});

scrollToTop.addEventListener("click", (e) => {
  window.scrollTo(0, 0);
  e.preventDefault();
});

skillMenu.addEventListener("click", (e) => {
  window.scrollTo(0, techSkills.getBoundingClientRect().top);
  e.preventDefault();
});