 const getTotalIsles = function (grid) {
    if (!grid || grid.length === 0) {
        return 0;
    }

    const rows = grid.length;
    const cols = grid[0].length;
    let numIslands = 0;

    const dfs = (i, j) => {
        // Base case: if we are out of bounds or at water, return.
        if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 'W') {
            return;
        }

        // Mark this cell as visited by changing 'L' to 'W'.
        grid[i][j] = 'W';

        // Move in all four directions
        dfs(i + 1, j); // down
        dfs(i - 1, j); // up
        dfs(i, j + 1); // right
        dfs(i, j - 1); // left
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // Found an island
            if (grid[i][j] === 'L') {
                numIslands++;
                // Use DFS to mark all connected land pieces as visited
                dfs(i, j);
            }
        }
    }

    return numIslands;
};

module.exports = getTotalIsles;
