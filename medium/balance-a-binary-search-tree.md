# [1382. 将二叉搜索树变平衡](https://leetcode-cn.com/problems/balance-a-binary-search-tree/)
给你一棵二叉搜索树，请你返回一棵 平衡后 的二叉搜索树，新生成的树应该与原来的树有着相同的节点值。

如果一棵二叉搜索树中，每个节点的两棵子树高度差不超过 1 ，我们就称这棵二叉搜索树是 平衡的 。

如果有多种构造方法，请你返回任意一种。

示例：

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/03/15/1515_ex1.png)
![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/03/15/1515_ex1_out.png)

```
输入：root = [1,null,2,null,3,null,4,null,null]
输出：[2,1,3,null,null,null,4]
解释：这不是唯一的正确答案，[3,1,4,null,2,null,null] 也是一个可行的构造方案。
```

提示：

* 树节点的数目在 1 到 10^4 之间。
* 树节点的值互不相同，且在 1 到 10^5 之间。
## 解法
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
var balanceBST = function(root) {
    const arr = []
    const queue = []
    let node = root
    while (queue.length || node) {
        while (node) {
            queue.push(node)
            node = node.left
        }

        node = queue.pop()
        arr.push(node.val)
        node = node.right
    }

    return helper(0, arr.length - 1, arr)
};

function helper(start, end, arr) {
    if (start > end) return null
    const mid = start + ~~((end - start) / 2)
    const node = new TreeNode(arr[mid])
    node.left = helper(start, mid - 1, arr)
    node.right = helper(mid + 1, end, arr)
    return node
}
```
