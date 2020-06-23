# [226. 翻转二叉树](https://leetcode-cn.com/problems/invert-binary-tree/)
翻转一棵二叉树。

示例：

输入：
```
     4
   /   \
  2     7
 / \   / \
1   3 6   9
```
输出：
```
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```
**备注:**

这个问题是受到 Max Howell 的原问题启发的 ：

>谷歌：我们90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。

### 实现1
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return root
    const temp = root.left
    root.left = invertTree(root.right)
    root.right = invertTree(temp)
    return root
};
```
### 实现2
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return root
    const stack = [root]
    while (stack.length) {
        const node = stack.pop();
        [node.left, node.right] = [node.right, node.left]
        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
    }

    return root
};
```
