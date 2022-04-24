const menu = document.querySelector(".menu");
const clearButton = document.querySelector(".clearing");
const restartButton = document.querySelector(".restart");

function makeBoard(size) {
  let board = document.createElement('div');
  let result = new DocumentFragment();
  
  board.className = "board"
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
    board.append(row);
  }
  result.append(board);
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
menu.after(makeBoard(askGridSize()));

// Clearing


clearButton.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  for (let i = 0; i < squares.length; i++) {
    setColor(squares[i], "white");
  }
});

restartButton.addEventListener("click", () => {
  const board = document.querySelector(".board");
  board.remove();
  menu.after(makeBoard(askGridSize()));
})
