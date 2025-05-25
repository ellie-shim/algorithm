/**
 * 자료구조를 사용하지 않고 타입 변환 없이 숫자 뒤집기
 * 1234 => 4321
 */

function solution(num) {
    let result = 0;
    let newNum = num;

    while (newNum > 0) {
        result = (result * 10) + (newNum % 10)
        newNum = Math.floor(newNum / 10)
    }
    return result;
}

console.log(solution(1234));