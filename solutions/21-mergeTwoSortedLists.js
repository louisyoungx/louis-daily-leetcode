/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0)
    let cur = dummy
    let L = list1
    let R = list2
    while (L && R) {
        if (L.val < R.val) {
            cur.next = L
            cur = cur.next
            L = L.next
        } else {
            cur.next = R
            cur = cur.next
            R = R.next
        }
    }
    if (L) cur.next = L
    else if (R) cur.next = R
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

let list1, list2, result

list1 = new ListNode(1, new ListNode(2, new ListNode(4)))
list2 = new ListNode(1, new ListNode(3, new ListNode(4)))
result = mergeTwoLists(list1, list2)
console.assert(result.value().toString() === [1,1,2,3,4,4].toString(), result.value())
