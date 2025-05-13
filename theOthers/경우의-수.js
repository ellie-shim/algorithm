/**
 * 여러 의상의 이름과 종류가 주어졌을 때 각 종류 별로 입을 수 있는 경우의 수 구하기
 * clothes = [의상의 이름, 의상의 종류]
 * 의상 종류 상관없이 최소 2개 이상의 의상을 착용해야한다
 * 
 * 제약 조건
 * 1. 의상 종류에 무관하여 최소 2개 이상의 의상을 착용해야 한다
 * 2. 같은 이름의 의상은 존재하지 않는다.
 * 3. 한 종류의 의상을 입지 않는 것은 허용되지만, 한 종류의 의상을 두 가지 이상 착용할 수 없다 
 * 
 * 입출력 예시 # 1
 *  - Input : [  ["yellow_hat", "headgear"],  ["blue_sunglasses", "eyewear"],  ["green_turban", "headgear"]]
 *  - Output: 2
 *  - 가능한 조합: (yellow_hat, blue_sunglasses), (yellow_hat, green_turban)
 * 
 * 입출력 예시 # 2
 *  - Input : [  ["crow_mask", "face"],  ["blue_sunglasses", "face"],  ["smoky_makeup", "face"]]
 *  - Output: 9
 *  - 가능한 조합: 두 가지 이상의 의상을 착용할 방법이 없습니다.
 */

/**
 * 풀이
 * 1. 의상의 종류에 따른 의상의 개수를 구한다
 * 2. 의상의 개수를 곱하여 경우의 수를 구한다
 * 3. 예외 케이스 1. 하나도 입지 않은 경우
 * 4. 예외 케이스 2. 한개만 입은 경우
 * 
 */

function solution(clothes) {
    const data = clothes.reduce((acc, [value, key]) => {
        acc[key] = (acc[key] || 0) + 1
        return acc;
    }, {})

    return Object.values(data).reduce((acc, cur) => {
        acc = acc * (cur + 1);
        return acc;
    }, 1) - 1 - clothes.length
}

const answer1 = solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"]
]) // 2

const answer2 = solution([
    ["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]
]) // 0

console.log(answer1) // 2
console.log(answer2) // 0