# [1038. 从二叉搜索树到更大和树](https://leetcode-cn.com/problems/binary-search-tree-to-greater-sum-tree/)
给出二叉 搜索 树的根节点，该二叉树的节点值各不相同，修改二叉树，使每个节点 node 的新值等于原树中大于或等于 node.val 的值之和。

提醒一下，二叉搜索树满足下列约束条件：

* 节点的左子树仅包含键 小于 节点键的节点。
* 节点的右子树仅包含键 大于 节点键的节点。
* 左右子树也必须是二叉搜索树。
 

示例：

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/05/03/tree.png)
```
输入：[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
输出：[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
```

提示：

* 树中的节点数介于 1 和 100 之间。
* 每个节点的值介于 0 和 100 之间。
* 给定的树为二叉搜索树。

## 解法
### 实现一
需要中序遍历两次树。第一次遍历按升序收集各个节点的值，对它们进行求和得出 `sum`。

第二次中序遍历时，每遍历到一个节点时，用 `sum` 减去**当前节点之前的所有节点的值**。

由于第一个节点没有前置节点，所以需要在第一次遍历时，先推入一个 0 到数组中。
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
var bstToGst = function(root) {
    const arr = [0]
    dfs1(root, arr)

    let sum = 0
    for (let i = 0, len = arr.length; i < len; i++) {
        sum += arr[i]
    }

    let start = 0
    function dfs2(node) {
        if (!node) return
        dfs2(node.left)
        sum -= arr[start++]
        node.val = sum 
        dfs2(node.right)
    }

    dfs2(root)
    return root
};

function dfs1(node, arr) {
    if (!node) return
    dfs1(node.left, arr)
    arr.push(node.val)
    dfs1(node.right, arr)
}
```
### 实现二
观察图可得到，这是一个反向中序遍历的累加树。
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
var bstToGst = function(root) {
    let sum = 0

    function dfs(node) {
        if (!node) return
        dfs(node.right)
        sum += node.val
        node.val = sum
        dfs(node.left)
    }

    dfs(root)
    
    return root
};
```
