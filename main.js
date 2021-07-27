var i = 0;
var txt = "HELLO I'M HAMID";

var speed = 500;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("intro").innerHTML = txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

const click = document.getElementById("navigation");
const NavigationHeader = document.getElementById("start");

click.addEventListener("click", () => {
  NavigationHeader.classList.toggle("display");
});
