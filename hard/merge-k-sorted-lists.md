# [23. 合并K个排序链表](https://leetcode-cn.com/problems/merge-k-sorted-lists/)
合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

示例:
```
输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6
```
## 解法
### 解一
循环读取所有链表所有节点的值，排序，生成新的链表。
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const arr = []
    for (let i = 0; i < lists.length; i++) {
        let node = lists[i]
        while (node) {
            arr.push(node.val)
            node = node.next
        }
    }

    arr.sort((a, b) => a - b)
    const sentry = new ListNode()
    let node = sentry
    for (let i = 0; i < arr.length; i++) {
        node.next = new ListNode(arr[i])
        node = node.next
    }

    return sentry.next
};
```
### 解二
分治算法

![](https://pic.leetcode-cn.com/6f70a6649d2192cf32af68500915d84b476aa34ec899f98766c038fc9cc54662-image.png)
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    return merge(lists, 0, lists.length - 1)
};

function merge(lists, left, right) {
    if (left == right) return lists[left]
    if (left > right) return null
    const mid = left + Math.floor((right - left) / 2)
    return mergeList(merge(lists, left, mid), merge(lists, mid + 1, right))
}

function mergeList(a, b) {
    if (!a || !b) return a || b
    const sentry = new ListNode()
    let node = sentry
    while (a && b) {
        if (a.val < b.val) {
            node.next = a
            a = a.next
        } else {
            node.next = b
            b = b.next
        }

        node = node.next
    }

    node.next = a || b
    return sentry.next
}
```
