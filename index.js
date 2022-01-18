let gridWidth = 100;
let gridHeight = 100;

let percentageMod = (1/gridWidth) * 100;


const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < (gridWidth * gridHeight); i++) {
  let gridElement = document.createElement('div');
  
  gridElement.classList.add('grid-item');
  gridElement.style.cssText += `flex-basis: ${percentageMod}%;`;

  gridElement.addEventListener('pointerover', hoverGridElement);

  gridContainer.appendChild(gridElement);
}

function hoverGridElement() {
  this.classList.add('grid-item-hovered');
}

console.log(gridContainer);