# 最长同值路径

给定一个二叉树，找到最长的路径，这个路径中的每个节点具有相同值。 这条路径可以经过也可以不经过根节点。

注意：两个节点之间的路径长度由它们之间的边数表示。

示例 1:

输入:
```
              5
             / \
            4   5
           / \   \
          1   1   5
```
输出:
```
2
```
示例 2:

输入:
```
              1
             / \
            4   5
           / \   \
          4   4   5
 ```
输出:
```
2
```
注意: 给定的二叉树不超过10000个结点。 树的高度不超过1000。

## 实现
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
let max

var longestUnivaluePath = function(root) {
    if (root == null) {
        return 0
    }
    max = 0
    getPath(root)
    return max;
};

function getPath(node) {
    if (node == null) {
        return 0
    }
    const {left, right, val} = node
    let l = getPath(left)
    let r = getPath(right)

    l = left && left.val == val? l + 1 : 0
    r = right && right.val == val? r + 1 : 0
    
    max = Math.max(max, l + r)
    return Math.max(l, r)
}
```
