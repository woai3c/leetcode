# 二叉搜索树的范围和
给定二叉搜索树的根结点 `root`，返回 `L` 和 `R`（含）之间的所有结点的值的和。

二叉搜索树保证具有唯一的值。


示例 1：
```
输入：root = [10,5,15,3,7,null,18], L = 7, R = 15
输出：32
```
示例 2：
```
输入：root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
输出：23
```

提示：

1. 树中的结点数量最多为 `10000` 个。
2. 最终的答案保证小于 `2^31`。

## 实现
```js
let sum
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    sum = 0
    midBinaryTree(root, L, R)
    return sum
    
};

function midBinaryTree(node, L, R) {
    if (node) {
        midBinaryTree(node.left, L, R)
        
        const val = node.val
        if (val >= L && val <= R) {
            sum += val
        }
        
        midBinaryTree(node.right, L, R)
    }
}
```
