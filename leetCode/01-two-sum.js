/**
 * 문제 설명
정수 배열 nums와 정수 목표값 target이 주어졌을 때, 두 숫자의 합이 target이 되는 숫자의 인덱스를 반환하세요.
각 입력에 대해 정확히 하나의 해가 존재한다고 가정할 수 있으며, 동일한 요소를 두 번 사용할 수 없습니다.
답변은 어떤 순서로든 반환할 수 있습니다.
 * 
 * 예시
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
 */

function solution(nums, target) {
    let left = 0;
    let right = 1;

    if (nums[left] + nums[right] === target) return [left, right];

    while (nums[left] + nums[right] !== target) {
        if (right < nums.length - 1) {
            right += 1;
            continue;
        }
        left += 1;
        right = left + 1;
    }

    return [left, right]
}