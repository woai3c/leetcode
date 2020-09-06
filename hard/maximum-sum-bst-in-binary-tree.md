# [1373. 二叉搜索子树的最大键值和](https://leetcode-cn.com/problems/maximum-sum-bst-in-binary-tree/)
给你一棵以 root 为根的 二叉树 ，请你返回 任意 二叉搜索子树的最大键值和。

二叉搜索树的定义如下：

* 任意节点的左子树中的键值都 小于 此节点的键值。
* 任意节点的右子树中的键值都 大于 此节点的键值。
* 任意节点的左子树和右子树都是二叉搜索树。
 

示例 1：

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/03/07/sample_1_1709.png)
```
输入：root = [1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]
输出：20
解释：键值为 3 的子树是和最大的二叉搜索树。
```
示例 2：

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/03/07/sample_2_1709.png)

```
输入：root = [4,3,null,1,2]
输出：2
解释：键值为 2 的单节点子树是和最大的二叉搜索树。
```
示例 3：
```
输入：root = [-4,-2,-5]
输出：0
解释：所有节点键值都为负数，和最大的二叉搜索树为空。
```
示例 4：
```
输入：root = [2,1,3]
输出：6
```
示例 5：
```
输入：root = [5,4,8,3,null,6,3]
输出：7
```

提示：

* 每棵树最多有 40000 个节点。
* 每个节点的键值在 [-4 * 10^4 , 4 * 10^4] 之间。

## 解法
自底向上递归。

要点在于节点向上返回时，要把当前树的最小值和最大值返回。

以便让上面的节点判断是否是正确的二叉搜索树。
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxSumBST = function(root) {
    let maxSum = 0

    function dfs(node) {
        // 返回当前值，上界，下界
        if (!node) return [0, -Infinity, Infinity]
        // 不能使用解构赋值，否则会报错：递归超出调用次数
        // const [leftSum, leftMax, leftMin] = dfs(node.left)
        // const [rightSum, rightMax, rightMin] = dfs(node.right)
        const left = dfs(node.left)
        const right = dfs(node.right)
        
        // 二叉搜索树当前节点的值要大于左子树的最大值，小于右子树的最小值。
        // left[1] 即 leftMax，right[2] 即 rightMin
        if (node.val > left[1] && node.val < right[2]) {
            const curSum = node.val + left[0] + right[0]
            maxSum = Math.max(maxSum, curSum)
            // 返回二叉搜索树的和，当前二叉搜索树的最大值，最小值
            // 最大值要从右子树的最大值找，最小值要从左子树的最小值找
            return [curSum, Math.max(node.val, right[1]), Math.min(node.val, left[2])]
        }
        
        // 如果不是二叉搜索树，就将上下界调换，让二叉搜索树的判断条件一直不成立。
        return [0, Infinity, -Infinity]
    }

    dfs(root)
    return maxSum
};
```
