const distinctIslands = (grid) => {
  const workingGrid = [...grid];
  const shapes = new Set();
  let currentShape;

  const flood = (rowIndex, colIndex, direction) => {
    if (rowIndex < 0 || colIndex < 0) return;
    if (rowIndex > grid.length - 1 || colIndex > grid[rowIndex].length - 1) return;
    if (workingGrid[rowIndex][colIndex] === 0) return;

    workingGrid[rowIndex][colIndex] = 0;
    currentShape += direction;

    flood(rowIndex, colIndex + 1, 'r');
    flood(rowIndex + 1, colIndex, 'd');
    flood(rowIndex, colIndex - 1, 'l');
    flood(rowIndex - 1, colIndex, 'u');
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
