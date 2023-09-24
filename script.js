const menuLinks = document.querySelectorAll(".menu_link");
const menuButt = document.querySelectorAll(".header_button");
const menuBtn = document.querySelector(".burger_menu");
const menu = document.querySelector(".menu");

// Burger menu
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});
// Close menu
function closeMenu() {
  menuBtn.classList.remove("active");
  menu.classList.remove("active");
}

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});
menuButt.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});
// Navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
// Animation title
var options = {
  strings: ["Frontend Developer"],
  typeSpeed: 80,
  backSpeed: 25,
  startDelay: 1000,
  backDelay: 1000,
  loop: true,
};
var typed = new Typed("#typed-text", options);


const scrollButtUp = document.getElementById("butt_scroll");
scrollButtUp.addEventListener("click", scrollUp);

function scrollUp(){
  window.scrollTo({
    top:0,
    behavior: "smooth"
  });
}