# [101. 对称二叉树](https://leetcode-cn.com/problems/symmetric-tree/)
给定一个二叉树，检查它是否是镜像对称的。

 

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
```
    1
   / \
  2   2
   \   \
   3    3
```

进阶：

* 你可以运用递归和迭代两种方法解决这个问题吗？
## 解法
### 解一
迭代
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true
    const queue = [root, root]
    while (queue.length) {
        const node1 = queue.shift()
        const node2 = queue.shift()
        if (!node1 && !node2) continue
        if ((node1 && !node2) || (!node1 && node2) || node1.val != node2.val) return false
        queue.push(node1.left, node2.right)
        queue.push(node1.right, node2.left)
    }

    return true
};
```
### 解二
递归
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true
    return _isSymmetric(root.left, root.right)
};

function _isSymmetric(left, right) {
    if (!left && !right) return true
    if ((!left && right) || (left && !right) || left.val !== right.val) return false
    return _isSymmetric(left.left, right.right) && _isSymmetric(left.right, right.left)
}
```
