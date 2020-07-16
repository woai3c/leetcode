# [1395. 统计作战单位数](https://leetcode-cn.com/problems/count-number-of-teams/)
n 名士兵站成一排。每个士兵都有一个 独一无二 的评分 rating 。

每 3 个士兵可以组成一个作战单位，分组规则如下：

从队伍中选出下标分别为 i、j、k 的 3 名士兵，他们的评分分别为 rating[i]、rating[j]、rating[k]
作战单位需满足： rating[i] < rating[j] < rating[k] 或者 rating[i] > rating[j] > rating[k] ，其中  0 <= i < j < k < n
请你返回按上述条件可以组建的作战单位数量。每个士兵都可以是多个作战单位的一部分。

示例 1：
```
输入：rating = [2,5,3,4,1]
输出：3
解释：我们可以组建三个作战单位 (2,3,4)、(5,4,1)、(5,3,1) 。
```
示例 2：
```
输入：rating = [2,1,3]
输出：0
解释：根据题目条件，我们无法组建作战单位。
```
示例 3：
```
输入：rating = [1,2,3,4]
输出：4
```
提示：

* n == rating.length
* 1 <= n <= 200
* 1 <= rating[i] <= 10^5

## 解法
### 实现一
暴力法，三次循环
```js
/**
 * @param {number[]} rating
 * @return {number}
 */
 var numTeams = function(rating) {
    let result = 0
    const len = rating.length
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = j + 1; k < len; k++) {
                if (rating[i] > rating[j] && rating[j] > rating[k]) result++
                if (rating[i] < rating[j] && rating[j] < rating[k]) result++
            }
        }
    }

    return result
};
```

### 实现二
[官方题解](https://leetcode-cn.com/problems/count-number-of-teams/solution/tong-ji-zuo-zhan-dan-wei-shu-by-leetcode-solution/)

找出三元组 `i,j,k` 中的 j。这样就有四种情况：
1. 在它左边有大于它的数称为 imore，小于它的数称为 iless。
2. 在它右边大于它的数称为 kmore，小于它的数称为 kless。

其中 `iless,j,kmore` `imore,j,kless` 都是合法的三元组。利用此特性得出解法如下：
```js
/**
 * @param {number[]} rating
 * @return {number}
 */
 var numTeams = function(rating) {
    const len = rating.length
    let result = 0

    for (let j = 1, l = len - 1; j < l; j++) {
        let iless = 0
        let imore = 0
        let kless = 0
        let kmore = 0

        for (let i = 0; i < j; i++) {
            if (rating[i] > rating[j]) {
                imore++
            } else {
                iless++
            }
        }

        for (let k = j + 1; k < len; k++) {
            if (rating[k] > rating[j]) {
                kmore++
            } else {
                kless++
            }
        }

        result += iless * kmore + imore * kless
    }

    return result
};
```
