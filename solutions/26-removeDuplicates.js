/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let pos = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            continue
        }
        nums[pos++] = nums[i]
    }
    return pos
}

let nums, result

nums = [1,1,2]
result = removeDuplicates(nums)
console.assert(result === 2, result)

nums = [0,0,1,1,1,2,2,3,3,4]
result = removeDuplicates(nums)
console.assert(result === 5, result)
