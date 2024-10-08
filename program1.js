
function numIslands(grid) {
    if (grid.length === 0) return 0;

    let numIslands = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    const dfs = (r, c) => {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W') {
            return;
        }
        grid[r][c] = 'W'; // Mark the land as water to avoid counting it again
        dfs(r + 1, c); // down
        dfs(r - 1, c); // up
        dfs(r, c + 1); // right
        dfs(r, c - 1); // left
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 'L') {
                numIslands++;
                dfs(r, c);
            }
        }
    }

    return numIslands;
}

// Example usage:
const grid = [
    ['L', 'L', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'W', 'W'],
    ['L', 'L', 'L', 'W', 'L']
];

console.log(numIslands(grid)); // Output: 3
