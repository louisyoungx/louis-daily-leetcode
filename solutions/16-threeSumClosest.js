/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let result = undefined
    let closest = Infinity
    if (nums == null || nums.length < 3) return result
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        let L = i + 1
        let R = nums.length - 1
        while (L < R) {
            let sum = (nums[i] + nums[L] + nums[R])
            if (Math.abs(sum - target) < closest) {
                result = sum
                closest = Math.abs(sum - target)
            }
            if (sum - target < 0) L++
            else R--
        }
    }
    return result
}

let nums
let target

nums = [1,1,1,1]
target = 3
console.assert(threeSumClosest(nums, target) === 3)

nums = [1,1,1,1]
target = 1
console.assert(threeSumClosest(nums, target) === 3)

nums = [-1,2,1,-4]
target = 1
console.assert(threeSumClosest(nums, target) === 2)

nums = [0,2,1,-3]
target = 1
console.assert(threeSumClosest(nums, target) === 0)