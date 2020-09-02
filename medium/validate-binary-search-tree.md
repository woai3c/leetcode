# [98. 验证二叉搜索树](https://leetcode-cn.com/problems/validate-binary-search-tree/)
给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

* 节点的左子树只包含小于当前节点的数。
* 节点的右子树只包含大于当前节点的数。
* 所有左子树和右子树自身必须也是二叉搜索树。

示例 1:
```
输入:
    2
   / \
  1   3
输出: true
```
示例 2:
```
输入:
    5
   / \
  1   4
     / \
    3   6
输出: false
解释: 输入为: [5,1,4,null,null,3,6]。
     根节点的值为 5 ，但是其右子节点值为 4 。
```
## 解法
### 解一
二叉搜索树的中序遍历结果，就是这棵树的升序遍历。

利用这一特性，中序遍历树，看它是否是升序。如果不是升序，那就不是二叉搜索树。
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
var isValidBST = function(root) {
    const arr = []
    let preVal = -Infinity
    let isDone = false
    let result = true

    function dfs(node) {
        if (!node || isDone) return
        dfs(node.left)
        if (preVal < node.val) {
            preVal = node.val
        } else {
            isDone = true
            result = false
        }

        dfs(node.right)
    }

    dfs(root)
    return result
};
```
### 解二
[一张图让你明白上下界（最大值最小值）判定](https://leetcode-cn.com/problems/validate-binary-search-tree/solution/yi-zhang-tu-rang-ni-ming-bai-shang-xia-jie-zui-da-/)
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
var isValidBST = function(root) {
    return _isValidBST(root, -Infinity, Infinity)
};

function _isValidBST(node, min, max) {
    if (!node) return true
    const val = node.val
    if (val <= min || val >= max) return false
    return _isValidBST(node.left, min, val) && _isValidBST(node.right, val, max)
}
```
