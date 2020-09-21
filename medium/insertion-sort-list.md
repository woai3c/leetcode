# [147. 对链表进行插入排序](https://leetcode-cn.com/problems/insertion-sort-list/)
对链表进行插入排序。

![](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)

插入排序的动画演示如上。从第一个元素开始，该链表可以被认为已经部分排序（用黑色表示）。
每次迭代时，从输入数据中移除一个元素（用红色表示），并原地将其插入到已排好序的链表中。

 

插入排序算法：

1. 插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
2. 每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
3. 重复直到所有输入数据插入完为止。
 

示例 1：
```
输入: 4->2->1->3
输出: 1->2->3->4
```
示例 2：
```
输入: -1->5->3->4->0
输出: -1->0->3->4->5
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
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    if (!head) return null
    const sentry = new ListNode()
    sentry.next = head

    while (head && head.next) {
        if (head.val <= head.next.val) {
            head = head.next
        } else {
            let pre = sentry
            while (pre.next.val < head.next.val) {
                pre = pre.next
            }

            const cur = head.next
            head.next = head.next.next
            cur.next = pre.next
            pre.next = cur
        }
    }

    return sentry.next
};
```
