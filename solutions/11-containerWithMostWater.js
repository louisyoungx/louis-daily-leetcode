/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0
    let area
    let left = 0
    let right = height.length - 1
    while (left < right) {
        area = Math.min(height[left], height[right]) * (right - left)
        if (area > max) {
            max = area
        }
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return max
}

let height = [4,3,2,1,4]
let result = maxArea(height)
console.log(result)