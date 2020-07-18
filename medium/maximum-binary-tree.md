# [654. 最大二叉树](https://leetcode-cn.com/problems/maximum-binary-tree/)

给定一个不含重复元素的整数数组。一个以此数组构建的最大二叉树定义如下：

* 二叉树的根是数组中的最大元素。
* 左子树是通过数组中最大值左边部分构造出的最大二叉树。
* 右子树是通过数组中最大值右边部分构造出的最大二叉树。
* 通过给定的数组构建最大二叉树，并且输出这个树的根节点。

 

示例 ：

输入：[3,2,1,6,0,5]
输出：返回下面这棵树的根节点：
```
      6
    /   \
   3     5
    \    / 
     2  0   
       \
        1
```
提示：

* 给定的数组的大小在 [1, 1000] 之间。
## 解法
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if (!nums.length) return null
    const index = findMaxIndex(nums)
    const node = new TreeNode(nums[index])
    node.left = constructMaximumBinaryTree(nums.slice(0, index))
    node.right = constructMaximumBinaryTree(nums.slice(index + 1))

    return node
};

function findMaxIndex(nums) {
    let max = nums[0]
    let result = 0
    for (let i = 1, len = nums.length; i < len; i++) {
        if (nums[i] > max) {
            max = nums[i]
            result = i
        }
    }

    return result
}
```
