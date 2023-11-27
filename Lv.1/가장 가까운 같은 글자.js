function solutionA(s) {
    let answer = [];
    const counted = new Map();

    [...s].forEach((v, i) => {
        const result = counted.has(v) ? i-s.lastIndexOf(v, i-1) : -1;
        counted.set(v, result);
        answer.push(result);
    })

    return answer;
}

function solutionB(s) {
    return [...s].map((v, i) => {
        const count = s.slice(0, i).lastIndexOf(v);
        return count < 0 ? count : i-count;
    })
}