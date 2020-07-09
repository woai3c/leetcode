# [925. 长按键入](https://leetcode-cn.com/problems/long-pressed-name/)
你的朋友正在使用键盘输入他的名字 name。偶尔，在键入字符 c 时，按键可能会被长按，而字符可能被输入 1 次或多次。

你将会检查键盘输入的字符 typed。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 True。

示例 1：
```
输入：name = "alex", typed = "aaleex"
输出：true
解释：'alex' 中的 'a' 和 'e' 被长按。
```
示例 2：
```
输入：name = "saeed", typed = "ssaaedd"
输出：false
解释：'e' 一定需要被键入两次，但在 typed 的输出中不是这样。
```
示例 3：
```
输入：name = "leelee", typed = "lleeelee"
输出：true
```
示例 4：
```
输入：name = "laiden", typed = "laiden"
输出：true
解释：长按名字中的字符并不是必要的。
```

提示：

* name.length <= 1000
* typed.length <= 1000
* name 和 typed 的字符都是小写字母。

## 解法
双指针，一个记录 name，一个记录 typed。如果当前索引匹配，同时 ++。如果 typed 不匹配，则和 name 的上一个索引值对比，如果不符合，返回 false。
当一个循环走完后，防止 typed 匹配完了，而 name 没有匹配完，还需要算一下 name 是否已经遍历完。
```js
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let j = 0
    for (let i = 0, len = typed.length; i < len; i++) {
        if (typed[i] == name[j]) {
            j++
        } else if (typed[i] != name[j] && typed[i] != name[j - 1]) {
            return false
        }
    }

    return j == name.length
};
```
