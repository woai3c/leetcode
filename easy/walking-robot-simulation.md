# 模拟行走机器人

机器人在一个无限大小的网格上行走，从点 (0, 0) 处开始出发，面向北方。该机器人可以接收以下三种类型的命令：

* -2：向左转 90 度
* -1：向右转 90 度
* 1 <= x <= 9：向前移动 x 个单位长度
在网格上有一些格子被视为障碍物。

第 i 个障碍物位于网格点  (obstacles[i][0], obstacles[i][1])

如果机器人试图走到障碍物上方，那么它将停留在障碍物的前一个网格方块上，但仍然可以继续该路线的其余部分。

返回从原点到机器人的最大欧式距离的平方。

 

示例 1：
```
输入: commands = [4,-1,3], obstacles = []
输出: 25
解释: 机器人将会到达 (3, 4)
```
示例 2：
```
输入: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
输出: 65
解释: 机器人在左转走到 (1, 8) 之前将被困在 (1, 4) 处
```
 
提示：

1. 0 <= commands.length <= 10000
2. 0 <= obstacles.length <= 10000
3. -30000 <= obstacle[i][0] <= 30000
4. -30000 <= obstacle[i][1] <= 30000

答案保证小于 2 ^ 31

## JavaScript实现
```
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    const dx = [0, 1, 0, -1]
    const dy = [1, 0, -1, 0]
    // x y 当前坐标 
    // di 方向 上右下左 0 1 2 3
    let x = y = di = 0
    // 存放转化后的障碍物
    const s = new Set()
    let result = 0
    
    // 将 (x, y) 转化为 (x+30000) * (2^16) + (y+30000)
    for (let i = 0, len = obstacles.length; i < len; i++) {
        let temp = obstacles[i]
        s.add(((temp[0] + 30000) << 16) + temp[1] + 30000)
    }
    
    for (let i = 0, len = commands.length; i < len; i++) {
        let com = commands[i]
        switch (com) {
            case -1:
                di = (di + 1) % 4
                break
            case -2:
                di = (di + 3) % 4
                break
            default:
                let nx, ny
                for (let k = 0; k < com; k++) {
                    nx = x + dx[di]
                    ny = y + dy[di]
                    // 未包含障碍时
                    if (!s.has(((nx + 30000) << 16) + ny + 30000)) {
                        x = nx
                        y = ny
                        result = Math.max(result, x * x + y * y)
                    } else {
                        break
                    }
                }
        }
        
    }
    
    return result
};
```

## C实现
对C不熟 实现和JS差不多 但是很慢 没搞懂 建议看JS实现
```
int robotSim(int* commands, int commandsSize, int** obstacles, int obstaclesRowSize, int *obstaclesColSizes) {
    int dx[4] = {0, 1, 0, -1};
    int dy[4] = {1, 0, -1, 0};
    int x, y, di, result;
    x = y = di = result = 0;
    int* s = (int*) malloc(sizeof(int) * obstaclesRowSize);
        
    // 将 (x, y) 转化为 (x+30000) * (2^16) + (y+30000)
    for (int i = 0; i < obstaclesRowSize; i++) {
        s[i] = ((obstacles[i][0] + 30000) << 16) + obstacles[i][1] + 30000;
    }
    
    for (int i = 0; i < commandsSize; i++) {
        int com = commands[i];
        switch (com) {
            case -1:
                di = (di + 1) % 4;
                break;
            case -2:
                di = (di + 3) % 4;
                break;
            default:
                for (int k = 0; k < com; k++) {
                    int nx = x + dx[di];
                    int ny = y + dy[di];
                    int temp = ((nx + 30000) << 16) + ny + 30000;
                    int flag = 0;
                    for (int j = 0; j < obstaclesRowSize; j++) {
                        if (s[j] == temp) {
                            flag = 1;
                        } 
                    }
                    
                    if (!flag) {
                        x = nx;
                        y = ny;
                        int square = x * x + y * y;
                        result = result > square? result : square;
                    } else {
                        break;
                    }                    
                }
        }
        
    }
    
    return result;
}
```
