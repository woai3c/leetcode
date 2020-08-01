# [24. 两两交换链表中的节点](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

 
```
示例:

给定 1->2->3->4, 你应该返回 2->1->4->3.
```
## 解法
### 解一
递归
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    // 当前节点不存在或下一节点不存在，则直接返回
    if (!head || !head.next) return head
    // 递归交换 每次交换链表的前两个节点
    const newHead = head.next
    head.next = head.next.next
    newHead.next = head
    // 从剩下的节点继续交换
    newHead.next.next = swapPairs(head.next)
    return newHead
};
```
### 解二
迭代
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) return head
    const sentry = new ListNode()
    let node = sentry
    // 用 A 记录接下来排在前面的节点，用 B 记录接下来排在后面的节点
    // 和递归的处理过程是一样的 只不过是用迭代来实现
    let A, B
    while (head && head.next) {
        // 先处理链接的前两个节点，再处理剩下的
        // 需要用 node 来记录处理完的两个节点的后一个，即 B
        B = head
        A = head.next
        B.next = head.next.next
        A.next = B
        node.next = A
        node = B
        head = B.next
    }

    return sentry.next
};
```
