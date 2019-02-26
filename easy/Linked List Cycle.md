# 环形链表
给定一个链表，判断链表中是否有环。

为了表示给定链表中的环，我们使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 `pos` 是 `-1`，则在该链表中没有环。

 

示例 1：
```
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```
![](https://github.com/woai3c/leetcode/blob/master/imgs/circularlinkedlist.png)

示例 2：
```
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
```
![](https://github.com/woai3c/leetcode/blob/master/imgs/circularlinkedlist_test2.png)
示例 3：
```
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
```
![](https://github.com/woai3c/leetcode/blob/master/imgs/circularlinkedlist_test3.png)
 

进阶：

你能用 O(1)（即，常量）内存解决此问题吗？

## 实现
#### 实现1
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    while (head) {
        if (head.val != 'tz') {
            head.val = 'tz'
        } else {
            return true
        }
        
        head = head.next
    }
    
    return false
};
```
## 实现2
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head == null || head.next == null) {
        return false
    }
    
    let slow = head
    let fast = head.next
    while (slow != fast) {
        if (fast == null || fast.next == null) {
            return false
        }
        slow = slow.next
        fast = fast.next.next
    }
    
    return true
};
```
