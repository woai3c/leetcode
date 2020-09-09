# [429. N叉树的层序遍历](https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/)
给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)。

例如，给定一个 3叉树 :

 
![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/narytreeexample.png)


 

返回其层序遍历:
```
[
     [1],
     [3,2,4],
     [5,6]
]
```

说明:

* 树的深度不会超过 1000。
* 树的节点总数不会超过 5000。
## 解法
将二叉树层序遍历稍微改一下就 OK 了。
```js
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []
    const result = []
    const queue = [root]
    while (queue.length) {
        let len = queue.length
        const arr = []
        while (len--) {
            const node = queue.shift()
            arr.push(node.val)
            const children = node.children
            for (let i = 0; i < children.length; i++) {
                queue.push(children[i])
            }
        }

        result.push(arr)
    }

    return result
};
```
