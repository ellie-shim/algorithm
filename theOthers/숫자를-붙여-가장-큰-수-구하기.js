/**
 * 숫자를 이어붙여서 가장 큰 수 만들기
 * [6, 10, 2] → "6210"
 */

function solution(arr) {
    return arr.sort((a, b) => {
        const ab = Number(`${a}${b}`);
        const ba = Number(`${b}${a}`);

        return ba - ab
    })
}

console.log(solution([6, 10, 2])).join('')


