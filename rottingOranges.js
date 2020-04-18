const orangesRotting = (grid) => {
  let rotten = [];
  const fresh = [];

  grid.forEach((row, i) => {
    row.forEach((orange, j) => {
      const coordStr = JSON.stringify([i, j]);

      if (orange === 1) {
        fresh.push(coordStr);
      } else if (orange === 2) {
        rotten.push(coordStr);
      }
    });
  });

  const neighbors = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let minute = 0;

  while (fresh.length > 0) {
    const infected = [];

    rotten.forEach((coordStr) => {
      const [i, j] = JSON.parse(coordStr);

      neighbors.forEach((nCoord) => {
        const nI = nCoord[0] + i;
        const nJ = nCoord[1] + j;

        if (grid[nI] !== undefined && grid[nI][nJ] !== undefined) {
          const coordStr = JSON.stringify([nI, nJ]);
          const freshIndex = fresh.indexOf(coordStr);

          if (freshIndex !== -1) {
            fresh.splice(freshIndex, 1);
            infected.push(coordStr);
          }
        }
      });
    });

    if (infected.length === 0) {  // Check if any more oranges became rotten
      return -1;  // We cannot rot all of the oranges
    }
    
    rotten = infected;
    minute += 1;
  };

  return minute;
};
