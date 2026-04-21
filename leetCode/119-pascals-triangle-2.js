/**
https://leetcode.com/problems/pascals-triangle-ii/description

정수 rowIndex가 주어졌을 때, 파스칼의 삼각형에서 rowIndex번째(0부터 시작하는) 행을 반환하십시오.
파스칼의 삼각형에서 각 숫자는 다음과 같이 바로 위에 있는 두 숫자의 합입니다:

Input: rowIndex = 3
Output: [1,3,3,1]
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */

var getRow = function(rowIndex) {
    let prev = [];

    for (let row = 0; row < rowIndex + 1; row++) {
        const curr = Array(row + 1).fill(1);

        for (let i = 1; i < row; i++) {
            curr[i] = prev[i - 1] + prev[i];
        }

        prev = curr;
    }

    return prev;
};

getRow(3)