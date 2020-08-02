# [25. K 个一组翻转链表](https://leetcode-cn.com/problems/reverse-nodes-in-k-group/)
给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

k 是一个正整数，它的值小于或等于链表的长度。

如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

 

示例：
```
给你这个链表：1->2->3->4->5

当 k = 2 时，应当返回: 2->1->4->3->5

当 k = 3 时，应当返回: 3->2->1->4->5
```
 

说明：

* 你的算法只能使用常数的额外空间。
* 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
## 解法
递归，直解。
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    // 先循环一遍，获取链表长度，每次翻转减去 k
    let len = 0
    let node = head
    while (node) {
        len++
        node = node.next
    }

    return _reverseKGroup(head, k, len)
};

function _reverseKGroup(head, k, len) {
    if (k > len) return head
    let count = k
    let node = null
    let tail = null
    // 用 tail 保存翻转后的尾节点，即原来的第一个节点
    while (count--) {
        if (node) {
            // 缓存 head 下一个节点
            const temp = head.next
            head.next = node
            node = head
            head = temp
        } else {
            node = head
            tail = head
            head = head.next
        }
    }
    // 递归
    tail.next = _reverseKGroup(head, k, len - k)
    return node
}
```
