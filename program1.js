
function numIslands(grid) {
    if (grid.length === 0) return 0;

    let count = 0;

    function dfs(i, j) {
        // Check boundaries and if the current cell is water
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 'W') {
            return;
        }

        // Mark the current landmass as visited
        grid[i][j] = 'W';

        // Explore all four directions (up, down, left, right)
        dfs(i + 1, j); // down
        dfs(i - 1, j); // up
        dfs(i, j + 1); // right
        dfs(i, j - 1); // left
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 'L') {
                count++; // Found a new island
                dfs(i, j); // Explore the entire island
            }
        }
    }

    return count;
}

// Test cases
const dispatch1 = [
    ["L","L","L","L","W"],
    ["L","L","W","L","W"],
    ["L","L","W","W","W"],
    ["W","W","W","W","W"],
];

const dispatch2 = [
    ["L","L","W","W","W"],
    ["L","L","W","W","W"],
    ["W","W","L","W","W"],
    ["W","W","W","L","L"],
];

console.log(numIslands(dispatch1)); // Output: 1
console.log(numIslands(dispatch2)); // Output: 3


