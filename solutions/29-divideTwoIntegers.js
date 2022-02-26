/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (divisor === 1) return dividend
    else if (dividend == -2147483648 && divisor == -1) return 2147483647
    let sign = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0) ? true : false
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    let result = 0
    while (dividend <= result + result) {
        result += result
    }
    while (dividend >= 0) {
        dividend -= divisor
        result++
    }
    result--
    if (sign) return result
    else return 0 - result
}

let dividend, divisor, result

dividend = 0, divisor = 1
result = divide(dividend, divisor)
console.log(result)
console.assert(result === 3)

dividend = 10, divisor = 3
result = divide(dividend, divisor)
console.log(result)
console.assert(result === 3)

dividend = 12, divisor = 3
result = divide(dividend, divisor)
console.log(result)
console.assert(result === 4)

dividend = 7, divisor = -3
result = divide(dividend, divisor)
console.log(result)
console.assert(result === -2)

dividend = -2147483648, divisor = -1
result = divide(dividend, divisor)
console.log(result)
console.assert(result === 2147483647)
