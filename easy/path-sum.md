# [112. 路径总和](https://leetcode-cn.com/problems/path-sum/)
给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

**说明**: 叶子节点是指没有子节点的节点。

**示例**: 

给定如下二叉树，以及目标和 `sum = 22`，
```
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
```
返回 `true`, 因为存在目标和为 22 的根节点到叶子节点的路径 `5->4->11->2`。

### 实现1
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root) return false
    if (subHasPathSum(root, 0, sum)) return true
    return false
};

function subHasPathSum(node, curSum, sum) {
    if (node) {
        if (!node.left && !node.right) {
            if (curSum + node.val == sum) return true 
            return false
        }

        if (subHasPathSum(node.left, curSum + node.val, sum) || subHasPathSum(node.right, curSum + node.val, sum)) return true
    }
}
```

### 实现2
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root) return false
    sum -= root.val
    if (!root.left && !root.right && sum === 0) return true
    return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
};
```
