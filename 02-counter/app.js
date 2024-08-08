const number = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

let cnt = 0;



// btns.forEach(function (btn){
//   btn.addEventListener('click', function (e) {
//     const styles = e.currentTarget.classList;
//     if (styles.contains("dec")) {
//       cnt--;
//     } else if (styles.contains("inc")) {
//       cnt++;
//     } else {
//       cnt = 0;
//     }

//     if (cnt > 0) {
//       number.style.color = "green";
//     } else if (cnt < 0) {
//       number.style.color = "red";
//     } else {
//       number.style.color = "black";
//     }

//     number.textContent = cnt;
//   })
// });


// my code
function decrementNumber() {
  --cnt;
  number.textContent = cnt;
  updateNumberColor();
}
function incrementNumber() {
  ++cnt;
  number.textContent = cnt;
  updateNumberColor();
}
function resetNumber() {
  cnt = 0;
  number.textContent = cnt;
  updateNumberColor();
}

function updateNumberColor() {
  if (cnt > 0) {
    number.style.color = "green";
  } else if (cnt < 0) {
    number.style.color = "red";
  } else {
    number.style.color = "black";
  }
}

for (const button of btns) {
  switch (button.classList[1]) {
    case "dec":
      button.addEventListener("click", decrementNumber);
      break;
    case "reset":
      button.addEventListener("click", resetNumber);
      break;
      case "inc":
      button.addEventListener("click", incrementNumber);
      break;
    default:
      break;
  }
}