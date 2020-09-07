# [563. 二叉树的坡度](https://leetcode-cn.com/problems/binary-tree-tilt/)
给定一个二叉树，计算整个树的坡度。

一个树的节点的坡度定义即为，该节点左子树的结点之和和右子树结点之和的差的绝对值。空结点的的坡度是0。

整个树的坡度就是其所有节点的坡度之和。

 

示例：
```
输入：
         1
       /   \
      2     3
输出：1
解释：
结点 2 的坡度: 0
结点 3 的坡度: 0
结点 1 的坡度: |2-3| = 1
树的坡度 : 0 + 0 + 1 = 1
```

提示：

* 任何子树的结点的和不会超过 32 位整数的范围。
* 坡度的值不会超过 32 位整数的范围。
## 解法
后序遍历
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
 * @return {number}
 */
var findTilt = function(root) {
    let result = 0

    function dfs(node) {
        if (!node) return 0
        const left = dfs(node.left)
        const right = dfs(node.right)
        result += Math.abs(left - right)
        return left + right + node.val
    }

    dfs(root)
    return result
};
```
