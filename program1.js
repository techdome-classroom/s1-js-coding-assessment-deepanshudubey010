const getTotalIsles = function (grid) {


  function countIslands(grid) {
    if (grid.length === 0) return 0;

    let numIslands = 0;

    const rows = grid.length;
    const cols = grid[0].length;

    // Helper function for depth-first search
    function dfs(r, c) {
        // Check for out of bounds and if it's water
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W') {
            return;
        }

        // Mark the current land as water to avoid revisiting (or visited)
        grid[r][c] = 'W';

        // Explore the four possible directions (up, down, left, right)
        dfs(r + 1, c); // Down
        dfs(r - 1, c); // Up
        dfs(r, c + 1); // Right
        dfs(r, c - 1); // Left
    }

    // Traverse the entire grid
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // If we find land, we found an island
            if (grid[r][c] === 'L') {
                numIslands++;
                // Use DFS to mark all connected land as visited
                dfs(r, c);
            }
        }
    }

    return numIslands;
}

// Example usage:
const map1 = [
    ["L","L","L","L","W"],
    ["L","L","W","L","W"],
    ["L","L","W","W","W"],
    ["W","W","W","W","W"],
];

const map2 = [
    ["L","L","W","W","W"],
    ["L","L","W","W","W"],
    ["W","W","L","W","W"],
    ["W","W","W","L","L"],
];

console.log(countIslands(map1)); // Output: 1
console.log(countIslands(map2)); // Output: 3

};

module.exports = getTotalIsles;
