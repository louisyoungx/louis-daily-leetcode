/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    let t1 = 0
    let t2 = 0
    let nArr = []
    while (t1 < nums1.length && t2 < nums2.length) {
        if (nums1[t1] < nums2[t2]) {
            nArr.push(nums1[t1])
            t1++
        } else {
            nArr.push(nums2[t2])
            t2++
        }
    }
    if (t1 < nums1.length) {
        nArr.push(...nums1.slice(t1))
    } else {
        nArr.push(...nums2.slice(t2))
    }
    let midR = nArr[Math.floor(nArr.length / 2)]
    let midL = nArr[Math.round(nArr.length / 2) - 1]
    return (midR + midL) / 2
};


let nums1 = [1, 2]
let nums2 = [3]

let res = findMedianSortedArrays(nums1, nums2)

console.log(res);