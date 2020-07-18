# [面试题 04.03. 特定深度节点链表](https://leetcode-cn.com/problems/list-of-depth-lcci/)
给定一棵二叉树，设计一个算法，创建含有某一深度上所有节点的链表（比如，若一棵树的深度为 D，则会创建出 D 个链表）。返回一个包含所有深度的链表的数组。

 

示例：
```
输入：[1,2,3,4,5,null,7,8]

        1
       /  \ 
      2    3
     / \    \ 
    4   5    7
   /
  8

输出：[[1],[2,3],[4,5,7],[8]]
```
## 解法
### 广度优先搜索
每次遍历一个层级所有的节点。
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
var listOfDepth = function(tree) {
    if (!tree) return null
    const queue = []
    const result = []
    queue.push(tree)
    while (queue.length) {
        let head = null
        let next = null
        let i = 0
        const len = queue.length
        while (i++ < len) {
            const node = queue.shift()
            if (next) {
                next.next = new ListNode(node.val)
                next = next.next
            } else {
                head = new ListNode(node.val)
                next = head
            }

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        result.push(head)
    }

    return result
};
```
### 深度优先搜索
dfs 搜索时添加一个层级参数。
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
var listOfDepth = function(tree) {
    if (!tree) return null
    const result = []
    const hash = [] // 利用哈希数组来记录每个层级的最后一个节点
    function dfs(node, level) {
        if (!node) return null
        if (result[level]) {
            let listNode = hash[level]
            listNode.next = new ListNode(node.val)
            hash[level] = listNode.next
        } else {
            listNode = new ListNode(node.val)
            result[level] = listNode
            hash[level] = listNode
        }

        dfs(node.left, level + 1)
        dfs(node.right, level + 1)
    }

    dfs(tree, 0)
    return result
};
```
