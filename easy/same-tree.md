# [100. 相同的树](https://leetcode-cn.com/problems/same-tree/)
给定两个二叉树，编写一个函数来检验它们是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

示例 1:
```
输入:       1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

输出: true
```
示例 2:
```
输入:      1          1
          /           \
         2             2

        [1,2],     [1,null,2]

输出: false
```
示例 3:
```
输入:       1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

输出: false
```
## 解法
### 解一
深度优先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if ((!p && q) || (p && !q)) return false
    if (!p && !q) return true
    if (p.val == q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    }

    return false
};
```
### 解二
广度优先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const stack1 = []
    const stack2 = []
    let node1 = p
    let node2 = q
    while (stack1.length || stack2.length || node1 || node2) {
        while (node1 && node2) {
            if (node1.val != node2.val) return false
            stack1.push(node1)
            stack2.push(node2)
            node1 = node1.left
            node2 = node2.left
        }

        if ((node1 && !node2) || (!node1 && node2)) return false
        node1 = stack1.pop().right
        node2 = stack2.pop().right
    }

    return true
};
```
