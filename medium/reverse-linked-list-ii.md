# [92. 反转链表 II](https://leetcode-cn.com/problems/reverse-linked-list-ii/)
反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

说明:
* 1 ≤ m ≤ n ≤ 链表长度。

示例:
```
输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL
```
## 解法
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if (!head) return head
    const sentry = new ListNode() // 哨兵节点
    sentry.next = head
    let node = sentry
    let count = 0
    let pre = null // 用 pre 表示 m 的上一个节点
    let after = null // 用 after 表示 n 的下一个节点
    let reverseHead = null // 表示反转链表的头部
    while (node && count <= n) {
        if (count == m - 1) pre = node
        if (count == n) after = node.next
        if (count >= m && count <= n) {
            const temp = node
            // 由于需要改变 node 节点的指向，所以要提前把 node 的下一节点提取出来
            // 否则反转后再找下一节点就是空节点
            node = node.next
            temp.next = reverseHead
            reverseHead = temp
        } else {
            node = node.next
        }

        count++
    }

    // pre 的下一个节点就是反转链表的尾节点 所以将反转链表的尾节点的下一节点指向 after
    // ....pre.m....n.after..... 用 . 来模拟链表大概是这样
    pre.next.next = after
    pre.next = reverseHead
    return sentry.next
};
```
