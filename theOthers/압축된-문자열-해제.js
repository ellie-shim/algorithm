// 3(hi) => hihihi
// 2(3(hi)co) => hihihicohihihico
// 2(2(hi)2(co))x2(bo) => hihicocohihicocoxbobo

function solution(str) {
    const stack = [];
    let num = "";

    for (s of str) {
        if (!isNaN(s)) {
            // number
            num = s;
        } else if (s === "(") {
            stack.push(num)
            stack.push("(")
            num = ""
        } else if (s === ")") {
            let segment = ""
            while (stack.length && stack[stack.length - 1] !== "(") {
                const ss = stack.pop()
                segment = ss + segment;
            }

            stack.pop();
            const rc = parseInt(stack.pop() || "1", 10)
            stack.push(segment.repeat(rc))
        } else {
            stack.push(s)
        }

    }
    return stack.join('')

}

console.log(solution("3(hi)"))
console.log(solution("2(3(hi)co)"))
console.log(solution("2(2(hi)2(co))x2(bo)"))
