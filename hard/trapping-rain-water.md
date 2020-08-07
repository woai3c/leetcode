# [42. 接雨水](https://leetcode-cn.com/problems/trapping-rain-water/)
给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/rainwatertrap.png)

上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Marcos 贡献此图。

示例:
```
输入: [0,1,0,2,1,0,1,3,2,1,2,1]
输出: 6
```
## 解法
### 解一
1. 从左往右遍历，遇到黑色块的时候记作 start，值为 startVal，然后往右找第一个大于等于它的数，记作 end。
2. 将 start 和 end 之间的雨水收集起来，每个点雨水的计算方法为 `startVal - height[i]`。
3. 下一轮接着从 end 开始循环。

不过这个方法有个弊端，假如 startVal 的值是剩余数组里的最大值，那会出现这种情况：一直找到数组结束都没找到大于等于它的数。

那这一段距离的雨水就没法收集了，如果发生这种情况，我们可以对这一段数组进行倒序遍历，一直遍历到 startVal 对应的索引为止。
```js
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    return leftToRight(height)
};

function leftToRight(height) {
    const len = height.length
    let result = 0
    let i = 0
    while (i < len) {
        if (!height[i]) {
            i++
            continue
        }

        let startVal = height[i]
        let next = i + 1
        while (height[next] < startVal && next < len) {
            next++
        }

        // 没有找到大于等于 startVal 的值，这一段需求倒序遍历
        if (next == len) {
            result += rightToLeft(height.slice(i))
            return result
        }

        // 收集雨水
        let j = i + 1
        while (j < next) {
            result += startVal - height[j]
            j++
        }

        i = next
    }

    return result
}

function rightToLeft(height) {
    let result = 0
    let i = height.length - 1
    while (i >= 0) {
        if (!height[i]) {
            i--
            continue
        }

        let startVal = height[i]
        let next = i - 1
        while (height[next] < startVal && next >= 0) {
            next--
        }


        let j = i - 1
        while (j > next) {
            result += startVal - height[j]
            j--
        }

        i = next
    }

    return result
}
```
只想出这一种解法，后面的解法全是参考别人所做的。
### 解二——暴力法
暴力法，每一点的雨水量取决于它左右两边的最大高度中较小的那一个。

所以我们可以采用暴力法，每次遍历到 i 时，获取它左右两边的最大高度，然后取较小的那一个减去当前值。但如果这个较小的高度小于当前值，则不处理。
```js
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result = 0
    const len = height.length
    for (let i = 1; i < len - 1; i++) {
        let leftMax = 0
        let rightMax = 0

        for (let j = 0; j < i; j++) {
            if (height[j] > leftMax) leftMax = height[j]
        }

        for (let j = i + 1; j < len; j++) {
            if (height[j] > rightMax) rightMax = height[j]
        }

        const minMax = Math.min(leftMax, rightMax)
        if (minMax > height[i]) result += minMax - height[i]
    }

    return result
};

```
### 解三——动态规则
解二中每次遍历到 i 时，都得重新获取左右两边的最大高度。

我们可以对此做一下优化，缓存已经获取到的最大高度。用 left 和 right 来缓存每一个点左右两边的最大高度。left[i] 代表 i 左边的最大高度，right[i] 代表 i 右边的最大高度。

我们又可以推出，i 的左边最大高度为 Math.max(left[i - 1], height[i - 1])，即 left[i] = Math.max(height[i - 1], left[i - 1])，右边同理。
```js
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const len = height.length
    const left = new Array(len)
    const right = new Array(len)
    let result = 0
    left[0] = 0
    right[len - 1] = 0
    for (let i = 1; i < len - 1; i++) {
        left[i] = Math.max(height[i - 1], left[i - 1])
        right[len - 1 - i] = Math.max(height[len - i], right[len - i])
    }

    for (let i = 1; i < len - 1; i++) {
        const minMax = Math.min(left[i], right[i])
        if (minMax > height[i]) result += minMax - height[i]
    }

    return result
};
```
### 解四——双指针
引用[官方题解](https://leetcode-cn.com/problems/trapping-rain-water/solution/jie-yu-shui-by-leetcode/)下面，网友 Lucien 的解答：
1. 定理一：在某个位置i处，它能存的水，取决于它左右两边的最大值中较小的一个。
2. 定理二：当我们从左往右处理到left下标时，左边的最大值left_max对它而言是可信的，但right_max对它而言是不可信的。
（见下图，由于中间状况未知，对于left下标而言，right_max未必就是它右边最大的值）
3. 定理三：当我们从右往左处理到right下标时，右边的最大值right_max对它而言是可信的，但left_max对它而言是不可信的。
```
                                   right_max
 left_max                             __
   __                                |  |
  |  |__   __??????????????????????  |  |
__|     |__|                       __|  |__
        left                      right
```
对于位置left而言，它左边最大值一定是left_max，右边最大值“大于等于”right_max，这时候，如果left_max<right_max成立，那么它就知道自己能存多少水了。
无论右边将来会不会出现更大的right_max，都不影响这个结果。
```js
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let leftMax = 0
    let rightMax = 0
    let left = 0
    let right = height.length - 1
    let result = 0
    while (left <= right) {
        if (leftMax < rightMax) {
            if (height[left] < leftMax) {
                result += leftMax - height[left]
            } else {
                leftMax = height[left]
            }

            left++
        } else {
            if (height[right] < rightMax) {
                result += rightMax - height[right]
            } else {
                rightMax = height[right]
            }

            right--
        }
    }

    return result
};
```
