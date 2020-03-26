// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands
// horizontally or vertically. You may assume all four edges of the grid are all
// surrounded by water.

const numIslands = (grid) => {
  const height = grid.length;
  const width = grid[0] ? grid[0].length : 0;
  const undiscovered = [...grid];
  let count = 0;

  const flood = (rowIndex, colIndex) => {
    if (rowIndex < 0 || colIndex < 0) return;
    if (rowIndex >= height || colIndex >= width) return;

    const entry = undiscovered[rowIndex][colIndex];
    if (entry !== '1') return;

    undiscovered[rowIndex][colIndex] = 0;
    flood(rowIndex + 1, colIndex);
    flood(rowIndex - 1, colIndex);
    flood(rowIndex, colIndex + 1);
    flood(rowIndex, colIndex - 1);
  };

  undiscovered.forEach((row, rowIndex) => {
    row.forEach((entry, colIndex) => {
      if (entry === '1') {
        flood(rowIndex, colIndex);
        count += 1;
      }
    });
  });

  return count;
};
