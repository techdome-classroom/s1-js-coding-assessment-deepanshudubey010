const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  const dfs = function (r, c) {
    // Check for out of bounds and water
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W') {
      return;
    }

    // Mark the cell as visited by changing 'L' to 'W'
    grid[r][c] = 'W'; 

    // Explore all four directions (up, down, left, right)
    dfs(r - 1, c); // Up
    dfs(r + 1, c); // Down
    dfs(r, c - 1); // Left
    dfs(r, c + 1); // Right
  };

  // Traverse the entire grid
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // If we find land 'L', we found an island
      if (grid[r][c] === 'L') {
        islandCount++;
        // Use DFS to mark all connected land as visited
        dfs(r, c);
      }
    }
  }

  return islandCount;
};

module.exports = getTotalIsles;
