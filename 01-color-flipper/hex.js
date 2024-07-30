const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");
const backGround = document.querySelector(".background");

function changeBackground() {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += Math.floor(Math.random() * hex.length);
  }

  color.textContent = hexColor;
  backGround.style.backgroundColor = hexColor;
  console.log(backGround);
}

btn.addEventListener("click", changeBackground);
