/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let palindrome = ''
    let findPalindrome = (s, longest, left, right) => {
        let palindrome
        if ((right - left) > 1) {
            palindrome = s[left + 1]
        } else {
            palindrome = ''
        }
        while (s[left] === s[right] && left >= 0 && right <= s.length) {
            palindrome = s[left] + palindrome + s[right]
            left--
            right++
        }
        if (palindrome.length > longest.length) {
            return palindrome
        } else {
            return longest
        }
    }
    for (let i = 0; i < s.length; i++) {
        palindrome = findPalindrome(s, palindrome, i - 1, i + 1) // odd
        palindrome = findPalindrome(s, palindrome, i, i + 1) // even
    }
    return palindrome
}
