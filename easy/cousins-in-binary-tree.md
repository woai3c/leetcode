# [993. 二叉树的堂兄弟节点](https://leetcode-cn.com/problems/cousins-in-binary-tree/)
在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。

如果二叉树的两个节点深度相同，但父节点不同，则它们是一对堂兄弟节点。

我们给出了具有唯一值的二叉树的根节点 root，以及树中两个不同节点的值 x 和 y。

只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true。否则，返回 false。

 

示例 1：

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/02/16/q1248-01.png)
```
输入：root = [1,2,3,4], x = 4, y = 3
输出：false
```
示例 2：

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/02/16/q1248-02.png)
```
输入：root = [1,2,3,null,4,null,5], x = 5, y = 4
输出：true
```
示例 3：

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/02/16/q1248-03.png)
```
输入：root = [1,2,3,null,4], x = 2, y = 3
输出：false
```

提示：

* 二叉树的节点数介于 2 到 100 之间。
* 每个节点的值都是唯一的、范围为 1 到 100 的整数。

## 解法
在遇到节点的值等于 x 或 y 时，将父节点和节点深度记录下来，遍历完后再进行比较。
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    if (!root) return false
    const treeNode = {}
    const deep = {}

    function _isCousins(node, parent, depth) {
        if (!node) return
        depth++
        if (node.val == x) {
            treeNode[x] = parent
            deep[x] = depth
        } else if (node.val == y) {
            treeNode[y] = parent
            deep[y] = depth
        }

        _isCousins(node.left, node, depth)
        _isCousins(node.right, node, depth)
    }

    _isCousins(root.left, root, 0)
    _isCousins(root.right, root, 0)

    return treeNode[x] != treeNode[y] && deep[x] == deep[y]
};

```
