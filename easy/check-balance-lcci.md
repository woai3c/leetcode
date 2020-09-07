# [面试题 04.04. 检查平衡性](https://leetcode-cn.com/problems/check-balance-lcci/)
实现一个函数，检查二叉树是否平衡。在这个问题中，平衡树的定义如下：任意一个节点，其两棵子树的高度差不超过 1。


示例 1:
```
给定二叉树 [3,9,20,null,null,15,7]
    3
   / \
  9  20
    /  \
   15   7
返回 true 。
```
示例 2:
```
给定二叉树 [1,2,2,3,3,null,null,4,4]
      1
     / \
    2   2
   / \
  3   3
 / \
4   4
返回 false 。
```
## 解法
后序遍历，先获取左右子树的深度，再比较。
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
    let isDone = false

    function dfs(node) {
        if (!node || isDone) return 0
        const left = dfs(node.left)
        if (isDone) return
        const right = dfs(node.right)
        if (isDone) return
        if (Math.abs(left - right) > 1) {
            isDone = true
            return
        }

        return Math.max(left, right) + 1
    }

    dfs(root)
    return !isDone
};
```
