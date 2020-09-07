# [1448. 统计二叉树中好节点的数目](https://leetcode-cn.com/problems/count-good-nodes-in-binary-tree/)
给你一棵根为 root 的二叉树，请你返回二叉树中好节点的数目。

「好节点」X 定义为：从根到该节点 X 所经过的节点中，没有任何节点的值大于 X 的值。

 

示例 1：

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/05/16/test_sample_1.png)

```
输入：root = [3,1,4,3,null,1,5]
输出：4
解释：图中蓝色节点为好节点。
根节点 (3) 永远是个好节点。
节点 4 -> (3,4) 是路径中的最大值。
节点 5 -> (3,4,5) 是路径中的最大值。
节点 3 -> (3,1,3) 是路径中的最大值。
```
示例 2：

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/05/16/test_sample_2.png)
```
输入：root = [3,3,null,4,2]
输出：3
解释：节点 2 -> (3, 3, 2) 不是好节点，因为 "3" 比它大。
```
示例 3：
```
输入：root = [1]
输出：1
解释：根节点是好节点。
```

提示：

* 二叉树中节点数目范围是 [1, 10^5] 。
* 每个节点权值的范围是 [-10^4, 10^4] 。

## 解法
递归时要把遍历过的节点的值收集起来，取最大值。

然后和这个最大值和子节点对比，看是否是好节点。
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
var goodNodes = function(root) {
    if (!root) return 0
    let result = 1

    function helper(node, max) {
        if (node.left) {
            if (node.left.val >= max) result++
            helper(node.left, Math.max(max, node.left.val))
        }

        if (node.right) {
            if (node.right.val >= max) result++
            helper(node.right, Math.max(max, node.right.val))
        }
    }

    helper(root, root.val)
    return result
};
```
