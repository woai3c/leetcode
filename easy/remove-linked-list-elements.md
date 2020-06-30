# [203. 移除链表元素](https://leetcode-cn.com/problems/remove-linked-list-elements/)
删除链表中等于给定值 val 的所有节点。

示例:
```
输入: 1->2->6->3->4->5->6, val = 6
输出: 1->2->3->4->5
```
## 解法
### 实现1
循环遍历
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) return null
    let result = head
    let pre = head
    while (head) {
        if (head.val != val) {
            pre = head
            head = head.next
        } else {
            // result == head 说明是首节点要删除
            if (result == head) {
                result = head.next
            }

            pre.next = head.next
            head = pre.next
        }
    }

    return result
};
```
