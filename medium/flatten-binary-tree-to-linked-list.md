# [114. 二叉树展开为链表](https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/)
给定一个二叉树，原地将它展开为一个单链表。

 

例如，给定二叉树
```
    1
   / \
  2   5
 / \   \
3   4   6
```
将其展开为：
```
1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
```          
## 解法
### 解一
递归
```js
/**
 * Definition for a binary tree root.
 * function Treeroot(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {Treeroot} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) return null
    const temp = flatten(root.right)
    root.right = flatten(root.left)
    root.left = null
    let node = root
    while (node.right) {
        node = node.right
    }

    node.right = temp
    return root
};
```
### 解二
迭代 [官方题解三](https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/solution/er-cha-shu-zhan-kai-wei-lian-biao-by-leetcode-solu/)
```js
/**
 * Definition for a binary tree root.
 * function Treeroot(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {Treeroot} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    while (root) {
        if (root.left) {
            // 寻找左子树最右边的节点
            let r = root.left
            while (r.right) {
                r = r.right
            }

            r.right = root.right
            root.right = root.left
            root.left = null
        }

        root = root.right
    }
};
```
