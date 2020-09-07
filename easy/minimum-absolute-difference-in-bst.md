# [530. 二叉搜索树的最小绝对差](https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/)
给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。

 

示例：
```
输入：

   1
    \
     3
    /
   2

输出：
1

解释：
最小绝对差为 1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。
```

提示：

* 树中至少有 2 个节点。
* 本题与 783 https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/ 相同
## 解法
由于中序遍历是升序遍历，所以只要从中序遍布的两个连续的数找差值就行了。
```ts
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

function getMinimumDifference(root: TreeNode | null): number {
    let pre: number = Infinity
    let result: number = Infinity

    function dfs(node: TreeNode | null): null | undefined {
        if (!node) return null
        dfs(node.left)
        result = Math.min(result, Math.abs(pre - node.val))
        pre = node.val
        dfs(node.right)
    }

    dfs(root)
    return result
};
```
