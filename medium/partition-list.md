# [86. 分隔链表](https://leetcode-cn.com/problems/partition-list/)
给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。

你应当保留两个分区中每个节点的初始相对位置。

示例:
```
输入: head = 1->4->3->2->5->2, x = 3
输出: 1->2->2->4->3->5
```
## 解法
双指针
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
            node1.next = head
            node1 = node1.next
        } else {
            node2.next = head
            node2 = node2.next
        }

        head = head.next
    }

    // 一定要将 node2.next 设为 null，否则会变成循环链表
    node2.next = null
    node1.next = sentry2.next
    return sentry1.next
};
```
