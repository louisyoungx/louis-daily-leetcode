/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) return null
    let dummy = new ListNode(0)
    let cur = dummy
    while (lists.length > 0) {
        lists = lists.filter(node => node !== undefined)
        let min = Infinity
        let minIndex = -1
        lists.forEach((node, i) => {
            if (!node) return
            if (node.val < min) {
                min = node.val
                minIndex = i
            }
        })
        if (minIndex === -1) break
        cur.next = lists[minIndex]
        cur = cur.next
        lists[minIndex] = lists[minIndex].next
    }
    return dummy.next
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    this.value = () => {
        let node = this
        let result = []
        while (node) {
            result.push(node.val)
            node = node.next
        }
        return result
    }
}

let lists, result

lists = [
    new ListNode(1, new ListNode(4, new ListNode(5))),
    new ListNode(1, new ListNode(3, new ListNode(4))),
    new ListNode(2, new ListNode(6))
]
result = mergeKLists(lists)
console.assert(result.value().toString() === [1,1,2,3,4,4,5,6].toString(), result.value())

lists = []
result = mergeKLists(lists)
console.assert(result === null, result)