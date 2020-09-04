# [901. 股票价格跨度](https://leetcode-cn.com/problems/online-stock-span/)
编写一个 StockSpanner 类，它收集某些股票的每日报价，并返回该股票当日价格的跨度。

今天股票价格的跨度被定义为股票价格小于或等于今天价格的最大连续日数（从今天开始往回数，包括今天）。

例如，如果未来7天股票的价格是 [100, 80, 60, 70, 60, 75, 85]，那么股票跨度将是 [1, 1, 1, 2, 1, 4, 6]。

 

示例：
```
输入：["StockSpanner","next","next","next","next","next","next","next"], [[],[100],[80],[60],[70],[60],[75],[85]]
输出：[null,1,1,1,2,1,4,6]
解释：
首先，初始化 S = StockSpanner()，然后：
S.next(100) 被调用并返回 1，
S.next(80) 被调用并返回 1，
S.next(60) 被调用并返回 1，
S.next(70) 被调用并返回 2，
S.next(60) 被调用并返回 1，
S.next(75) 被调用并返回 4，
S.next(85) 被调用并返回 6。

注意 (例如) S.next(75) 返回 4，因为截至今天的最后 4 个价格
(包括今天的价格 75) 小于或等于今天的价格。
```

提示：

* 调用 StockSpanner.next(int price) 时，将有 1 <= price <= 10^5。
* 每个测试用例最多可以调用  10000 次 StockSpanner.next。
* 在所有测试用例中，最多调用 150000 次 StockSpanner.next。
* 此问题的总时间限制减少了 50%。

## 解法
### 解一
```js
var StockSpanner = function() {
    this.prices = []
    this.preSpan = 1
    this.prePrice = Infinity
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    const prices = this.prices
    const prePrice = this.prePrice
    prices.push(price)
    this.prePrice = price
    // 如果今日报价小于上一日，跨度为 1
    if (price < prePrice) {
        this.preSpan = 1
        return 1
    }

    // 如果大于等于上一日报价，则可以直接在上一个数的跨度上继续往前遍历
    let span = this.preSpan + 1
    for (let i = prices.length - span - 1; i >= 0; i--) {
        if (prices[i] <= price) {
            span++
        } else {
            break
        }
    }
    
    this.preSpan = span
    return span
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
```
### 解二
[股票价格跨度--单调栈](https://leetcode-cn.com/problems/online-stock-span/solution/gu-piao-jie-ge-kua-du-by-leetcode/)
```js

var StockSpanner = function() {
    this.spans = []
    this.stack = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let span = 1
    const spans = this.spans
    const stack = this.stack
    while (stack.length && stack[stack.length - 1] <= price) {
        stack.pop()
        span += spans.pop()
    }

    stack.push(price)
    spans.push(span)
    return span
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
```
