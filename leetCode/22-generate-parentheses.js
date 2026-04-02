/**
 * 문제 설명
괄호 쌍 n개가 주어졌을 때, 올바른 형식의 괄호 조합을 모두 생성하는 함수를 작성하시오.
**/

var generateParenthesis = function(n) {
    const result = [];

    const add = (str, open, close) => {
        if (str.length === 2 * n) {
            result.push(str)
            return;
        }
        if (open < n) {
            add(str + '(', open + 1, close)
        }
        if (close < open) {
            add(str + ')', open, close + 1)
        }
    }

    add('', 0, 0)

    return result
};


