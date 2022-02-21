/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let stack = []
    let index = head
    let nHead = new ListNode(-1)
    let nIndex = nHead
    while (index) {
        stack.push(index)
        index = index.next
        if (stack.length === k) {
            let popIndex = stack.pop()
            nIndex.next = popIndex
            while (stack.length > 0) {
                let node = stack.pop()
                popIndex.next = node
                popIndex = node
            }
            popIndex.next = null
            nIndex = popIndex
        }
    }
    if (stack.length !== 0) {
        nIndex.next = stack[0]
    }
    return nHead.next
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

let head, k, result

head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
k = 2
result = reverseKGroup(head, k)
console.log(result.value().toString() === [2,1,4,3,5].toString(), result.value())

head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
k = 3
result = reverseKGroup(head, k)
console.log(result.value().toString() === [3,2,1,4,5].toString(), result.value())