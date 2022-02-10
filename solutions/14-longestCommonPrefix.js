/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return ''
    } else if (strs.length === 1) {
        return strs[0]
    }
    let result = strs[0]
    for (let i = 1; i < strs.length; i++) {
        result = result.slice(0, strs[i].length)
        for (let j = 0; j < strs[i].length; j++) {
            if (strs[i][j] !== result[j]) {
                result = result.slice(0, j)
                break
            }
        }
    }
    return result
}

console.assert(longestCommonPrefix(["flower","flow","flight"]) === 'fl')
console.assert(longestCommonPrefix(["ab","a"]) === 'a', longestCommonPrefix(["ab","a"]))