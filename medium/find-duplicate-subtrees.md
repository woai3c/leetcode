# [652. 寻找重复的子树](https://leetcode-cn.com/problems/find-duplicate-subtrees/)
给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。

两棵树重复是指它们具有相同的结构以及相同的结点值。

示例 1：
```
        1
       / \
      2   3
     /   / \
    4   2   4
       /
      4
```
下面是两个重复的子树：
```
      2
     /
    4
```
和
```
    4
```
因此，你需要以列表的形式返回上述重复子树的根结点。
## 解法
后序遍历 + 序列化
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    const hash = {}
    const result = []

    function dfs(node) {
        if (!node) return '#'
        const key = node.val + ' ' + dfs(node.left) + ' ' + dfs(node.right)
        if (!hash[key]) {
            hash[key] = 0
        } else if (hash[key] == 1) {
            result.push(node)
        }

        hash[key]++
        return key
    }

    dfs(root)
    return result
};
```
