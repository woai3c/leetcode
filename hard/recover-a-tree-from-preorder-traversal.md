# [1028. 从先序遍历还原二叉树](https://leetcode-cn.com/problems/recover-a-tree-from-preorder-traversal/)
我们从二叉树的根节点 root 开始进行深度优先搜索。

在遍历中的每个节点处，我们输出 D 条短划线（其中 D 是该节点的深度），然后输出该节点的值。（如果节点的深度为 D，则其直接子节点的深度为 D + 1。根节点的深度为 0）。

如果节点只有一个子节点，那么保证该子节点为左子节点。

给出遍历输出 S，还原树并返回其根节点 root。


示例 1：

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/04/12/recover-a-tree-from-preorder-traversal.png)
```
输入："1-2--3--4-5--6--7"
输出：[1,2,5,3,4,6,7]
```
示例 2：

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/04/12/screen-shot-2019-04-10-at-114101-pm.png)
```
输入："1-2--3---4-5--6---7"
输出：[1,2,5,3,null,6,null,4,null,7]
```
示例 3：

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/04/12/screen-shot-2019-04-10-at-114955-pm.png)
```
输入："1-401--349---90--88"
输出：[1,401,null,349,88,90]
```

提示：

* 原始树中的节点数介于 1 和 1000 之间。
* 每个节点的值介于 1 和 10 ^ 9 之间。

## 解法
### 实现一
递归比较好理解
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
 var recoverFromPreorder = function(S) {
    let start = 0
    let count

    function dfs(deep) {
        count = 0
        // 缓存 start，如果节点的当前深度不对或 val 不存在时，用于恢复 start 的值
        const temp = start
        // read -
        while (S[start] == '-') {
            start++
            count++
        }

        // read val
        let val = ''
        while (S[start] && S[start] != '-') {
            val += S[start++]
        }
        
        if (!val || deep != count) {
            start = temp
            return null
        }

        const node = new TreeNode(val)
        node.left = dfs(deep + 1)
        node.right = dfs(deep + 1)
    
        return node
    }

    return dfs(0)
};
```
### 实现二
[官方题解](https://leetcode-cn.com/problems/recover-a-tree-from-preorder-traversal/solution/cong-xian-xu-bian-li-huan-yuan-er-cha-shu-by-leetc/)
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
 var recoverFromPreorder = function(S) {
    const stack = []
    const len = S.length
    let start = 0
    while (start < len) {
        let curLevel = 0
        while (S[start] == '-') {
            curLevel++
            start++
        }

        let val = ''
        while (S[start] && S[start] != '-') {
            val += S[start++]
        }

        const node = new TreeNode(val)
        if (!stack.length) {
            stack.push(node)
            continue
        }

        if (stack.length == curLevel) {
            stack[curLevel - 1].left = node
        } else {
            while (stack.length != curLevel) {
                stack.pop()
            }

            stack[curLevel - 1].right = node
        }

        stack.push(node)
    }

    return stack[0]
};
```
