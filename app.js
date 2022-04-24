const grid = document.querySelector(".grid");
const size = askGridSize();

function makeGrid(size) {
  let result = new DocumentFragment();

  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.className = "row";

    for (let j = 0; j < size; j++) {
      let square = document.createElement("div");
      square.className = "square";
      row.append(square);
    }
    result.append(row);
  }

  return result;
}

function askGridSize() {
  let size = prompt('Enter grid size(max value - 100):', 100);

  if (size > 100) {
    size = prompt('Enter grid size(max value - 100):', 100);
  }

  return size;
}

grid.append(makeGrid(size));