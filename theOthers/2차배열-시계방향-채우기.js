/**
 * n*n 의 배열에 시계 방향으로 숫자를 1부터 채운다
 * 예제 출력 4*4
 * [01,02,03,04]
 * [12,13,14,05]
 * [11,16,15,06]
 * [10,09,08,07]
 */
function solution(n) {
    const array = Array(n).fill(0).map(x => Array(n).fill(0));

    const directions = [
        [0, 1], // right
        [1, 0], // down
        [0, -1], // left
        [-1, 0], // up
    ]

    let x = 0, y = 0, num = 1, dirIndex = 0;
    const maxNum = n * n;
    const maxNumLength = maxNum.toString().length;

    while (num <= maxNum) {
        array[y][x] = num.toString().padStart(maxNumLength, '0');

        const [dy, dx] = directions[dirIndex % 4];
        const newX = x + dx;
        const newY = y + dy;

        if (newX >= 0 && newY >= 0 && newX < n && newY < n
            && array[newY][newX] === 0
        ) {
            x = newX;
            y = newY;
        } else {
            dirIndex++;
            const [newDy, newDx] = directions[dirIndex % 4]
            x = x + newDx;
            y = y + newDy;
        }

        num++;
    }

    return array;
}


console.log(solution(4))