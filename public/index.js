let burger = document.querySelector("#burger");
let menu = document.querySelector("#menu");

burger.addEventListener("click", (evt) => {
  menu.classList.toggle("hidden");
});
