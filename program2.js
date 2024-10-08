const decodeTheRing = function (s, p) {

    function isMatch(secret, pattern) {
    
   const m = secret.length;
    const n = pattern.length;

    // Create a 2D DP array with (m+1) x (n+1)
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(false));

    // Empty pattern matches empty message
    dp[0][0] = true;

    // Fill the first row for patterns with '*'
    for (let j = 1; j <= n; j++) {
        if (pattern[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];
        }
    }

    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (pattern[j - 1] === secret[i - 1] || pattern[j - 1] === '?') {
                dp[i][j] = dp[i - 1][j - 1]; // Match single characters or '?'
            } else if (pattern[j - 1] === '*') {
                dp[i][j] = dp[i - 1][j] || dp[i][j - 1]; // '*' can represent empty or more
            }
        }
    }

    // The answer is whether the whole secret matches the whole pattern
    return dp[m][n];
