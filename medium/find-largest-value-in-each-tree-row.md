# [515. 在每个树行中找最大值](https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/)
您需要在二叉树的每一行中找到最大的值。

示例：
```
输入: 

          1
         / \
        3   2
       / \   \  
      5   3   9 

输出: [1, 3, 9]
```
## 解法
层序遍历
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
 * @return {number[]}
 */
var largestValues = function(root) {
    if (!root) return []
    const result = []
    const queue = [root]
    while (queue.length) {
        let len = queue.length
        let max = -Infinity
        while (len--) {
            const node = queue.shift()
            max = Math.max(node.val, max)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        result.push(max)
    }

    return result
};
```
