# [99. 恢复二叉搜索树](https://leetcode-cn.com/problems/recover-binary-search-tree/)
二叉搜索树中的两个节点被错误地交换。

请在不改变其结构的情况下，恢复这棵树。

示例 1:
```
输入: [1,3,null,null,2]

   1
  /
 3
  \
   2

输出: [3,1,null,null,2]

   3
  /
 1
  \
   2
```
示例 2:
```
输入: [3,1,4,null,null,2]

  3
 / \
1   4
   /
  2

输出: [2,1,4,null,null,3]

  2
 / \
1   4
   /
  3
```
进阶:

* 使用 O(n) 空间复杂度的解法很容易实现。
* 你能想出一个只使用常数空间的解决方案吗？

## 解法
**第一种情况**，交换的节点在中序遍历下相邻。 原来顺序为 1324，需要将 23 交换。
```
  3
 / \
1   4
   /
  2
```
**第二种情况**，两个节点在中序遍历下不相邻。
```
   1
  /
 3
  \
   2
```
顺序为 321，交换后变成 123。

同时，由于中序遍历是升序，如果交换两个数。则交换后有如下规则：
* pre > cur，如果是第一次，则 pre 是需要交换的节点，因为它本应是在后面的较大数。
* pre > cur，如果是第二次，则 cur 是需要交换的节点，因为它本应是在前面的较小数。

如果 pre > cur 只出现了一次，则是上面说的第一种情况，两个需要交换的节点是相邻的。如果出现了两次，说明两个节点不是相邻的。

这两种情况具体的处理在细节上有些不同，请看代码。
### 解一
O(n) 空间复杂度
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    const arr = []

    function dfs(node) {
        if (!node) return
        dfs(node.left)
        arr.push(node)
        dfs(node.right)
    }


    dfs(root)

    let x, y
    for (let i = 1, len = arr.length; i < len; i++) {
        if (arr[i - 1].val > arr[i].val) {
            y = arr[i]
            if (!x) x = arr[i - 1]
        }
    }

    if (x && y) {
        const temp = x.val
        x.val = y.val
        y.val = temp
    }
};
```
### 解二
O(1) 空间复杂度
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let x
    let y
    let preNode = new TreeNode(-Infinity)

    function dfs(node) {
        if (!node) return
        dfs(node.left)

        if (preNode.val > node.val) {
            if (!x) x = preNode
            y = node
        }

        preNode = node
        dfs(node.right)
    }

    dfs(root)

    if (x && y) {
        const temp = x.val
        x.val = y.val
        y.val = temp
    }
};
```
