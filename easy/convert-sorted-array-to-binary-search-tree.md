# [108. 将有序数组转换为二叉搜索树](https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/)
将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:
```
给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5
```
## 解法
递归取当前数组的中间值当中间节点。
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    function _sortedArrayToBST(left, right) {
        if (left > right) return null
        const index = ~~((left + right) / 2)
        const node = new TreeNode(nums[index])
        node.left = _sortedArrayToBST(left, index - 1)
        node.right = _sortedArrayToBST(index + 1, right)

        return node
    }

    return _sortedArrayToBST(0, nums.length - 1)
};
```
