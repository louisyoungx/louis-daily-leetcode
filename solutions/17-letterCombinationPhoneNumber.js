/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    phone = {
        '2':['a','b','c'],
        '3':['d','e','f'],
        '4':['g','h','i'],
        '5':['j','k','l'],
        '6':['m','n','o'],
        '7':['p','q','r','s'],
        '8':['t','u','v'],
        '9':['w','x','y','z'],
    }
    let result = []
    let temp = []
    if (digits.length > 0) result = phone[digits.slice(0, 1)]
    else return result
    for (let i = 1; i < digits.length; i++) {
        temp = []
        for (let j = 0; j < result.length; j++) {
            temp = temp.concat(phone[digits.slice(i, i + 1)].map(x => result[j] + x))
        }
        result = temp
    }
    return result
}

let digits, result

digits = "23"
result = letterCombinations(digits)
console.assert(result == ["ad","ae","af","bd","be","bf","cd","ce","cf"], result)

digits = ""
result = letterCombinations(digits)
console.assert(result == [], result)

digits = "2"
result = letterCombinations(digits)
console.assert(result == ["a","b","c"], result)