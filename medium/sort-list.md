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
```ts
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function sortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head
    const midNode: ListNode = getMidNode(head)
    let rightHead: ListNode | null = midNode.next
    midNode.next = null

    const left: ListNode | null = sortList(head)
    const right: ListNode | null = sortList(rightHead)
    return merge(left, right)
};

function getMidNode(node: ListNode): ListNode {
    if (node.next == null) return node
    let slow: ListNode | any = node
    let fast: ListNode | null = node.next.next
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    return slow
}

function merge(l1: ListNode | null, l2: ListNode | null): ListNode | null {
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

    node.next = l1? l1 : l2

    return sentry.next
}
```
