/**
https://leetcode.com/problems/pascals-triangle/description

주어진 정수 numRows에 대해 파스칼 삼각형의 처음 numRows까지를 반환합니다. 
파스칼 삼각형에서 각 숫자는 바로 위에 있는 두 숫자의 합입니다.
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 */


/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function(numRows) {
    const result = [[1]];
    let row = 1

    while (row <= numRows) {

        if (row === 1) {
            row++
            continue;
        }

        const target = result[result.length - 1]
        const arr = Array(row).fill(1)
            .map((x, i) => { return (target[i - 1] ?? 0) + (target[i] ?? 0) })

        result.push(arr)
        row++
    }
    return result
};

generate(5)