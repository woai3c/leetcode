# [30. 串联所有单词的子串](https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/)
给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。

 

示例 1：
```
输入：
  s = "barfoothefoobarman",
  words = ["foo","bar"]
输出：[0,9]
解释：
从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
输出的顺序不重要, [9,0] 也是有效答案。
```
示例 2：
```
输入：
  s = "wordgoodgoodgoodbestword",
  words = ["word","good","best","word"]
输出：[]
```
## 解法
### 解一
```js
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
 var findSubstring = function(s, words) {
    if (!s || !words.length) return []
    const hash = {}
    for (const word of words) {
        if (hash[word]) {
            hash[word]++
        } else {
            hash[word] = 1
        }
    }

    // 匹配字符的长度
    const cutdownLen = words[0].length
    const matchLen = words.length * cutdownLen
    const result = []
    for (let i = 0, len = s.length - matchLen; i <= len; i++) {
        // 每次截取一断字符串，看是否和 hash 中存储的单词及单词数相同
        if (isMatch(s.slice(i, i + matchLen), hash, cutdownLen)) {
            result.push(i)
        }
    }

    return result
};

function isMatch(str, hash, cutdownLen) {
    const h = { ...hash }
    const len = str.length
    let i = 0
    while (i < len) {
        const s = str.slice(i, i + cutdownLen)
        if (!h[s]) return false
        h[s]--
        i += cutdownLen
    }

    return true
}
```
### 解二
滑动窗口，两个哈希表
```js
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
 var findSubstring = function(s, words) {
    if (!s || !words.length) return []
    const hash = {}
    // 用两个哈希表来比较匹配的字符串
    // 第一个哈希表存储 words 中的单词
    // 第二个哈希表表存储动态添加的单词
    for (const word of words) {
        if (hash[word]) {
            hash[word]++
        } else {
            hash[word] = 1
        }
    }

    // 匹配字符的长度
    const cutdownLen = words[0].length
    const num = words.length
    const matchLen = num * cutdownLen
    const result = []
    for (let i = 0; i < cutdownLen; i++) {
        let hash2 = {}
        let count = 0 // 符合条件的单词的个数
        let strLen = 0
        for (let j = i, len = s.length - matchLen; j <= len; j += cutdownLen) {
            while (j + strLen < j + matchLen) {
                const word = s.slice(j + strLen, j + strLen + cutdownLen)
                // 单词存在于 hash 中才有比较的价值
                if (hash[word]) {
                    if (hash2[word]) {
                        hash2[word]++
                    } else {
                        hash2[word] = 1
                    }

                    // 比hash中的值少才算符合条件
                    // 例如要求 bar 出现的次数为 1
                    // hash2 中 bar 出现的次数为 2 就不符合要求
                    if (hash[word] >= hash2[word]) {
                        count++
                    } else {
                        break
                    }

                    strLen += cutdownLen
                } else {
                    break
                }
            }
            // count 和 num 相等，说明是符合条件
            if (count == num) {
                result.push(j)
                count--
                // 滑动窗口，清除匹配的第一个单词
                const word = s.slice(j, j + cutdownLen)
                hash2[word]--
                strLen -= cutdownLen
            } else {
                hash2 = {}
                count = 0
                strLen = 0
            }
        }
    }

    return result
};
```
