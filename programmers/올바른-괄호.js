/**
 * 
 * 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다.
 * https://school.programmers.co.kr/learn/courses/30/lessons/12909
 */
function solution(s) {
    let count = 0;

    if (s[0] === ")" || s[s.length - 1] === "(") {
        return false;
    }

    for (char of s) {
        char === "(" ? count += 1 : count -= 1;

        if (count < 0) return false
    }

    return count === 0
}