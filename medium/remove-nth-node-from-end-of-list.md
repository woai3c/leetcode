# [19. 删除链表的倒数第N个节点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)
给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：
```
给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
```
说明：

给定的 n 保证是有效的。

进阶：

你能尝试使用一趟扫描实现吗？
## 解法
### 解一
两次循环
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const sentry = new ListNode()
    sentry.next = head
    let node = sentry
    let count = 0
    while (node) {
        count++
        node = node.next
    }

    count -= n
    node = sentry
    while (--count) {
        node = node.next
    }

    node.next = node.next.next
    return sentry.next
};
```
### 解三
[官方题解](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/solution/shan-chu-lian-biao-de-dao-shu-di-nge-jie-dian-by-l/)
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const sentry = new ListNode()
    sentry.next = head
    let firstNode = sentry
    let secondNode = sentry
    for (let i = 0; i < n + 1; i++) {
        firstNode = firstNode.next
    }

    while (firstNode) {
        firstNode = firstNode.next
        secondNode = secondNode.next
    }

    secondNode.next = secondNode.next.next
    return sentry.next
};
```
