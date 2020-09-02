# [102. 二叉树的层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)
给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

 

示例：

二叉树：[3,9,20,null,null,15,7],
```
    3
   / \
  9  20
    /  \
   15   7
```
返回其层次遍历结果：
```
[
  [3],
  [9,20],
  [15,7]
]
```
## 解法
### 解一
广度优先搜索
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
var levelOrder = function(root) {
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

        result.push(arr)
    }

    return result
};
```
### 解二
深度优先搜索
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
var levelOrder = function(root) {
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
    return result
};
```
