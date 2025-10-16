const button = document.querySelector("button");
const menu = document.getElementById("mobileMenu");

button.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
