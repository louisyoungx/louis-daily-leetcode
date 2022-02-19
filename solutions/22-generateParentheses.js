/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n <= 0) return []
    else if (n === 1) return ['()']
    let dp = [[''], ['()']]
    function gp(n) {
        dp[n] = []
        for (let inside = 0; inside < n; inside++) {
            let outside = n - inside - 1
            let inP = dp[inside] ? dp[inside] : gp(inside)
            let outP = dp[outside] ? dp[outside] : gp(outside)
            for (let i = 0; i < inP.length; i++) {
                for (let j = 0; j < outP.length; j++) {
                    dp[n].push('(' + inP[i] + ')' + outP[j])
                }
            }
        }
        return dp[n]
    }
    return gp(n)
}

let n, result

n = 1
result = generateParenthesis(n)
console.log(result)

n = 2
result = generateParenthesis(n)
console.log(result)

n = 3
result = generateParenthesis(n)
console.log(result)