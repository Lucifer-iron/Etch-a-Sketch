"use strict";

const generateGridBtn = document.querySelector("#gridGenBtn");

let gridSize = 0;

generateGridBtn.addEventListener("click", function (e) {
  gridSize = parseInt(prompt("enter grid size"));

  while (gridSize > 100) {
    gridSize = parseInt(prompt("Please enter grid size less than 100"));
  }

  gridMaker(gridSize);
});

// this function will generate the grid
function gridMaker(gridSize) {
  const gridContainer = document.querySelector(".gridContainer");

  console.log("im grid maker");

  for (let i = 1; i <= gridSize; i++) {
    const singleBox = document.createElement("span");
    gridContainer.appendChild(singleBox);
    singleBox.classList.add("box",`box${i}`);
  
   
  }
}
