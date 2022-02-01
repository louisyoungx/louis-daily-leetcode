# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        prenode = ListNode(0)
        nextnode = prenode

        val = 0
        while val or l1 or l2:
            val, over = divmod(val + (l1.val if l1 else 0) + (l2.val if l2 else 0), 10)
            nextnode.next = ListNode(over)
            nextnode = nextnode.next
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
        return prenode.next
