/**
 * https://leetcode.com/problems/jump-game/description/
 * 
정수 배열 nums가 주어집니다. 
초기 위치는 배열의 첫 번째 인덱스이며, 배열의 각 요소는 해당 위치에서 점프할 수 있는 최대 거리를 나타냅니다.
마지막 인덱스에 도달할 수 있다면 true를, 그렇지 않으면 false를 반환하십시오.
 */


var canJump = function(nums) {
    let maxReach = 0;
    for (let i = 0; i <= maxReach; i++) {
        maxReach = Math.max(maxReach, i + nums[i]);
        if (maxReach >= nums.length - 1) {
            return true;
        }
    }

    return false;
};

canJump([2, 3, 1, 1, 4])