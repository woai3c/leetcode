# [148. 排序链表](https://leetcode-cn.com/problems/sort-list/)
在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。

示例 1:
```
输入: 4->2->1->3
输出: 1->2->3->4
```
示例 2:
```
输入: -1->5->3->4->0
输出: -1->0->3->4->5
```
## 解法
O(nlogn) 空间复杂度
```js
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
var sortList = function(head) {
    if (!head || !head.next) return head
    const midNode = getMidNode(head)
    const rightHead = midNode.next
    midNode.next = null

    const left = sortList(head)
    const right = sortList(rightHead)
    return merge(left, right)
};

function getMidNode(head) {
    let slow = head
    let fast = head.next.next
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    return slow
}

function merge(l1, l2) {
    const sentry = new ListNode()
    let node = sentry
    while (l1 && l2) {
        if (l1.val < l2.val) {
            node.next = l1
            l1 = l1.next
        } else {
            node.next = l2
            l2 = l2.next
        }

        node = node.next
    }

    node.next = l1 || l2

    return sentry.next
}
```
