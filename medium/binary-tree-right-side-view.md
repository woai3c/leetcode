# [199. 二叉树的右视图](https://leetcode-cn.com/problems/binary-tree-right-side-view/)
给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

示例:
```
输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]
解释:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
```
## 解法
这道题就是求从每层右边开始遍历的第一个数。
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return []
    const result = []
    const queue = [root]
    while (queue.length) {
        let len = queue.length
        let isFirst = true
        while (len--) {
            const node = queue.shift()
            if (isFirst) {
                isFirst = false
                result.push(node.val)
            }
            
            if (node.right) queue.push(node.right)
            if (node.left) queue.push(node.left)
        }
    }

    return result
};
```
