# [117. 填充每个节点的下一个右侧节点指针 II](https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node-ii/)
给定一个二叉树
```c
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
```
填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

初始状态下，所有 next 指针都被设置为 NULL。

 

进阶：

* 你只能使用常量级额外空间。
* 使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。
 

示例：

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/02/15/117_sample.png)

```
输入：root = [1,2,3,4,5,null,7]
输出：[1,#,2,3,#,4,5,7,#]
解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。
```

提示：

* 树中的节点数小于 6000
* -100 <= node.val <= 100
## 解法
```js
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return null
    let cur = root
    // 外面是大循环，每次循环处理一层的节点
    while (cur) {
        // 每次在当前层时，将下一层的节点串联起来，用哨兵节点开头
        const sentry = new Node()
        let next = sentry
        // 里面是小循环，循环处理同一层级的节点
        while (cur) {
            if (cur.left) {
                next.next = cur.left
                next = next.next
            }

            if (cur.right) {
                next.next = cur.right
                next = next.next
            }

            cur = cur.next
        }
        
        // 同一层的节点处理完了，开始下一层
        cur = sentry.next
    }

    return root
};
```
