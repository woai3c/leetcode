# [95. 不同的二叉搜索树 II](https://leetcode-cn.com/problems/unique-binary-search-trees-ii/)
给定一个整数 n，生成所有由 1 ... n 为节点所组成的 二叉搜索树 。
 
示例：
```
输入：3
输出：
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
解释：
以上的输出对应以下 5 种不同结构的二叉搜索树：

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
```

提示：

* 0 <= n <= 8

## 解法
假设当前节点为 i，它的左子树为 (1, i - 1)，右子树为 (i + 1, n)，这样就可以生成一棵树（由于是二叉搜索树，左子树必定比当前节点小，右子树比当前节点大）。

当遍历 [1,2,...n] 数组时，就可以生成一系列的树，每颗树的生成规则都和上面一样。
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (!n) return []
    return generate(1, n)
};

function generate(start, end) {
    if (start == end) return [new TreeNode(start)]
    if (start > end) return [null]

    const result = []
    for (let i = start; i <= end; i++) {
        const lefts = generate(start, i - 1)
        const rights = generate(i + 1, end)
        // 循环遍历左右子树，将它们和当前节点结合生成不同的树
        for (const left of lefts) {
            for (const right of rights) {
                const node = new TreeNode(i)
                node.left = left
                node.right = right
                result.push(node)
            }
        }
    }

    return result
}
```
