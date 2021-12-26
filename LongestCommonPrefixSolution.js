/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';
    for (let i = 0; i <= strs[0].length; i++) {
        if (!strs.every((string) => string[i] === strs[0][i])) {
            return strs[0].slice(0, i);
        }
    }

    return strs[0];

};

/*

- Create a return for a return early on empty input
- Loop through the letters of the first word
- Check if this character is present in the same position of every string
- If the character is not present, then return the string up to and including the previous character

*/