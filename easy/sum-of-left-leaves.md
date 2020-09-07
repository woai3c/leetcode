# [404. 左叶子之和](https://leetcode-cn.com/problems/sum-of-left-leaves/)
计算给定二叉树的所有左叶子之和。

示例：
```
    3
   / \
  9  20
    /  \
   15   7
```
在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
## 解法
### 解一
深度优先搜索
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

function sumOfLeftLeaves(root: TreeNode | null): number {
    let result: number = 0

    function dfs(node: TreeNode | null, isLeft: boolean): null | undefined {
        if (!node) return null
        if (!node.left && !node.right && isLeft) {
            result += node.val
            return
        }

        dfs(node.left, true)
        dfs(node.right, false)
    }

    dfs(root, false)
    return result
};
```

### 解二
广度优先搜索
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

function sumOfLeftLeaves(root: TreeNode | null): number {
    let result: number = 0
    let node: any = root
    let isLeft: boolean = false
    const stack: TreeNode[] = []
    while (stack.length || node) {
        while (node) {
            stack.push(node)
            if (node.left) isLeft = true
            node = node.left
        }

        node = stack.pop()
        if (isLeft && !node.left && !node.right) result += node.val
        node = node.right
        isLeft = false
    }

    return result
};
```
