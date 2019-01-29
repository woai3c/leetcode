# 卡牌分组
给定一副牌，每张牌上都写着一个整数。

此时，你需要选定一个数字 `X`，使我们可以将整副牌按下述规则分成 1 组或更多组：

* 每组都有 X 张牌。
* 组内所有的牌上都写着相同的整数。

仅当你可选的 `X >= 2` 时返回 `true`。

 

示例 1：
```
输入：[1,2,3,4,4,3,2,1]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
```
示例 2：
```
输入：[1,1,1,2,2,2,3,3]
输出：false
解释：没有满足要求的分组。
```
示例 3：
```
输入：[1]
输出：false
解释：没有满足要求的分组。
```
示例 4：
```
输入：[1,1]
输出：true
解释：可行的分组是 [1,1]
```
示例 5：
```
输入：[1,1,2,2,2,2]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[2,2]
```
提示：

1. `1 <= deck.length <= 10000`
2. `0 <= deck[i] < 10000`

## 实现
#### 实现1
```
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let len = deck.length
    if (len < 2) {
        return false
    } else if (len == 2) {
        return deck[0] == deck[1]
    }
    
    deck.sort()
    let x = 2
    for (let l = len / 2; x <= l; x++) {
        let groups = len / x
        if (groups % 1 == 0 && subGroup(deck, groups, x)) {
            return true
        }
    }
    
    return false
};

function subGroup(deck, groups, x) {
    let start = 0
    let end = x
    
    for (let j = 0; j < groups; j++) {
        let set = new Set(deck.slice(start, end))
        if (set.size != 1) {
            return false
        }
        start = end
        end = end + x
    }
    
    return true
}
```

#### 实现2
```
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    const obj = {}
    for (let i = 0, len = deck.length; i < len; i++) {
        let key = deck[i]
        if (obj[key] !== undefined) {
            obj[key]++
        } else {
            obj[key] = 1
        }
    }
    
    const vals = Object.values(obj)
    const min = Math.min(...vals) 
    if (min < 2) {
        return false
    }

    let len = vals.length
    for (let i = 2; i <= min; i++) {
        let flag = true
        for (let j = 0; j < len; j++) {
            if (vals[j] % i != 0) {
                flag = false
                break
            }
        }
        
        if (flag) {
            return true
        }
    }
    
    return false
};
```
