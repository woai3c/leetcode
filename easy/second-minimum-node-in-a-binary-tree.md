# [671. 二叉树中第二小的节点](https://leetcode-cn.com/problems/second-minimum-node-in-a-binary-tree/)
给定一个非空特殊的二叉树，每个节点都是正数，并且每个节点的子节点数量只能为 2 或 0。如果一个节点有两个子节点的话，那么该节点的值等于两个子节点中较小的一个。

给出这样的一个二叉树，你需要输出所有节点中的第二小的值。如果第二小的值不存在的话，输出 -1 。

示例 1:
```
输入: 
    2
   / \
  2   5
     / \
    5   7

输出: 5
说明: 最小的值是 2 ，第二小的值是 5 。
```
示例 2:
```
输入: 
    2
   / \
  2   2

输出: -1
说明: 最小的值是 2, 但是不存在第二小的值。
```
## 解法
每个节点的值都是所处子树的最小值，所以如果节点的值大于最小值，就不必再往下搜索，把当前值返回即可。
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
var findSecondMinimumValue = function(root) {
    return _findSecondMinimumValue(root, root.val)
};

function _findSecondMinimumValue(node, min) {
    if (!node) return -1
    if (node.val > min) return node.val
    // 查看节点的两棵子树，是否有比它大的值。
    const val1 = _findSecondMinimumValue(node.left, min)
    const val2 = _findSecondMinimumValue(node.right, min)
    
    if (val1 == -1) return val2
    if (val2 == -1) return val1
    if (val1 > val2) return val2
    return val1
}
```
