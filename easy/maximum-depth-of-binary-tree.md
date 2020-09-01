# [104. 二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)
给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。
```
示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
```
返回它的最大深度 3 。
## 解法
### 解一
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
 * @return {number}
 */
var maxDepth = function(root) {
    function dfs(node, depth) {
        if (!node) return depth
        depth++
        return Math.max(dfs(node.left, depth), dfs(node.right, depth))
    }

    return dfs(root, 0)
};
```
### 解二
迭代
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
var maxDepth = function(root) {
    if (!root) return 0
    let result = 0
    const queue = [root]
    while (queue.length) {
        let len = queue.length
        while (len--) {
            const node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        result++
    }

    return result
};
```
