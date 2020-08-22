# [82. 删除排序链表中的重复元素 II](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/)
给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。

示例 1:
```
输入: 1->2->3->3->4->4->5
输出: 1->2->5
```
示例 2:
```
输入: 1->1->1->2->3
输出: 2->3
```
## 解法
### 解一
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
var deleteDuplicates = function(head) {
    if (!head) return null
    // 第一次循环读取链表的值
    const arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }

    // 第二次循环删除重复值
    let i = 0
    const len = arr.length
    const result = []
    while (i < len) {
        let start = i
        let hasRepeat = false
        i++
        while (i < len && arr[i] == arr[start]) {
            hasRepeat = true
            i++
        }

        if (!hasRepeat) result.push(arr[i - 1])
    }

    // 第三次循环将去重后的值变成链表
    const sentry = new ListNode()
    let node = sentry
    for (let i = 0, l = result.length; i < l; i++) {
        node.next = new ListNode(result[i])
        node = node.next 
    }

    return sentry.next
};
```
### 解二
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
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    if (!head) return null
    const sentry = new ListNode() // 哨兵节点
    sentry.next = head
    let pre = sentry
    let cur = head
    let next = head.next
    while (next) {
        if (cur.val == next.val) {
            while (next && cur.val == next.val) {
                next = next.next
            }

            pre.next = next
            if (!next) break
        } else {
            pre = cur
        }

        cur = next
        next = next.next
    }

    return sentry.next
};
```
