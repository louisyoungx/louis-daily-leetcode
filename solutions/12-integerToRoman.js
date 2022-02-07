/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let romanLevel = { // 位数等级
        1: 'I',
        1.5: 'V',
        2: 'X',
        2.5: 'L',
        3: 'C',
        3.5: 'D',
        4: 'M'
    }
    let result = '' // 初始化返回值
    let level = Math.floor(Math.log10(num)) + 1 // 位数为字符数组长度
    while(level > 0) { // 遍历字符数组
        let count = num - (num % Math.pow(10, level - 1)) // 本等级
        num = num - count
        count = count / Math.pow(10, level - 1) // 本等级计数
        if (count === 9) { // 如果计数为9，取一个本级字符与一个高1级字符
            result += romanLevel[level] + romanLevel[level + 1]
            count -= 9 // 此时count为0，不会进入剩余数字循环
        } else if (count >= 5) { // 如果计数大于等于5，取一个高0.5级字符
            result += romanLevel[level + 0.5]
            count -= 5 // 若此时count不为0，则会进入剩余数字循环，否则不会
        } else if (count === 4) { // 如果计数为4，取一个本级字符与一个高1级字符
            result += romanLevel[level] + romanLevel[level + 0.5]
            count -= 4 // 此时count为0，不会进入剩余数字循环
        }
        for (let i = 0; i < count; i++) {
            // 如果count不为0，则会循环遍历剩余数字，每次取一个本级字符
            result += romanLevel[level]
        }
        level--
    }
    return result;
}

console.assert(intToRoman(1994) === 'MCMXCIV')
