const grid = document.querySelector(".grid");
const size = 100;

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

grid.append(makeGrid(size));