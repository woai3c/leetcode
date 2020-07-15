# [面试题 04.08. 首个共同祖先](https://leetcode-cn.com/problems/first-common-ancestor-lcci/)
设计并实现一个算法，找出二叉树中某两个节点的第一个共同祖先。不得将其他的节点存储在另外的数据结构中。注意：这不一定是二叉搜索树。

例如，给定如下二叉树: root = [3,5,1,6,2,0,8,null,null,7,4]
```
    3
   / \
  5   1
 / \ / \
6  2 0  8
  / \
 7   4
```
示例 1:
```
输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出: 3
解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
```
示例 2:
```
输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出: 5
解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。
```
说明:

* 所有节点的值都是唯一的。
* p、q 为不同节点且均存在于给定的二叉树中。

## 解法
前序遍历，先判断当前节点是否等于 q 或 p。再判断左右子树是否和 q 或 p 相等。

主要的思路是，只有当前节点和 q 或 p 相等，才会返回一个不为空的节点，否则都是返回空。

根据此思路发现，只要左右子树都不为空，必然是找到了 q 和 p，所以当前节点就是答案。
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    function dfs(node, p, q) {
        if (!node || node == p || node == q) return node
        const left = dfs(node.left, p, q)
        const right = dfs(node.right, p, q)
        if (left && right) return node
        return left? left : right
    }

    return dfs(root, p, q)
};
```
