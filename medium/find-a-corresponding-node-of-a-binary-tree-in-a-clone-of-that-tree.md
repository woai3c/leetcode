# [1379. 找出克隆二叉树中的相同节点](https://leetcode-cn.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/)

给你两棵二叉树，原始树 original 和克隆树 cloned，以及一个位于原始树 original 中的目标节点 target。

其中，克隆树 cloned 是原始树 original 的一个 副本 。

请找出在树 cloned 中，与 target 相同 的节点，并返回对该节点的引用（在 C/C++ 等有指针的语言中返回 节点指针，其他语言返回节点本身）。

 

注意：

* 你 不能 对两棵二叉树，以及 target 节点进行更改。
* 只能 返回对克隆树 cloned 中已有的节点的引用。

**进阶**：如果树中允许出现值相同的节点，你将如何解答？


示例 1:

![](https://assets.leetcode.com/uploads/2020/02/21/e1.png)

```
输入: tree = [7,4,3,null,null,6,19], target = 3
输出: 3
解释: 上图画出了树 original 和 cloned。target 节点在树 original 中，用绿色标记。答案是树 cloned 中的黄颜色的节点（其他示例类似）。
```
示例 2:

![](https://assets.leetcode.com/uploads/2020/02/21/e2.png)

```
输入: tree = [7], target =  7
输出: 7
```
示例 3:

![](https://assets.leetcode.com/uploads/2020/02/21/e3.png)

```
输入: tree = [8,null,6,null,5,null,4,null,3,null,2,null,1], target = 4
输出: 4
```
示例 4:

![](https://assets.leetcode.com/uploads/2020/02/21/e4.png)

```
输入: tree = [1,2,3,4,5,6,7,8,9,10], target = 5
输出: 5
```
示例 5:

![](https://assets.leetcode.com/uploads/2020/02/21/e5.png)

```
输入: tree = [1,2,null,3], target = 2
输出: 2
```

提示：

* 树中节点的数量范围为 [1, 10^4] 。
* 同一棵树中，没有值相同的节点。
* target 节点是树 original 中的一个节点，并且不会是 null 。

## 解法
由于进阶要求会有相同值的节点，所以可以加一个 path 来判断是否相等。

遍历原始树和克隆树各一次，并且记录 path。path 初始为 0，每遍历一次节点时 path 加 1。

如果两棵树中 target 对应的节点在同一处，path 必然相等。
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

 var getTargetCopy = function(original, cloned, target) {
    function findNode(node, target, path) {
        if (!node) return [null, path]
        path++
        if (node.val == target.val) return [node, path]
        const left = findNode(node.left, target, path)
        const right = findNode(node.right, target, path)
        
        return left[0]? left : right
    }

    const ori = findNode(original, target, 0)
    const clo = findNode(cloned, target, 0)

    if (ori[0].val == clo[0].val && ori[1] == clo[1]) return clo[0]
    return null
};
```
