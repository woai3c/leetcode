# [61. 旋转链表](https://leetcode-cn.com/problems/rotate-list/)
给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

示例 1:
```
输入: 1->2->3->4->5->NULL, k = 2
输出: 4->5->1->2->3->NULL
解释:
向右旋转 1 步: 5->1->2->3->4->NULL
向右旋转 2 步: 4->5->1->2->3->NULL
```
示例 2:
```
输入: 0->1->2->NULL, k = 4
输出: 2->0->1->NULL
解释:
向右旋转 1 步: 2->0->1->NULL
向右旋转 2 步: 1->2->0->NULL
向右旋转 3 步: 0->1->2->NULL
向右旋转 4 步: 2->0->1->NULL
```
## 解法
### 解一
遍历一遍，获取链表长度，同时将每一个节点推入到数组中。

数组的第一个元素就是链表的头节点，最后一个元素就是链表的尾节点。

利用这一特性，旋转一步的操作是：
1. arr.pop() 获取尾节点
2. 将尾节点下一节点指向头节点，再将尾节点设为头节点，最后从数组的前面推入，变成第一个元素。

旋转 k 步就是将上述步骤循环 k 次。
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
var rotateRight = function(head, k) {
    if (!head) return null
    const arr = []
    let node = head
    while (node) {
        arr.push(node)
        node = node.next
    }

    k %= arr.length
    if (k == 0) return head
    
    while (k--) {
        const tail = arr.pop()
        tail.next = head
        head = tail
        arr[arr.length - 1].next = null
        arr.unshift(head)
    }

    return head
};
```
### 解二
旋转 k 步，其实就是将倒序第 k 个的节点当成新的表头，第 k 个节点的上一个就是新的尾节点。

利用这一特性，遍历一遍链表，获取链表长度和原来的尾结点。

遍历到第 size - k - 1 个节点，它就是新的尾结点。将它的下一个节点设成新表头，再将它的下一节点置空。

怎么将新的链表和原来的链表链接在一起呢？只要将老的尾结点指向老的头节点就可以了。
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
var rotateRight = function(head, k) {
    if (!head || !k || !head.next) return head

    let oldTail = head
    let size = 1
    while (oldTail.next) {
        size++
        oldTail = oldTail.next
    }

    k %= size
    if (k == 0) return head

    let newTail = head
    for (let i = 0; i < size - k - 1; i++) {
        newTail = newTail.next
    }

    newHead = newTail.next
    newTail.next = null
    oldTail.next = head
    return newHead
};
```
