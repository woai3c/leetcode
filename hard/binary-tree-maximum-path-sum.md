# [124. 二叉树中的最大路径和](https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/)
给定一个非空二叉树，返回其最大路径和。

本题中，路径被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。该路径至少包含一个节点，且不一定经过根节点。

 

示例 1：
```
输入：[1,2,3]

       1
      / \
     2   3

输出：6
```
示例 2：
```
输入：[-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

输出：42
```
## 解法
每个节点的最大路径和，是 `node.val + node.left.val + node.right.val`。

在计算时，如果左右节点为负数，就取 0。相当于，如果子节点的值是负数，就舍弃。

而路径是指 `node -> node.left` 或者 `node -> node.right`。

所以在递归时，每次除了计算最大路径和，还要将当前节点的最大路径值返回去。

即取 `node -> node.left` 或者 `node -> node.right` 中的一个。
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
 * @return {number}
 */
var maxPathSum = function(root) {
    if (!root) return 0
    let result = -Infinity

    function recursion(node) {
        if (!node) return 0
        const leftVal = Math.max(recursion(node.left), 0)
        const rightVal = Math.max(recursion(node.right), 0)
        result = Math.max(node.val + leftVal + rightVal, result)
        return node.val + Math.max(leftVal, rightVal)
    }
    
    recursion(root)
    return result
};
```
