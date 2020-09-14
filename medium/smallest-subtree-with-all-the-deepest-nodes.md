# [865. 具有所有最深结点的最小子树](https://leetcode-cn.com/problems/smallest-subtree-with-all-the-deepest-nodes/)
给定一个根为 root 的二叉树，每个结点的深度是它到根的最短距离。

如果一个结点在整个树的任意结点之间具有最大的深度，则该结点是最深的。

一个结点的子树是该结点加上它的所有后代的集合。

返回能满足“以该结点为根的子树中包含所有最深的结点”这一条件的具有最大深度的结点。

![](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/01/sketch1.png)

示例：
```
输入：[3,5,1,6,2,0,8,null,null,7,4]
输出：[2,7,4]
解释：

我们返回值为 2 的结点，在图中用黄色标记。
在图中用蓝色标记的是树的最深的结点。
输入 "[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]" 是对给定的树的序列化表述。
输出 "[2, 7, 4]" 是对根结点的值为 2 的子树的序列化表述。
输入和输出都具有 TreeNode 类型。
```

提示：

* 树中结点的数量介于 1 和 500 之间。
* 每个结点的值都是独一无二的。
## 解法
这道题是求最深子节点的最近公共祖先节点。

如果最深子节点只有它自己，就返回它自己。

否则返回最近的公共祖先。
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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
    // 自底向上
    function dfs(node) {
        if (!node) return [null, 0]
        const left = dfs(node.left)
        const right = dfs(node.right)
        // 返回深度较大的那棵子树
        if (left[1] > right[1]) return [left[0], left[1] + 1]
        if (left[1] < right[1]) return [right[0], right[1] + 1]
        // 如果子树深度相同，则返回当前节点
        return [node, left[1] + 1]
    }

    return dfs(root)[0]
};
```
