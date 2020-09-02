# [107. 二叉树的层次遍历 II](https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/)
给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：
给定二叉树 [3,9,20,null,null,15,7],
```
    3
   / \
  9  20
    /  \
   15   7
```
返回其自底向上的层次遍历为：
```
[
  [15,7],
  [9,20],
  [3]
]
```
## 解法
### 解一
广度
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (!root) return []
    const result = []
    const stack = [root]
    while (stack.length) {
        let len = stack.length
        const arr = []
        while (len--) {
            const node = stack.shift()
            arr.push(node.val)
            if (node.left) stack.push(node.left)
            if (node.right) stack.push(node.right)
        }

        result.unshift(arr)
    }

    return result
};
```
### 解二
深度
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (!root) return []
    const result = []
    
    function dfs(node, depth) {
        if (!node) return
        if (!result[depth]) {
            result[depth] = []
        }

        result[depth].push(node.val)
        dfs(node.left, depth + 1)
        dfs(node.right, depth + 1)
    }

    dfs(root, 0)
    return result.reverse()
};
```
