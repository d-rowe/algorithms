// eslint-disable-next-line no-unused-vars
const distinctIslands = (grid) => {
  const workingGrid = [...grid];
  const shapes = new Set();
  let currentShape;

  const flood = (rowIndex, colIndex, direction) => {
    if (
      (rowIndex < 0 || colIndex < 0) // Off the left side of map
      || (rowIndex > grid.length - 1 || colIndex > grid[rowIndex].length - 1) // Off right side
      || (workingGrid[rowIndex][colIndex] === 0) // Current tile is water
    ) {
      currentShape += '.'; // Register end of stack
      return;
    }

    workingGrid[rowIndex][colIndex] = 0;
    currentShape += direction;

    flood(rowIndex, colIndex + 1, '>'); // Right
    flood(rowIndex + 1, colIndex, 'v'); // Down
    flood(rowIndex, colIndex - 1, '<'); // Left
    flood(rowIndex - 1, colIndex, '^'); // Up
  };

  workingGrid.forEach((row, i) => {
    row.forEach((entry, j) => {
      if (entry === 1) {
        currentShape = '';
        flood(i, j, '');
        shapes.add(currentShape);
      }
    });
  });

  return shapes.size;
};
