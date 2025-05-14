/**
 * 
 * 문제 설명
 * 문자열에서 z와 a가 특정 순서로 짝을 이룰 때, 해당 쌍의 개수를 세려 한다.
 * z 다음에 언젠가 a가 등장하면 이는 유효한 쌍이다. (단, z와 a 사이에 다른 문자가 있어도 됨)
 * 마찬가지로 a 다음에 언젠가 z가 등장하면 이것도 유효한 쌍이다.
 * 단, 같은 문자끼리 짝지으면 안 된다 (z-z, a-a 불가능)
 * 각각의 z 또는 a는 중복해서 짝지을 수 있다.
 * 
 * 입력
 * 문자열 str (알파벳 소문자만으로 구성, 길이 1 이상 10⁵ 이하)
 * 
 * 출력
 * 조건을 만족하는 z-a 또는 a-z 쌍의 개수
 * 
 * 예시
 * zewadzza
 * => "z"ew"a"dzza
 * => zew"a"d"z"za
 * => zewadz"z""a"
 * 총 3가지
 */



function solution(str) {
    const map = {
        z: "a",
        a: "z",
    }

    let count = 0;
    let target = '';

    for (s of str) {
        if (s === target) {
            count++;
        }

        if (map.hasOwnProperty(s)) {
            target = map[s];
        }
    }

    return count;
}

solution("zewadzza");