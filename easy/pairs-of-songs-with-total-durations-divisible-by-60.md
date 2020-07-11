# [1010. 总持续时间可被 60 整除的歌曲](https://leetcode-cn.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/)
在歌曲列表中，第 i 首歌曲的持续时间为 time[i] 秒。

返回其总持续时间（以秒为单位）可被 60 整除的歌曲对的数量。形式上，我们希望索引的数字 i 和 j 满足  i < j 且有 (time[i] + time[j]) % 60 == 0。

示例 1：
```
输入：[30,20,150,100,40]
输出：3
解释：这三对的总持续时间可被 60 整数：
(time[0] = 30, time[2] = 150): 总持续时间 180
(time[1] = 20, time[3] = 100): 总持续时间 120
(time[1] = 20, time[4] = 40): 总持续时间 60
```
示例 2：
```
输入：[60,60,60]
输出：3
解释：所有三对的总持续时间都是 120，可以被 60 整数。
```
提示：

* 1 <= time.length <= 60000
* 1 <= time[i] <= 500

## 解法
有两种解法，一种暴力两次循环，太简单不写了。

还有一种是利用数组建立一个 hash 表。由于对 60 取模会产生 60 个余数，所以这个 hash 数组长度为 60，所有值默认为 0。
循环遍历时，用 60 减去当前值，得到差值 diff，然后查看 hash[diff] 是否有值，如果有值就把这个值加上，代表有多少个数和当前值相加等于 0。
然后再把当前值添加到 hash 数组 `hash[remainder]++`。
```js
/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    const hash = new Array(60).fill(0)
    let result = 0
    for (let i = 0, len = time.length; i < len; i++) {
        const remainder = time[i] % 60
        const diff = remainder? 60 - remainder : 0
        result += hash[diff]
        hash[remainder]++
    }

    return result
};
```
