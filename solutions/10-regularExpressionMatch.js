/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
    if (p.indexOf('*') === -1) {
        return isEqual(s, p)
    } else {
        let splitArr = []
        let sIndex = 0
        let index
        while ((index = p.indexOf('*', sIndex)) > -1) {
            if (sIndex < index - 1) {
                splitArr.push( p.substring(sIndex, index - 1) )
            }
            splitArr.push( p[index - 1] + '*' )
            sIndex = index + 1
        }
        if (sIndex < p.length) {
            splitArr.push( p.substring(sIndex) )
        }
        let headStr = splitArr[0]
        if (headStr[1] !== '*') {
            if ( isEqual(s.substring(0, headStr.length), headStr) ) {
                s = s.substring(headStr.length)
                splitArr.shift()
            } else {
                return false
            }
        }
        let tailStr = splitArr[splitArr.length - 1]
        if (tailStr[1] !== '*') {
            if ( isEqual(s.substring(s.length - tailStr.length), tailStr) ) {
                s = s.substring(0, s.length - tailStr.length)
                splitArr.pop()
            } else {
                return false
            }
        }
        return recursionMatch(s, splitArr)
    }
}

function recursionMatch (s, arr) {
    let item
    let index = -1
    for (let i = 0; i < arr.length; i++) {
        item = arr[i]
        if (item[1] !== '*') {
            if (item.indexOf('.') > -1) {
                let sLen = s.length
                let pLen = item.length
                if (pLen > s.length) {
                    return false
                } else {
                    let j = 0
                    while (j < sLen) {
                        if (isEqual(s.substring(j, j + pLen), item)) {
                            let result
                            if (j > 0) {
                                result = costStarArr(s.substring(0, j), arr.slice(0, i))
                            }
                            if (j === 0 || result === true) {
                                let leftStr = s.substring(j + pLen)
                                let leftArr = arr.slice(i + 1)
                                result = recursionMatch(leftStr, leftArr)
                            }
                            if (result === true) {
                                return true
                            }
                        }
                        j++
                    }
                    return false
                }
            }
            while ((index = s.indexOf(item, index + 1)) > -1) {
                let result = costStarArr(s.substring(0, index), arr.slice(0, i))
                if (result === true) {
                    let leftStr = s.substring(index + 1)
                    let leftArr = arr.slice(i + 1)

                    if (leftStr.length) {
                        if (leftArr.length) {
                            let result = recursionMatch(leftStr, leftArr)
                            if (result === true) {
                                return true
                            }
                        } else {
                            return false
                        }
                    } else {
                        if (leftArr.length) {
                            return leftArr.every(item => item[1] === '*')
                        }
                        return true
                    }
                }
            }
            return false
        }
    }
    return costStarArr(s, arr)
}

function isEqual (s, p) {
    if (s.length !== p.length) {
        return false
    }
    let i = 0
    while ( i < s.length && (s[i] === p[i] || p[i] === '.') ) {
        i++
    }
    return s.length === i
}

function costStarArr (s, starArr) {
    if (s.length === 0) return true
    while (starArr.length) {
        let tmp = starArr.pop()
        if (tmp[0] === '.') {
            return true
        } else {
            let i = s.length - 1
            while (i >= 0) {
                if (s[i] === tmp[0]) {
                    i--
                } else {
                    return costStarArr(s.substring(0, i + 1), starArr) 
                }
            }
            return true
        }
    }
    return false
}

let res, s, p

s = 'aa'
p = 'a*c*'
res = isMatch(s, p)
console.log(res === true)

s = 'aaaaaaaaaaaaab'
p = 'a*a*a*a*a*a*a*a*a*a*c'
res = isMatch(s, p)
console.log(res === false)

s = 'a'
p = 'ab*'
res = isMatch(s, p)
console.log(res === true)
s = 'aab'
p = 'c*a*b'
res = isMatch(s, p)
console.log(res === true)

s = 'aaa'
p = 'ab*ac*a'
res = isMatch(s, p)
console.log(res === true)

s = ''
p = '.'
res = isMatch(s, p)
console.log(res === false)
s = ''
p = 'a*'
res = isMatch(s, p)
console.log(res === true)

s = ''
p = '.*'
res = isMatch(s, p)
console.log(res === true)

s = 'aaa'
p = 'a*a'
res = isMatch(s, p)
console.log(res === true)

s = 'bbbba'
p = '.*a*a'
res = isMatch(s, p)
console.log(res === true)

s = 'aaa'
p = '.*a'
res = isMatch(s, p)
console.log(res === true)

s = 'abcd'
p = 'd*'
res = isMatch(s, p)
console.log(res === false)

s = 'ab'
p = '.*c'
res = isMatch(s, p)
console.log(res === false)

s = 'ab'
p = '.*c'
res = isMatch(s, p)
console.log(res === false)

s = 'aa'
p = 'a'
res = isMatch(s, p)
console.log(res === false)

s = 'mississippi'
p = 'mis*is*p*.'
res = isMatch(s, p)
console.log(res === false)

s = 'ab'
p = '.*'
res = isMatch(s, p)
console.log(res === true)

s = 'aa'
p = 'a*'
res = isMatch(s, p)
console.log(res === true)

s = 'bbbba'
p = '.*a*a'
res = isMatch(s, p)
console.log(res === true)

s = 'bbbba'
p = 'b.*a'
res = isMatch(s, p)
console.log(res === true)