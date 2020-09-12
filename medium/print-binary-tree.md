# [655. 输出二叉树](https://leetcode-cn.com/problems/print-binary-tree/)
在一个 m*n 的二维字符串数组中输出二叉树，并遵守以下规则：

* 行数 m 应当等于给定二叉树的高度。
* 列数 n 应当总是奇数。
* 根节点的值（以字符串格式给出）应当放在可放置的第一行正中间。根节点所在的行与列会将剩余空间划分为两部分（左下部分和右下部分）。你应该将左子树输出在左下部分，右子树输出在右下部分。左下和右下部分应当有相同的大小。即使一个子树为空而另一个非空，你不需要为空的子树输出任何东西，但仍需要为另一个子树留出足够的空间。然而，如果两个子树都为空则不需要为它们留出任何空间。
* 每个未使用的空间应包含一个空的字符串""。
* 使用相同的规则输出子树。

示例 1:
```
输入:
     1
    /
   2
输出:
[["", "1", ""],
 ["2", "", ""]]
```
示例 2:
```
输入:
     1
    / \
   2   3
    \
     4
输出:
[["", "", "", "1", "", "", ""],
 ["", "2", "", "", "", "3", ""],
 ["", "", "4", "", "", "", ""]]
```
示例 3:
```
输入:
      1
     / \
    2   5
   / 
  3 
 / 
4 
输出:
[["",  "",  "", "",  "", "", "", "1", "",  "",  "",  "",  "", "", ""]
 ["",  "",  "", "2", "", "", "", "",  "",  "",  "",  "5", "", "", ""]
 ["",  "3", "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]
 ["4", "",  "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]]
```
注意: 二叉树的高度在范围 [1, 10] 中。
## 解法
层序遍历获取树的深度，再用前序遍历填充节点数值。
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
 * @return {string[][]}
 */
var printTree = function(root) {
    if (!root) return []
    let depth = getDepth(root)
    let i = 0
    const result = []
    const len = 2 ** depth - 1
    while (i < depth) {
        result.push(new Array(len).fill(''))
        i++
    }
    
    function dfs(node, depth, start, end) {
        if (!node) return
        const mid = (start + end) >> 1
        result[depth][mid] = node.val + ''
        dfs(node.left, depth + 1, start, mid - 1)
        dfs(node.right, depth + 1, mid + 1, end)
    }

    dfs(root, 0, 0, len - 1)
    return result
};

function getDepth(node) {
    const queue = [node]
    let result = 0
    while (queue.length) {
        result++
        let len = queue.length
        while (len--) {
            const node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }

    return result
}
```
