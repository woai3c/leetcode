# [872. 叶子相似的树](https://leetcode-cn.com/problems/leaf-similar-trees/)
请考虑一颗二叉树上所有的叶子，这些叶子的值按从左到右的顺序排列形成一个 叶值序列 。

![](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/16/tree.png)

举个例子，如上图所示，给定一颗叶值序列为 (6, 7, 4, 9, 8) 的树。

如果有两颗二叉树的叶值序列是相同，那么我们就认为它们是 叶相似 的。

如果给定的两个头结点分别为 root1 和 root2 的树是叶相似的，则返回 true；否则返回 false 。

 

提示：

* 给定的两颗树可能会有 1 到 200 个结点。
* 给定的两颗树上的值介于 0 到 200 之间。

## 解法
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    function helper(node) {
        const result = []
        const stack = []
        while (stack.length || node) {
            while (node && node) {
                stack.push(node)
                node = node.left
            }

            node = stack.pop()
            if (!node.left && !node.right) result.push(node.val)
            node = node.right
        }

        return result
    }

    return helper(root1).toString() == helper(root2).toString()
};
```
同一种解法，不同的写法
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 var leafSimilar = function(root1, root2) {
    function helper1(node) {
        const result = []
        const stack = []
        while (stack.length || node) {
            while (node && node) {
                stack.push(node)
                node = node.left
            }

            node = stack.pop()
            if (!node.left && !node.right) result.push(node.val)
            node = node.right
        }

        return result
    }
    
    function helper2(node, arr) {
        const result = []
        const stack = []
        let index = 0
        while (stack.length || node) {
            while (node && node) {
                stack.push(node)
                node = node.left
            }

            node = stack.pop()
            if (!node.left && !node.right && arr[index++] != node.val) return false
            node = node.right
        }

        return true
    }

    const arr = helper1(root1)
    return helper2(root2, arr)
};
```
