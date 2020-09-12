# [623. 在二叉树中增加一行](https://leetcode-cn.com/problems/add-one-row-to-tree/)
给定一个二叉树，根节点为第1层，深度为 1。在其第 d 层追加一行值为 v 的节点。

添加规则：给定一个深度值 d （正整数），针对深度为 d-1 层的每一非空节点 N，为 N 创建两个值为 v 的左子树和右子树。

将 N 原先的左子树，连接为新节点 v 的左子树；将 N 原先的右子树，连接为新节点 v 的右子树。

如果 d 的值为 1，深度 d - 1 不存在，则创建一个新的根节点 v，原先的整棵树将作为 v 的左子树。

示例 1:
```
输入: 
二叉树如下所示:
       4
     /   \
    2     6
   / \   / 
  3   1 5   

v = 1

d = 2

输出: 
       4
      / \
     1   1
    /     \
   2       6
  / \     / 
 3   1   5   
```
示例 2:
```
输入: 
二叉树如下所示:
      4
     /   
    2    
   / \   
  3   1    

v = 1

d = 3

输出: 
      4
     /   
    2
   / \    
  1   1
 /     \  
3       1
```
注意:

* 输入的深度值 d 的范围是：[1，二叉树最大深度 + 1]。
* 输入的二叉树至少有一个节点。

## 解法
层序遍历
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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
    if (!root) return null
    if (d == 1) {
        const node = new TreeNode(v)
        node.left = root
        return node
    }

    const queue = [root]
    let cur = 0
    while (queue.length) {
        cur++
        let len = queue.length
        while (len--) {
            const node = queue.shift()
            if (cur == d - 1) {
                const left = node.left
                const right = node.right
                const v1 = new TreeNode(v)
                const v2 = new TreeNode(v)
                node.left = v1
                node.right = v2
                v1.left = left
                v2.right = right
            } else {
                if (node.left) queue.push(node.left)
                if (node.right) queue.push(node.right)
            }
        }

        if (cur == d - 1) break
    }

    return root
};
```
