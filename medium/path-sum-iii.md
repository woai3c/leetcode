# [437. 路径总和 III](https://leetcode-cn.com/problems/path-sum-iii/)
给定一个二叉树，它的每个结点都存放着一个整数值。

找出路径和等于给定数值的路径总数。

路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。

示例：
```
root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

返回 3。和等于 8 的路径有:

1.  5 -> 3
2.  5 -> 2 -> 1
3.  -3 -> 11
```
## 解法
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    let result = 0

    function dfs(node, cur) {
        if (!node) return
        cur -= node.val
        if (cur == 0) {
            result++
        }
            
        dfs(node.left, cur)
        dfs(node.right, cur)
    }

    function helper(node) {
        if (!node) return
        dfs(node, sum)
        // 不能把下面这两个逻辑写到 dfs 里
        // 否则会有很多节点会重复遍历
        helper(node.left, sum)
        helper(node.right, sum)
    }

    helper(root)
    return result
};
```
