/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) {
        return s
    }
    let step = numRows * 2 - 2
    let depth = Math.floor(s.length / step)
    let result = ''
    let pointer
    for (let offset = 0; offset < numRows; offset++) {
        for (let eachStep = 0; eachStep < s.length; eachStep = eachStep + step) {
            pointer = eachStep + offset
            result += s[pointer] ? s[pointer] : ''
            let zigZag = s.slice(eachStep + step - (numRows - 2), eachStep + step)
            let zig = zigZag.slice(numRows - offset - 2, numRows - offset - 1)
            result += zig ? zig : ''
        }
    }
    return result
}

let s = 'A'
let numRows = 1
console.log(s)

// PAYP - AL | ISHI - RI | NG

// P     I    N
// A   L S  I G
// Y A   H R
// P     I

let result = convert(s, numRows)
console.log(result)