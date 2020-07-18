# [1302. 层数最深叶子节点的和](https://leetcode-cn.com/problems/deepest-leaves-sum/)

给你一棵二叉树，请你返回层数最深的叶子节点的和。

示例：

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/12/28/1483_ex1.png)
```
输入：root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
输出：15
```

提示：

* 树中节点数目在 1 到 10^4 之间。
* 每个节点的值在 1 到 100 之间。

## 解法
用 deep 记录最深高度。如果当前节点深度比 deep 大，则将和清零，重新计算；如果它们相等，则相加。
### 深度优先搜索
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
var deepestLeavesSum = function(root) {
    let result = 0
    let deep = 0

    function dfs(node, level) {
        if (!node) return
        if (!node.left && !node.right) {
            if (level > deep) {
                deep = level
                result = node.val
            } else if (level == deep) {
                result += node.val
            }

            return
        }

        dfs(node.left, level + 1)
        dfs(node.right, level + 1)
    }

    dfs(root, deep)
    return result
};
```
### 广度优先搜索
利用广度优先搜索每次遍历一层的特性，当遍历最后一层的时候，就是所要的答案。
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
var deepestLeavesSum = function(root) {
    let result = 0
    const queue = []
    queue.push(root)
    while (queue.length) {
        let len = queue.length
        result = 0
        while (len--) {
            const node = queue.shift()
            result += node.val
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }

    return result
};
```
