# [145. 二叉树的后序遍历](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/)
给定一个二叉树，返回它的 后序 遍历。

示例:
```
输入: [1,null,2,3]  
   1
    \
     2
    /
   3 

输出: [3,2,1]
```
进阶: 递归算法很简单，你可以通过迭代算法完成吗？

## 解法
### 解一
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const result = []

    function dfs(node) {
        if (!node) return null
        dfs(node.left)
        dfs(node.right)
        result.push(node.val)
    }

    dfs(root)
    return result
};
```
### 解二
利用逆先序迭代遍历得出结果，再逆序返回。

先序遍历顺序为中-左-右，逆先序顺序为中-右-左，后序遍历顺序为左-右-中。而逆先序的遍历结果的倒序就是后序遍历的结果。
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (!root) return []
    const result = []
    const stack = [root]
    while (stack.length) {
        const node = stack.pop()
        result.push(node.val)
        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
    }

    return result.reverse()
};
```
