const decodeTheRing = function (s, p) {
    const sLen = s.length;
    const pLen = p.length;
    
    // Create a 2D array for memoization
    const dp = Array.from({ length: sLen + 1 }, () => Array(pLen + 1).fill(false));
    dp[0][0] = true; // Both string and pattern are empty

    // Handle patterns with leading '*'
    for (let j = 1; j <= pLen; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];
        }
    }

    // Fill the dp table
    for (let i = 1; i <= sLen; i++) {
        for (let j = 1; j <= pLen; j++) {
            if (p[j - 1] === '*') {
                // '*' can match no character (dp[i][j-1]) or one character (dp[i-1][j])
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            } else if (p[j - 1] === '?' || p[j - 1] === s[i - 1]) {
                // Either a '?' matches any character or they are the same
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }

    return dp[sLen][pLen];
};

module.exports = decodeTheRing;
