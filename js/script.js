const hamburger = document.querySelector('.hamburger-icon');
const menuList = document.querySelector('.menu-list');

hamburger.addEventListener("click", () => {
  console.log(hamburger);
  console.log(menuList);
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
});