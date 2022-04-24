const board = document.querySelector(".board");
const clearButton = document.querySelector(".clearing");
const size = 50;

function makeGrid(size) {
  let result = new DocumentFragment();

  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.className = "row";

    for (let j = 0; j < size; j++) {
      let square = document.createElement("div");
      square.className = "square";

      square.addEventListener("mouseover", () => {
        setColor(square, "black");
      });

      row.append(square);
    }
    result.append(row);
  }

  return result;
}

function askGridSize() {
  let size = prompt("Enter grid size(max value - 100):", 100);

  if (size > 100) {
    size = prompt("Enter grid size(max value - 100):", 100);
  }

  return size;
}

function setColor(element, color) {
  element.style.backgroundColor = color;
}

// Make grid
board.append(makeGrid(size));

// Clearing
const squares = document.querySelectorAll(".square");
const boardSize = size ** 2;
console.log(squares);

clearButton.addEventListener("click", () => {
  for (let i = 0; i < boardSize; i++) {
    setColor(squares[i], "white");
  }
});
