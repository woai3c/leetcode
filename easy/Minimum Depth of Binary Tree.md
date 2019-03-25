# 二叉树的最小深度

给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明: 叶子节点是指没有子节点的节点。

示例:

给定二叉树 `[3,9,20,null,null,15,7]`,
```
    3
   / \
  9  20
    /  \
   15   7
```
返回它的最小深度  2.

## 实现
#### 实现1
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
var minDepth = function(root) {
    if (!root) {
        return 0
    }
    
    const left = minDepth(root.left)
    const right = minDepth(root.right)
    
    return (left == 0 || right == 0)?
            left + right + 1 : 1 + Math.min(left, right)
};
```
#### 实现2
```js
let deep
let arry
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
var minDepth = function(root) {
    if (!root) {
        return 0
    }
    
    deep = 1
    arry = []
    findDeep(root, 1)
    
    return Math.min(...arry)
};

function findDeep(node, deep) {
    const left = node.left
    const right = node.right
    
    if (!left && !right) {
        arry.push(deep)
        return
    }
    
    if (node.left) {
        findDeep(left, deep + 1)
    }
    if (node.right) {
        findDeep(right, deep + 1)
    }
}
```
