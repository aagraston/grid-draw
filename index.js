let gridWidth = 16;
let gridHeight = 16;

const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < (gridWidth * gridHeight); i++) {
  let gridElement = document.createElement('div');
  gridElement.classList.add('grid-item');
  gridContainer.appendChild(gridElement);
}

console.log(gridContainer);