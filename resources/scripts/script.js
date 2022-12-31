"use strict";
// html calls
const grid = document.querySelector(".board");
const btn16x16 = document.querySelector(".btn-small");
let cell = "";
const buttons = document.querySelectorAll("button");
const btnSmall = document.querySelector(".btn-small");
// variable sets
let btnActivated = false;
const divArr = [];
const small = 16 * 2;
const medium = 32 * 2;
const large = 64 * 2;
const extraLarge = 128 * 2;

function populate(num) {
  for (let i = 0; i < num; i++) {
    grid.appendChild(document.createElement("div" + i));
  }
}

// btn16x16.addEventListener("click", function () {
//   if (!btnActivated) {
//     populate(256);
//     btnActivated = true;
//     for (let i = 0; i < 256; i++) {
//       document.querySelector("div" + i).classList.add("cell");
//     }
//     cell = document.querySelectorAll(".cell");
//     Array.from(cell).forEach(function (cell) {
//       cell.addEventListener("mouseover", function () {
//         console.log("works");
//         this.classList.add("block");
//       });
//     });
//   } else return;
// });

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.className === "reset-btn") {
      console.log("reset");
    }

    if (!btnActivated) {
      if (button.className === "btn-small") {
        console.log("small");
        btnActivated = true;
      } else if (button.className === "btn-medium") {
        console.log("medium");
      } else if (button.className === "btn-large") {
        console.log("large");
      } else if (button.className === "btn-xl") {
        console.log("XL");
      }
    } else return;
  });
});
