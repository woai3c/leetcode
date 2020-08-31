# [94. 二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)
给定一个二叉树，返回它的中序 遍历。

示例:
```
输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,3,2]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？
```
## 解法
[用递归的思想实现二叉树前、中、后序迭代遍历](https://zhuanlan.zhihu.com/p/163534130)
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
var inorderTraversal = function(root) {
    let node = root
    const stack = []
    const result = []
    while (stack.length || node) {
        while (node) {
            stack.push(node)
            node = node.left
        }

        node = stack.pop()
        result.push(node.val)
        node = node.right
    }

    return result
};
```
