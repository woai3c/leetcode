# [894. 所有可能的满二叉树](https://leetcode-cn.com/problems/all-possible-full-binary-trees/)

满二叉树是一类二叉树，其中每个结点恰好有 0 或 2 个子结点。

返回包含 N 个结点的所有可能满二叉树的列表。 答案的每个元素都是一个可能树的根结点。

答案中每个树的每个结点都必须有 node.val=0。

你可以按任何顺序返回树的最终列表。

示例：
```
输入：7
输出：[[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]
解释：
```
![](https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/08/24/fivetrees.png)

提示：

* 1 <= N <= 20

## 解法
这道题和 [95. 不同的二叉搜索树 II](https://github.com/woai3c/leetcode/blob/master/medium/unique-binary-search-trees-ii.md) 解法有点像。

整颗树的节点数为 N，假设左子树的节点数为 x(0 <= x < N)，那右子树的节点数则为 N - x - 1。同时，满二叉树每一颗子树都是满二叉树（或为空）。

所以可以递归地对其进行求解：
1. 分别求出当前节点左右子树的满二叉树的组合，遍历左右子树，取它们的每一种组合和当前节点结合，生成一棵满二叉树。
2. 递归对其左右子树进行求解，直到只有一个节点时，直接返回这个节点。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(N) {
    // 缓存，对计算过的节点数可以不用重新计算
    const memory = new Array(N + 1)

    function _allPossibleFBT(n) {
        const result = []
        if (n == 1) {
            result.push(new TreeNode(0))
        } else if (n % 2 == 1) { // 满二叉树的节点数为奇数个节点，当 n 为偶数时跳过
            for (let x = 0; x < n; x++) {
                const y = n - x - 1
                const rights = _allPossibleFBT(y)
                for (const left of _allPossibleFBT(x)) {
                    for (const right of rights) {
                        const node = new TreeNode(0)
                        node.left = left
                        node.right = right
                        result.push(node)
                    }
                }
            }
        }

        memory[n] = result
        return result
    }

    _allPossibleFBT(N)
    return memory[N]
};
```
