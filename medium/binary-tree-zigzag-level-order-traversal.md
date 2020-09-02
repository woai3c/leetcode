# [103. 二叉树的锯齿形层次遍历](https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/)
给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

例如：
```
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
```
返回锯齿形层次遍历如下：
```
[
  [3],
  [20,9],
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
 var zigzagLevelOrder = function(root) {
    if (!root) return []
    const result = []
    const stack = [root]
    let depth = 0
    while (stack.length) {
        let len = stack.length
        const arr = []
        while (len--) {
            const node = stack.shift()
            // 偶数层从左往右
            // 奇数层从右往左
            if (depth & 1) {
                arr.unshift(node.val)
            } else {
                arr.push(node.val)
            }
            
            if (node.left) stack.push(node.left)
            if (node.right) stack.push(node.right)
        }

        result.push(arr)
        depth++
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
 var zigzagLevelOrder = function(root) {
    if (!root) return []
    const result = []
    
    function dfs(node, depth) {
        if (!node) return
        if (!result[depth]) {
            result[depth] = []
        }
        
        // 偶数层从左往右
        // 奇数层从右往左
        if (depth & 1) {
            result[depth].unshift(node.val)
        } else {
            result[depth].push(node.val)
        }
        
        dfs(node.left, depth + 1)
        dfs(node.right, depth + 1)
    }

    dfs(root, 0)
    return result
};
```
