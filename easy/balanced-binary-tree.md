# [110. 平衡二叉树](https://leetcode-cn.com/problems/balanced-binary-tree/)
给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

示例 1:

给定二叉树 [3,9,20,null,null,15,7]
```
    3
   / \
  9  20
    /  \
   15   7
```
返回 true 。

示例 2:

给定二叉树 [1,2,2,3,3,null,null,4,4]
```
       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
```
返回 false 。
## 解法
递归
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) return true
    let isDone = false
    let result = true

    function dfs(node) {
        if (!node || isDone) return 0
        let d1 = dfs(node.left) + 1
        let d2 = dfs(node.right) + 1
        if (Math.abs(d1 - d2) > 1) {
            isDone = true
            result = false
        }

        if (isDone) return
        return Math.max(d1, d2)
    }

    dfs(root)
    return result
};
```
