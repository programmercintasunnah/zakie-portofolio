const iconBars = document.querySelector(".fa-bars");
const iconClose = document.querySelector(".fa-close");

iconClose.style.display = "none";

iconBars.addEventListener("click", () => {
  iconBars.style.display = "none";
  iconClose.style.display = "block";
});

iconClose.addEventListener("click", () => {
  iconClose.style.display = "none";
  iconBars.style.display = "block";
});
