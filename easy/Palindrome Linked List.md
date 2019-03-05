# 回文链表
请判断一个链表是否为回文链表。

示例 1:
```
输入: 1->2
输出: false
```
示例 2:
```
输入: 1->2->2->1
输出: true
```
进阶：

你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

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
var isPalindrome = function(head) {
    const arry = []
    
    while (head) {
        arry.push(head.val)
        head = head.next
    }
    
    let len = arry.length
    if (len < 2) {
        return true
    }
    
    for (let i = 0, l = parseInt(len / 2); i < l; i++) {
        len--
        if (arry[i] != arry[len]) {
            return false
        }
    }
    
    return true
};
```

#### 实现2
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
var isPalindrome = function(head) {
    if (head == null || head.next == null) {
        return true
    }
    
    let fast = head
    let slow = head
    
    while (fast) {
        slow = slow.next
        fast = fast.next? fast.next.next : fast.next
    }
    
    let end = null
    while (slow) {
        const temp = slow.next
        slow.next = end
        end = slow
        slow = temp
    }
    
    while (head && end) {
        if (head.val != end.val) {
            return false
        }
        
        head = head.next
        end = end.next
    }
    
    return true
};
```
