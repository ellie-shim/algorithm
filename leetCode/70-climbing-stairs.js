/**
 * 문제 설명
주어진 n개의 계단은 매번 1계단 또는 2계단을 오를 수 있습니다.
이때 꼭대기까지 올라가는 서로 다른 방법의 수를 구하세요
 * 
 * 예시
Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 */

var climbStairs = function(n) {
    if (n === 1) return 1
    if (n === 2) return 2

    let prev1 = 2
    let prev2 = 1;
    for (let i = 3; i <= n; i++) {
        const curr = prev1 + prev2;

        prev2 = prev1
        prev1 = curr;
    }
    return prev1
};

climbStairs(5)