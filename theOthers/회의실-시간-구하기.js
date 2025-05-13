/**
 * 문제
 * 여러 회의 일정이 배열로 주어집니다.
 * 회의 일정을 병합하여 회의가 실제로 진행되고 있는 시간을 구하는 프로그램을 작성해주세요.
 * 
 * 입력은 intervals 리스트로 [startTime, endTime] 형태로 주어집니다.
 * 모든 시간은 "HH:MM" 형식의 문자열로 표현됩니다.
 * 
 * 입출력 예시 # 1
 *  - Input: [["01:30", "02:00"], ["02:00", "04:00"]]
 *  - Output: [["01:30", "04:00"]]
 * 
 * 입출력 예시 # 2
 *  - Input: [["02:30", "03:15"], ["14:30", "16:30"], ["01:30", "03:30"], ["15:30", "17:00"]]
 *  - Output: [["01:30", "03:30"], ["14:30", "17:00"]]
 * 
 */

/**
 * utils
 */
function isOverlapped(range1_start, range1_end, range2_start, range2_end) {
    if (range1_end < range2_start) return false;
    if (range2_end < range1_start) return false;
    return true;
}
function merge(range1_start, range1_end, range2_start, range2_end) {
    return [
        Math.min(range1_start, range2_start),
        Math.max(range1_end, range2_end)
    ];
}
function timeToNum(timeStr) {
    const [h, m] = timeStr.split(':');
    return Number(h) * 60 + Number(m);
}
function numToTime(timeNum) {
    let h = parseInt(timeNum / 60);
    let m = timeNum % 60;
    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    return `${h}:${m}`;
}


function solution(intervals) {
    const formattedIntervals = intervals.map(interval => interval.map(timeToNum)).sort((a, b) => {
        return a[0] - b[0];
    })

    const stack = [formattedIntervals[0]]

    for (let i = 0; i < formattedIntervals.length; i++) {

        const [start, end] = stack[stack.length - 1];
        const [newStart, newEnd] = formattedIntervals[i];

        if (isOverlapped(newStart, newEnd, start, end)) {
            stack[stack.length - 1] = merge(newStart, newEnd, start, end)
        } else {
            stack.push([newStart, newEnd])
        }
    }

    return stack.map(interval => interval.map(numToTime))

}

const answer1 = solution([["01:30", "02:00"], ["02:00", "04:00"]]);
console.log(answer1) // [["01:30", "04:00"]]
const answer2 = solution([["02:30", "03:15"], ["14:30", "16:30"], ["01:30", "03:30"], ["15:30", "17:00"]]);
console.log(answer2) // [["01:30", "03:30"], ["14:30", "17:00"]]

