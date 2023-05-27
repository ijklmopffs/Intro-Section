const buttons = [
  document.getElementById("dropdownButton"),
  document.getElementById("dropdownButton2"),
];

const dropdowns = [
  document.getElementById("myDropdown"),
  document.getElementById("myDropdown2"),
];

// Attach click event listener using a loop
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    dropdowns[index].classList.toggle("show");
    console.log("worked");
  });
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  if (navMenu.classList.contains("active")) {
    hamburger.setAttribute("src", "./images/icon-close-menu.svg");
  } else {
    hamburger.setAttribute("src", "./images/icon-menu.svg");
  }
}
