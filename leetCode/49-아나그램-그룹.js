/**
 * leetCode 49번 문제
 * https://leetcode.com/problems/group-anagrams/description/
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */

function solution(strs) {
    if (strs.length < 2) return [strs];

    const dic = strs.reduce((acc, cur) => {
        const newChar = cur.split('').sort().join('');

        if (acc[newChar]) {
            acc[newChar].push(cur)
        } else {
            acc[newChar] = [cur]
        }
        return acc;
    }, {})

    return Object.values(dic);
}

console.log(solution(["eat", "tea", "tan", "ate", "nat", "bat"]))

