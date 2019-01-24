# 供暖器
冬季已经来临。 你的任务是设计一个有固定加热半径的供暖器向所有房屋供暖。

现在，给出位于一条水平线上的房屋和供暖器的位置，找到可以覆盖所有房屋的最小加热半径。

所以，你的输入将会是房屋和供暖器的位置。你将输出供暖器的最小加热半径。

说明:

1. 给出的房屋和供暖器的数目是非负数且不会超过 25000。
2. 给出的房屋和供暖器的位置均是非负数且不会超过10^9。
3. 只要房屋位于供暖器的半径内(包括在边缘上)，它就可以得到供暖。
4. 所有供暖器都遵循你的半径标准，加热的半径也一样。

示例 1:
```
输入: [1,2,3],[2]
输出: 1
解释: 仅在位置2上有一个供暖器。如果我们将加热半径设为1，那么所有房屋就都能得到供暖。
```
示例 2:
```
输入: [1,2,3,4],[1,4]
输出: 1
解释: 在位置1, 4上有两个供暖器。我们需要将加热半径设为1，这样所有房屋就都能得到供暖。
```

## JavaScript实现
思路：查找离每间房屋最近的加热器，再比较每个房屋的加热器半径，取最大值
#### 实现1
```
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    let len1 = houses.length
    let len2 = heaters.length

    if (len1 == 1) {
        return 0
    }

    let max = 0
    let min
    for (let i = 0; i < len1; i++) {
        let house = houses[i]
        min = Math.abs(heaters[0] - house)
        for (let j = 1; j < len2; j++) {
            let temp = Math.abs(heaters[j] - house)
            min = min > temp? temp : min
        }
        max = max > min? max : min
    }

    return max
};
```

#### 实现2
```
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    houses.sort((a, b) => a - b)
    heaters.sort((a, b) => a - b)
    let i = 0, max = 0, len = heaters.length - 1
    
    for(let house of houses) {
        let temp = house * 2
        while(i < len && heaters[i] + heaters[i + 1] <= temp) {
            i++
        }
        max = Math.max(max, Math.abs(heaters[i] - house))
    }
    return max
};
```

#### 实现3
```
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    heaters.sort((a, b) => a - b)
    let left = 0
    let right = heaters.length - 1
    
    let max = 0
    
    for (let i = 0, len = houses.length; i < len; i++) {
        let house = houses[i]
        let start = left
        let end = right
        let mid
        let min

        while (start < end) {
            mid = Math.floor((end + start) / 2)
            if (heaters[mid] < house) {
                start = mid + 1
            } else if (heaters[mid] > house) {
                end = mid
            } else {
                min = 0
                break
            }
        }
        
        if (min === undefined) {
            if (start == end && start > 0) {
                start--
            } 
            min = Math.min(Math.abs(heaters[start] - house), Math.abs(heaters[end] - house))
        }
        max = Math.max(min, max)
    }

    return max
};
```
