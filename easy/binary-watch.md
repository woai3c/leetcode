# [401. 二进制手表](https://leetcode-cn.com/problems/binary-watch/)
二进制手表顶部有 4 个 LED 代表 小时（0-11），底部的 6 个 LED 代表 分钟（0-59）。

每个 LED 代表一个 0 或 1，最低位在右侧。

![](https://upload.wikimedia.org/wikipedia/commons/8/8b/Binary_clock_samui_moon.jpg)


例如，上面的二进制手表读取 “3:25”。

给定一个非负整数 n 代表当前 LED 亮着的数量，返回所有可能的时间。

 

示例：
```
输入: n = 1
返回: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
```

提示：

* 输出的顺序没有要求。
* 小时不会以零开头，比如 “01:00” 是不允许的，应为 “1:00”。
* 分钟必须由两位数组成，可能会以零开头，比如 “10:2” 是无效的，应为 “10:02”。
* 超过表示范围（小时 0-11，分钟 0-59）的数据将会被舍弃，也就是说不会出现 "13:00", "0:61" 等时间。

## 解法
### 实现1
遍历每一个时间，得出时间包含 1 的个数是否和指定的 num 一样。
```js
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    const result = []
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 60; j++) {
            if (count(i) + count(j) == num) {
                const m = j < 10? '0' + j : j
                result.push(`${i}:${m}`)
            }
        }
    }

    return result
};

function count(n) {
    let count = 0
    while (n != 0) {
        // n & n - 1 将最低有效位的 1 置 0，相当于每运行一次就减少一个 1，从而算出数字中 1 的个数
        n &= n - 1
        count++
    }

    return count
}
```
### 实现2
递归回溯，用 10 bits 来表示小时和分钟，4 bits 表示小时，6 bits 表示分钟。
```js
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    const result = []
    dfs(0, num, 0, result)
    return result
};

function dfs(time, num, start, result) {
    const h = time >> 6
    const m = time & 0b111111
    if (h > 11 || m > 59) return
    if (num == 0) {
        result.push(`${h}:${m < 10? '0' + m : m}`)
    } else {
        // i 原来为 10，但其实不用遍历完 10 个数字
        // 假设 num 为 2，那索引 9 是不用遍历的，因为从索引 9 开始，那就只能点亮 1 个灯
        // 所以最少必须从索引 8 开始遍历，否则不能点亮两个灯
        // 同理，num 为 3，end 就为 7
        const end = 10 - num
        for (let i = start; i <= end; i++) {
            dfs(time | (1 << i), num - 1, i + 1, result)
        }
    }
}
```
