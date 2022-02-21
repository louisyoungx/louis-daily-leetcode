/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head) return null
    else if (!head.next) return head
    let Pre = new ListNode(-1)
    let L = head
    let R = head.next
    head = head.next
    while (L && R) {
        L.next = R.next
        R.next = L
        Pre.next = R
        Pre = L
        L = L.next
        if (L) R = L.next
    }
    return head
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

let head, result

head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
result = swapPairs(head)
console.assert(result.value().toString() === [2,1,4,3].toString(), result.value())
