# [863. 二叉树中所有距离为 K 的结点](https://leetcode-cn.com/problems/all-nodes-distance-k-in-binary-tree/)
给定一个二叉树（具有根结点 root）， 一个目标结点 target ，和一个整数值 K 。

返回到目标结点 target 距离为 K 的所有结点的值的列表。 答案可以以任何顺序返回。

![](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/06/28/sketch0.png)

示例 1：
```
输入：root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, K = 2
输出：[7,4,1]
解释：
所求结点为与目标结点（值为 5）距离为 2 的结点，
值分别为 7，4，以及 1


注意，输入的 "root" 和 "target" 实际上是树上的结点。
上面的输入仅仅是对这些对象进行了序列化描述。
```

提示：

1. 给定的树是非空的。
2. 树上的每个结点都具有唯一的值 0 <= node.val <= 500 。
3. 目标结点 target 是树上的结点。
4. 0 <= K <= 1000.
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
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
    if (!root) return []
    let targetNode = null

    // 为每个节点添加一个指向父节点的引用
    // 同时找出 targetNode
    function dfs(node, parent) {
        if (!node) return
        if (node == target) targetNode = node
        node.parent = parent
        dfs(node.left, node)
        dfs(node.right, node)
    }

    dfs(root, null)

    // 用于保存遍历过的节点，防止重复搜索
    const paths = []
    const result = []

    // 向下搜索
    function downwardSearch(node, k) {
        if (!node || paths.includes(node)) return
        paths.push(node)
        if (k == 0) {
            result.push(node.val)
            return
        }

        downwardSearch(node.left, k - 1)
        downwardSearch(node.right, k - 1)
    }

    downwardSearch(targetNode, K)

    // 向上搜索
    while (targetNode && K) {
        targetNode = targetNode.parent
        downwardSearch(targetNode, --K)
    }

    return result
};
```
