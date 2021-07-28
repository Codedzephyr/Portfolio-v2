const click = document.getElementById("navigation");
const NavigationHeader = document.getElementById("start");

click.addEventListener("click", () => {
  NavigationHeader.classList.toggle("display");
});
