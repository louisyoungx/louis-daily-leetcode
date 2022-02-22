/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0
    let len = needle.length
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.slice(i, i + len) === needle) {
            return i
        }
    }
    return -1
}

let haystack, needle, result

haystack = 'hello'
needle = 'll'
result = strStr(haystack, needle)
console.assert(result === 2, haystack)

haystack = 'apple'
needle = 'le'
result = strStr(haystack, needle)
console.assert(result === 3, haystack)

haystack = 'aaaaa'
needle = 'bba'
result = strStr(haystack, needle)
console.assert(result === -1, haystack)

haystack = ''
needle = ''
result = strStr(haystack, needle)
console.assert(result === 0, haystack)

haystack = 'wrwteuiuetyqtezxcqetwrywy'
needle = 'zxc'
result = strStr(haystack, needle)
console.assert(result === 14, haystack)

haystack = 'mississippi'
needle = 'issip'
result = strStr(haystack, needle)
console.assert(result === 4, haystack)