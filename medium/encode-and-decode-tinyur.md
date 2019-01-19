# TinyURL 的加密与解密

TinyURL是一种URL简化服务， 比如：当你输入一个
URL https://leetcode.com/problems/design-tinyurl 时，它将返回一个简化的URL http://tinyurl.com/4e9iAk.

要求：设计一个 TinyURL 的加密 encode 和解密 decode 的方法。你的加密和解密算法如何设计和运作是没有限制的，
你只需要保证一个URL可以被加密成一个TinyURL，并且这个TinyURL可以用解密方法恢复成原本的URL。

## JavaScript实现
```
const s2l = {}
const l2s = {}
let index = 0
let key = ++index
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    if (l2s[longUrl]) {
        return l2s[longUrl]
    }
    
    let key = ++index
    s2l[key] = longUrl
    l2s[longUrl] = key
    
    return key
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return s2l[shortUrl]
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
```
