function numIslands(grid) {
    if (grid.length === 0) return 0;

    let numIslands = 0;

    const dfs = (i, j) => {
        
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 'W') {
            return;
        }

        
        grid[i][j] = 'W';

        
        dfs(i + 1, j); // down
        dfs(i - 1, j); // up
        dfs(i, j + 1); // right
        dfs(i, j - 1); // left
    };

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 'L') {
                numIslands++;
                dfs(i, j); // Island ko explore karne ke liye DFS call
            }
        }
    }

    return numIslands;
}

// Dispatch 1
const dispatch1 = [
    ["L", "L", "L", "L", "W"],
    ["L", "L", "W", "L", "W"],
    ["L", "L", "W", "W", "W"],
    ["W", "W", "W", "W", "W"],
];
console.log(numIslands(dispatch1)); // Output: 1

// Dispatch 2
const dispatch2 = [
    ["L", "L", "W", "W", "W"],
    ["L", "L", "W", "W", "W"],
    ["W", "W", "L", "W", "W"],
    ["W", "W", "W", "L", "L"],
];
console.log(numIslands(dispatch2)); // Output: 3
