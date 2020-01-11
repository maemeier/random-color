import "./styles.css";

const btn = document.querySelector(".btn");
const body = document.querySelector("body");

const colors = ["yellow", "red", "green", "pink"];

btn.addEventListener("click", changeColor);

function changeColor() {
  // body.style.backgroundColor = colors[3];
  let random = Math.floor(Math.random() * colors.length);

  body.style.backgroundColor = colors[random];
}
