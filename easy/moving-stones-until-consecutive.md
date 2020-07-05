# [1033. 移动石子直到连续](https://leetcode-cn.com/problems/moving-stones-until-consecutive/)
三枚石子放置在数轴上，位置分别为 a，b，c。

每一回合，我们假设这三枚石子当前分别位于位置 x, y, z 且 x < y < z。从位置 x 或者是位置 z 拿起一枚石子，并将该石子移动到某一整数位置 k 处，其中 x < k < z 且 k != y。

当你无法进行任何移动时，即，这些石子的位置连续时，游戏结束。

要使游戏结束，你可以执行的最小和最大移动次数分别是多少？ 以长度为 2 的数组形式返回答案：answer = [minimum_moves, maximum_moves]


示例 1：
```
输入：a = 1, b = 2, c = 5
输出：[1, 2]
解释：将石子从 5 移动到 4 再移动到 3，或者我们可以直接将石子移动到 3。
```
示例 2：
```
输入：a = 4, b = 3, c = 2
输出：[0, 0]
解释：我们无法进行任何移动。
```
提示：

* 1 <= a <= 100
* 1 <= b <= 100
* 1 <= c <= 100
* a != b, b != c, c != a

## 解法
先对 a b c 按升序排序。

最小值只有三种情况：0、1、2。
1. 两边差值都为 1 时，最小值为 0。例如 1 2 3。
2. 两边差值只要有一个为 1 或 2 时，最小值为 1。例如 1 3 5。
3. 当两边差值都大于 2 时，最小值为 2。例如 1 100 1000。

最大值以中间的值为中心，计算两边的值到要走到中间的步数，将它们相加即可。
```js
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
 var numMovesStones = function(a, b, c) {
    let x = Math.min(a, b, c)
    let z = Math.max(a, b, c)
    let y = a + b + c - x - z
    return [getMinStep(x, y, z), getMaxStep(x, y, z)]
};

function getMinStep(a, b, c) {
    const left = Math.abs(a - b)
    const right = Math.abs(c - b)
    if (left == 1 && right == 1) return 0
    if (left == 1 || right == 1 || left == 2 || right == 2) return 1
    return 2
}

function getMaxStep(a, b, c) {
    let result = 0
    if (Math.abs(a - b) != 1) {
        result += Math.abs(a - b) - 1
    }

    if (Math.abs(c - b) != 1) {
        result += Math.abs(c - b) - 1
    }

    return result
}
```
