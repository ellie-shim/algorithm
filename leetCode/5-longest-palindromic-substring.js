/**
 * 문제 설명
문자열 s가 주어졌을 때, s에서 가장 긴 회문 부분 문자열을 반환하십시오.
**/

var longestPalindrome = function(s) {
    if (s.length <= 1) return s;

    let longest = "";

    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }

        return s.substring(left + 1, right);
    };


    for (let i = 0; i < s.length; i++) {
        let odd = expandAroundCenter(i, i);
        let even = expandAroundCenter(i, i + 1);
        let current = odd.length > even.length ? odd : even;

        if (current.length > longest.length) {
            longest = current;
        }
    }

    return longest;
};

