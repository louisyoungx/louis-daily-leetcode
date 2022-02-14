/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) return false
    let stack = []
    const tag = {
        '(': 1,
        ')': 1,
        '[': 2,
        ']': 2,
        '{': 3,
        '}': 3,
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(tag[s[i]])
        } else {
            if (tag[s[i]] !== stack.pop()) return false
        }
    }
    if (stack.length !== 0) return false
    else return true
}

let s, result

s = "()"
result = isValid(s)
console.assert(result)

s = "()[]{}"
result = isValid(s)
console.assert(result)

s = "([])({})({})"
result = isValid(s)
console.assert(result)

s = "(]"
result = isValid(s)
console.assert(!result)

s = "("
result = isValid(s)
console.assert(!result)