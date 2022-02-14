/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let node = head
    let temp = []
    let length = 0
    for (let i = 0; i <= n; i++) {
        temp.push(undefined)
    }
    while (node) {
        temp.shift()
        temp.push(node)
        node = node.next
        length++
    }
    if (n > length) {
        return head
    }
    else if (n === length) {
        return head.next
    }
    else if (length === 1) {
        return null
    }
    else if (length === 2) {
        if (n === 1) {
            head.next = null
            return head
        }
        else return head.next
    } else {
        temp[0].next = temp[1] ? temp[1].next : null
        return head
    }
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let head, n, result

[1,2,3,4,5]
head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
n = 2
result = removeNthFromEnd(head, n)
console.log(result)

head = new ListNode(1)
n = 1
result = removeNthFromEnd(head, n)
console.log(result)

head = new ListNode(1, new ListNode(2))
n = 1
result = removeNthFromEnd(head, n)
console.log(result)

head = new ListNode(1, new ListNode(2))
n = 2
result = removeNthFromEnd(head, n)
console.log(result)

head = new ListNode(1, new ListNode(2, new ListNode(3)))
n = 3
result = removeNthFromEnd(head, n)
console.log(result)