/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let pos = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            continue
        } else {
            nums[pos++] = nums[i]
        }
    }
    return pos
}