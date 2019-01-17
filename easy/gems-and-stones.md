## JavaScript
```
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let sum = 0
    
    for (let i = 0, len = J.length; i < len; i++) {
        sum += S.split(J[i]).length - 1
    }
    
    return sum
};
```
## C
```
int numJewelsInStones(char* J, char* S) {
    int num = 0;
    int s, slen, j, jlen;
        
    for (j = 0, jlen = strlen(J); j < jlen; j++) {
        for (s = 0, slen = strlen(S); s < slen; s++) {
            if (J[j] == S[s]) {
                num++;
            }
        }
    }
    
    return num;
}
```
