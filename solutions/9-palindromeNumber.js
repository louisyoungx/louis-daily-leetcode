/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let rawX = x
    let newX = 0
    let lastDigit = 0
    let i = 0
    let len = Math.floor(Math.log10(x)) + 1
    while (x > 0) {
        lastDigit = x % 10
        newX += lastDigit * Math.pow(10, len - i - 1)
        x = Math.floor(x / 10)
        i++
    }
    return newX === rawX ? true : false
}

let x = 121
let result = isPalindrome(x)
console.log(result)