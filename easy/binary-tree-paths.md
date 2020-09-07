# [257. 二叉树的所有路径](https://leetcode-cn.com/problems/binary-tree-paths/)
给定一个二叉树，返回所有从根节点到叶子节点的路径。

说明: 叶子节点是指没有子节点的节点。

示例:
```
输入:

   1
 /   \
2     3
 \
  5

输出: ["1->2->5", "1->3"]

解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
```
## 解法
前序遍历
```js
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function binaryTreePaths(root: TreeNode | null): string[] {
    if (!root) return []
    const result: string[] = []

    function dfs(node: TreeNode | null, path: string) {
        if (!node) return null
        path += '->' + node.val
        if (!node.left && !node.right) {
            result.push(path.slice(2))
            return
        }

        dfs(node.left, path)
        dfs(node.right, path)
    }

    dfs(root, '')
    return result
};
```
