function drawGrid(numberOfElements) {
  const grid = document.querySelector('.grid');
  deleteGridElements(grid);
  grid.setAttribute(
    'style',
    `grid-template-rows: repeat(${numberOfElements}, 1fr); grid-template-columns: repeat(${numberOfElements}, 1fr)`
  );
  createGridElements(grid, numberOfElements * numberOfElements);
}

function deleteGridElements(grid) {
  while (grid.childElementCount > 0) {
    grid.removeChild(grid.children[0]);
  }
}

function createGridElements(grid, numberOfElements) {
  for (let index = 0; index < numberOfElements; index++) {
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

function changeRangeValue(event) {
  document.querySelector(
    '.range-label'
  ).textContent = `${this.value} x ${this.value}`;
  drawGrid(this.value);
}

function clearElementsColor() {
  const elements = document.querySelectorAll('.grid-element');
  elements.forEach((element) => (element.style.backgroundColor = 'white'));
}

document.addEventListener('DOMContentLoaded', function () {
  const initialValue = 16;
  document.querySelector('#range').value = initialValue;
  document.querySelector('#range').addEventListener('input', changeRangeValue);
  document.querySelector('#range').dispatchEvent(new Event('input'));
  document
    .querySelector('.clear-btn')
    .addEventListener('click', clearElementsColor);
});
