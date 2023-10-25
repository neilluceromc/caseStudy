// TOGGLE MENU (pagaralan pa to, medyo hirap pa ako sa transform nito)
const headerMenu = document.querySelector(".header__menu"),
  menuBtn = document.querySelector(".menu-btn"),
  headerMenuItems = headerMenu.querySelectorAll("li a");
menuBtn.addEventListener("click", () => {
  headerMenu.classList.toggle("show");
});

headerMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    headerMenu.classList.remove("show");
  });
});

// Pag nag scroll nandon badin ung header/navigation bar
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});
