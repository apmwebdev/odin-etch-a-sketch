let sketch = {};

sketch.createGrid = (size = 16) => {
  size = parseInt(size);
  if (!size || size < 1) {
    sketch.inputIsInvalid(size);
    return;
  }
  
  document.getElementById('grid-container').innerHTML = '';
  for (let i = 0; i < size; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < size; j++) {
      let pixel = document.createElement('div');
      pixel.classList.add('pixel');
      row.appendChild(pixel);
    }
    document.getElementById('grid-container').appendChild(row);
  }
  
  sketch.addPixelListeners();
};

sketch.inputIsInvalid = (size) => {
  console.log(`${size} is an invalid input for grid size`);
};

sketch.addPixelListeners = () => {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach(pixel => {
    pixel.addEventListener('mouseover',
      (e) => sketch.fillPixel(e));
  })
};

sketch.fillPixel = (e) => {
  if (e.buttons === 1) {
    e.target.classList.add('filled')
  }
}

sketch.resetPixels = () => {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach(pixel => {
    pixel.classList.remove('filled');
  });
}

sketch.setGridSize = () => {
  let gridSize = parseInt(prompt('Set grid size'));
  if (!gridSize || gridSize < 1 || gridSize > 100) {
    alert('Invalid grid size');
  } else {
    sketch.createGrid(gridSize);
  }
}

sketch.init = () => {
  sketch.createGrid();
  document.getElementById('reset').addEventListener('click',
    () => sketch.resetPixels());
  document.getElementById('setGrid').addEventListener('click',
    () => sketch.setGridSize());
}

sketch.init();