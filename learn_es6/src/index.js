var longestPalindromeSubseq = function(s) {
    let maxNum = 0
    let arr = s.split('')
    let arr2 = [...new Set(arr)]
    arr2.forEach(e=> {
        let leng = arr.filter(e2 => e == e2).length
        maxNum <= leng ? maxNum = leng : ''
    })
    return maxNum
};

console.log(longestPalindromeSubseq("aabaa"))