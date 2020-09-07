# [572. 另一个树的子树](https://leetcode-cn.com/problems/subtree-of-another-tree/)
给定两个非空二叉树 s 和 t，检验 s 中是否包含和 t 具有相同结构和节点值的子树。s 的一个子树包括 s 的一个节点和这个节点的所有子孙。s 也可以看做它自身的一棵子树。

示例 1:
```
给定的树 s:

     3
    / \
   4   5
  / \
 1   2
```
给定的树 t：
```
   4 
  / \
 1   2
返回 true，因为 t 与 s 的一个子树拥有相同的结构和节点值。
```
示例 2:
给定的树 s：
```
     3
    / \
   4   5
  / \
 1   2
    /
   0
```
给定的树 t：
```
   4
  / \
 1   2
返回 false。
```
## 解法
先从 s 中找到与 t 值相同的节点，然后从这一节点开始与整个 t 开始匹配。
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    if (!s && !t) return true
    let isDone = false

    function dfs(node) {
        if (!node || isDone) return null
        if (node.val == t.val) {
            if (match(node, t)) {
                isDone = true
                return
            }
        }

        dfs(node.left)
        dfs(node.right)
    }

    dfs(s)
    return isDone
};

function match(s, t) {
    const stack1 = []
    const stack2 = []
    let node1 = s
    let node2 = t

    while ((node1 && node2) || (stack1.length && stack2.length)) {
        while (node1 && node2) {
            if (node1.val != node2.val) return false
            stack1.push(node1)
            stack2.push(node2)
            node1 = node1.left
            node2 = node2.left
        }

        if (!node1 && node2 || !node2 && node1) return false
        node1 = stack1.pop().right
        node2 = stack2.pop().right
    }

    return !node1 && !node2
}
```
