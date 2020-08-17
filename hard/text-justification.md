# [68. 文本左右对齐](https://leetcode-cn.com/problems/text-justification/)
给定一个单词数组和一个长度 maxWidth，重新排版单词，使其成为每行恰好有 maxWidth 个字符，且左右两端对齐的文本。

你应该使用“贪心算法”来放置给定的单词；也就是说，尽可能多地往每行中放置单词。必要时可用空格 ' ' 填充，使得每行恰好有 maxWidth 个字符。

要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。

文本的最后一行应为左对齐，且单词之间不插入额外的空格。

说明:

* 单词是指由非空格字符组成的字符序列。
* 每个单词的长度大于 0，小于等于 maxWidth。
* 输入单词数组 words 至少包含一个单词。

示例:
```
输入:
words = ["This", "is", "an", "example", "of", "text", "justification."]
maxWidth = 16
输出:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
```
示例 2:
```
输入:
words = ["What","must","be","acknowledgment","shall","be"]
maxWidth = 16
输出:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
解释: 注意最后一行的格式应为 "shall be    " 而不是 "shall     be",
     因为最后一行应为左对齐，而不是左右两端对齐。       
     第二行同样为左对齐，这是因为这行只包含一个单词。
```
示例 3:
```
输入:
words = ["Science","is","what","we","understand","well","enough","to","explain",
         "to","a","computer.","Art","is","everything","else","we","do"]
maxWidth = 20
输出:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]
```
## 解法
```js
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
 var fullJustify = function(words, maxWidth) {
    const result = []
    let row = '' // 行字符串
    let rowLen = 0 // 行长度
    let isFirstWord = true // 是否是该行第一个单词
    let spaceNum = 0 // 填充的空格数量
    for (let i = 0, len = words.length; i < len; i++) {
        if (isFirstWord) {
            isFirstWord = false
            row += words[i]
            rowLen += words[i].length
        } else {
            row += ' ' + words[i]
            rowLen += words[i].length + 1
            spaceNum++
        }

        if (i + 1 == len || rowLen + words[i + 1].length + 1 > maxWidth) {
            isFirstWord = true
            result.push(fillWithSpace(row, rowLen, maxWidth, spaceNum, i + 1 == len))
            spaceNum = 0
            rowLen = 0
            row = ''
        }
    }
    
    return result
};

function fillWithSpace(row, rowLen, maxWidth, spaceNum, isLast) {
    if (rowLen == maxWidth) return row
    // 最后一行或只有一个单词
    if (isLast || spaceNum == 0) return row + ' '.repeat(maxWidth - rowLen)

    const arr = row.split(' ')
    const wordLen = rowLen - spaceNum
    // 剩下的字符数量能够均匀分几个空格
    const num = ~~((maxWidth - wordLen) / (arr.length - 1)) // 取整
    // 如果不能够均匀分配，记录多出来的空格，从左到右按顺序分配
    let remainSpace = maxWidth - wordLen - num * (arr.length - 1)

    let result = ''
    for (let i = 0, len = arr.length - 1; i < len ; i++) {
        let extra = 0
        if (remainSpace) {
            remainSpace--
            extra++
        }

        result += arr[i] + ' '.repeat(num + extra)
    }

    return result + arr[arr.length - 1]
}
```
