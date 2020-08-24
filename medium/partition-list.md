# [86. 分隔链表](https://leetcode-cn.com/problems/partition-list/)
给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。

你应当保留两个分区中每个节点的初始相对位置。

示例:
```
输入: head = 1->4->3->2->5->2, x = 3
输出: 1->2->2->4->3->5
```
## 解法
用两个额外的链表来收集原来链表的值，一个链表收集小于 x 的值，另一个收集大于等于 x 的值。最后再拼在一起。
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const sentry1 = new ListNode()
    const sentry2 = new ListNode()
    let node1 = sentry1
    let node2 = sentry2
    while (head) {
        const val = head.val
        if (head.val < x) {
            node1.next = new ListNode(val)
            node1 = node1.next
        } else {
            node2.next = new ListNode(val)
            node2 = node2.next
        }

        head = head.next
    }

    node1.next = sentry2.next
    return sentry1.next
};
```
