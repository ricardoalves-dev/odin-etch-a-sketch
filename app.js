function drawGrid(numberOfElements) {
  const grid = document.querySelector('.grid');
  grid.setAttribute(
    'style',
    `grid-template-rows: repeat(${numberOfElements}, 1fr); grid-template-columns: repeat(${numberOfElements}, 1fr)`
  );
  deleteGridElements();
  createGridElements(grid, numberOfElements);
}

function deleteGridElements() {
  const elements = document.querySelectorAll('.grid-element');
  while (elements.length > 0) {
    elements.item[0].remove;
  }
}

function createGridElements(grid, numberOfElements) {
  for (let index = 0; index < numberOfElements * numberOfElements; index++) {
    grid.appendChild(createGridElement());
  }
}

function createGridElement() {
  const element = document.createElement('div');
  element.classList.add('grid-element');
  element.addEventListener('click', changeElementColor);
  return element;
}

function changeElementColor(event) {
  this.style.backgroundColor =
    this.style.backgroundColor === 'black' ? 'white' : 'black';
}

drawGrid(16);
