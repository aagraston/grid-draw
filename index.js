let gridWidth = 40;
let gridHeight = 40;

let percentageMod = (1/gridWidth) * 100;


const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < (gridWidth * gridHeight); i++) {
  let gridElement = document.createElement('div');
  
  gridElement.classList.add('grid-item');
  gridElement.style.cssText += `flex-basis: ${percentageMod}%;`;

  gridElement.addEventListener('pointerover', hoverGridElement);

  gridContainer.appendChild(gridElement);
}

let gridElements = document.querySelectorAll('.grid-item');
let clearButton = document.querySelector('#clearButton');

clearButton.addEventListener('click', removeColor);


function removeColor() {
  gridElements.forEach(element => {
    element.classList.remove('grid-item-hovered');
  })
}



function hoverGridElement() {
  this.classList.add('grid-item-hovered');
}