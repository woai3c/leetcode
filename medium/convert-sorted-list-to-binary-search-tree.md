# [109. 有序链表转换二叉搜索树](https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/)
给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:
```
给定的有序链表： [-10, -3, 0, 5, 9],

一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5
 ```
 ## 解法
 每次找到链表的中位数，让它成为中间节点。节点两边的数为左右子树。
 ### 解一
 数组
 ```js
 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    const arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }

    return sortedArrayToBST(arr)
};

var sortedArrayToBST = function(nums) {
    function _sortedArrayToBST(left, right) {
        if (left > right) return null
        const index = ~~((left + right) / 2)
        const node = new TreeNode(nums[index])
        node.left = _sortedArrayToBST(left, index - 1)
        node.right = _sortedArrayToBST(index + 1, right)

        return node
    }

    return _sortedArrayToBST(0, nums.length - 1)
};
 ```
 ### 解二
 由于链表的值是升序排列，并且中序遍历就是升序遍历。
 
 利用这一特性，可以先用中序遍历构造二叉树，后面再填充值。
 ```js
 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let len = 0
    let node = head
    while (node) {
        len++
        node = node.next
    }

    function _sortedListToBST(left, right) {
        if (left > right) return null
        const index = ~~((left + right) / 2)
        const node = new TreeNode()
        node.left = _sortedListToBST(left, index - 1)
        node.val = head.val
        head = head.next
        node.right = _sortedListToBST(index + 1, right)

        return node
    }
    
    return _sortedListToBST(0, len - 1)
};
 ```
