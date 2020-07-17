# [1315. 祖父节点值为偶数的节点和](https://leetcode-cn.com/problems/sum-of-nodes-with-even-valued-grandparent/)
给你一棵二叉树，请你返回满足以下条件的所有节点的值之和：

* 该节点的祖父节点的值为偶数。（一个节点的祖父节点是指该节点的父节点的父节点。）

如果不存在祖父节点值为偶数的节点，那么返回 0 。

示例：

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/01/10/1473_ex1.png)

```
输入：root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
输出：18
解释：图中红色节点的祖父节点的值为偶数，蓝色节点为这些红色节点的祖父节点。
```

提示：

* 树中节点的数目在 1 到 10^4 之间。
* 每个节点的值在 1 到 100 之间。

## 解法
深度优先
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
var sumEvenGrandparent = function(root) {
    let sum = 0
    function dfs(node, p, g) {
        if (!node) return null
        if (g && g.val % 2 == 0) sum += node.val
        dfs(node.left, node, p)
        dfs(node.right, node, p)
    }

    dfs(root, null, null)
    return sum
};
```
