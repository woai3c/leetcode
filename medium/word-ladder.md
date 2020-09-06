# [127. 单词接龙](https://leetcode-cn.com/problems/word-ladder/)
给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord 的最短转换序列的长度。转换需遵循如下规则：

1. 每次转换只能改变一个字母。
2. 转换过程中的中间单词必须是字典中的单词。

说明:

* 如果不存在这样的转换序列，返回 0。
* 所有单词具有相同的长度。
* 所有单词只由小写字母组成。
* 字典中不存在重复的单词。
* 你可以假设 beginWord 和 endWord 是非空的，且二者不相同。

示例 1:
```
输入:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

输出: 5

解释: 一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog",
     返回它的长度 5。
```
示例 2:
```
输入:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

输出: 0

解释: endWord "cog" 不在字典中，所以无法进行转换。
```
## 解法
### 解一
BFS

用两个 for 循环，每次改变当前单词的一个字符。

然后看这个改变后的单词是否在 wordList 中。

下次循环再次从这个已改变过的单词入手，看改变两个字符后的单词是否存在 wordList 中。

依次类推，一直到找到答案为止。
```js
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0
    const hash = {}
    for (let i = 0, len = wordList.length; i < len; i++) {
        hash[wordList[i]] = true
    }

    const queue = [{ word: beginWord, step: 1 }]
    const len = beginWord.length
    let step = 1
    while (queue.length) {
        let { word, step } = queue.shift()
        if (word == endWord) return step

        for (let i = 0; i < len; i++) {
            const c = word[i].charCodeAt()
            const before = word.slice(0, i)
            const after = word.slice(i + 1)
            for (let j = 97; j <= 122; j++) {
                if (c == j) continue
                const newWord = before + String.fromCharCode(j) + after
                // 原来是直接使用 splice 删除数组的，但是耗时太多
                // 现在换成用 hash 存储 wordList 的单词
                // 删除快很多，相当于用空间换时间
                // 耗时从 8712 ms 变成了 740 ms，消耗内存从 45.1M 提高到 90N
                if (hash[newWord]) {
                    queue.push({ word: newWord, step: step + 1 })
                    delete hash[newWord]
                }
            }
        }
    }

    return 0
};
```
### 解二
[官方题解](https://leetcode-cn.com/problems/word-ladder/solution/dan-ci-jie-long-by-leetcode/) 双向 BFS
```js
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0
    let startSet = new Set([beginWord])
    let endSet = new Set([endWord])
    wordList = new Set(wordList)

    const len = beginWord.length
    let step = 1
    while (startSet.size && endSet.size) {
        // 每次从较小的集合中开始 BFS 搜索
        if (startSet.size > endSet.size) {
            const temp = startSet
            startSet = endSet
            endSet = temp
        }

        const newSet = new Set()
        for (const word of startSet) {
            for (let i = 0; i < len; i++) {
                const c = word[i].charCodeAt()
                const before = word.slice(0, i)
                const after = word.slice(i + 1)
                for (let j = 97; j <= 122; j++) {
                    if (c == j) continue
                    const newWord = before + String.fromCharCode(j) + after
                    if (endSet.has(newWord)) return step + 1

                    if (wordList.has(newWord)) {
                        newSet.add(newWord)
                        wordList.delete(newWord)
                    }
                }
            }
        }

        startSet = newSet
        step++
    }

    return 0
};
```
