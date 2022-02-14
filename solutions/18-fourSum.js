/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let result = []
    const repeat = new Set()
    if (nums == null || nums.length < 3) return result
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++){
            let L = j + 1
            let R = nums.length - 1
            while (L < R) {
                let sum = nums[i] + nums[j] + nums[L] + nums[R]
                if (sum === target) {
                    let targetList = [nums[i], nums[j], nums[L], nums[R]]
                    let tag = targetList.toString()
                    if (!repeat.has(tag)) {
                        result.push(targetList)
                        repeat.add(tag)
                    }
                    while (L < R && nums[L] == nums[L + 1]) L++
                    while (L < R && nums[R] == nums[R - 1]) R--
                    L++
                    R--
                }
                else if (sum < target) L++
                else if (sum > target) R--
            }
        }
    }
    return result
}

let nums, target, result

nums = [1,0,-1,0,-2,2], target = 0
console.log(nums.sort((a, b) => a - b))
result = fourSum(nums, target)
console.log(result)
console.log([[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]])

nums = [2,2,2,2,2], target = 8
result = fourSum(nums, target)
console.log(result)
console.log([[2,2,2,2]])

nums = [-2,-1,-1,1,1,2,2], target = 0
result = fourSum(nums, target)
console.log(result)
console.log([[-2,-1,1,2],[-1,-1,1,1]])

nums = [-3,-1,0,2,4,5], target = 2
result = fourSum(nums, target)
console.log(result)
console.log([[-3,-1,2,4]])