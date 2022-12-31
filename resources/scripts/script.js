"use strict";
// html calls
// .
// .
// .
const grid = document.querySelector(".board");
const gridStyle = document.getElementById("board-style");
const btn16x16 = document.querySelector(".btn-small");
let cell = "";
const buttons = document.querySelectorAll("button");
const btnSmall = document.querySelector(".btn-small");

// variable sets
// .
// .
// .
let btnActivated = false;
const divArr = [];
const small = 16 * 16;
const medium = 32 * 32;
const large = 64 * 64;

// functions
// .
// .
// .
// .
function populate(num) {
  for (let i = 0; i < num; i++) {
    grid.appendChild(document.createElement("div" + i));
    document.querySelector("div" + i).classList.add("cell");
    btnActivated = true;
  }
  cell = document.querySelectorAll(".cell");
  Array.from(cell).forEach(function (cell) {
    cell.addEventListener("mouseover", function () {
      console.log("works");
      this.classList.add("block");
    });
  });
}

function gridLayout(num) {
  gridStyle.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  gridStyle.style.gridTemplateRows = `repeat(auto-fill, 1fr)`;
}
function resetGame() {
  gridStyle.style.gridTemplateColumns = `repeat(0, 0)`;
  gridStyle.style.gridTemplateRows = `repeat(auto-fill, 1fr)`;
  btnActivated = false;
  cell.forEach((el) => el.remove());
  cell = "";
}
// event listeners
// .
// .
// .
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.className === "reset-btn") {
      resetGame();
    }

    if (!btnActivated) {
      if (button.className === "btn-small") {
        console.log("small");
        gridLayout(16);
        populate(small);
      } else if (button.className === "btn-medium") {
        console.log("medium");
        gridLayout(32);
        populate(medium);
      } else if (button.className === "btn-large") {
        console.log("large");
        gridLayout(64);
        populate(large);
      }
    } else return;
  });
});
