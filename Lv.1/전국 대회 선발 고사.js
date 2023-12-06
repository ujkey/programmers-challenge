// 2차
function solutionB(rank, attendance) {
    // [랭킹, 학생명(idx)]
    const [a, b, c] = rank
        .map((v, i) => [v, i])
        .filter(([_, i]) => attendance[i])
        .sort(([a], [b]) => a - b);
    return 10000 * a[1] + 100 * b[1] + c[1];
}

// 1차
function solutionA(rank, attendance) {
    const ranker = new Map();

    for(let i=1; i<=rank.length; i++) {
        const idx = rank.indexOf(i);
        if(attendance[idx]) ranker.set(idx, attendance[idx]);
    }
    const [a, b, c] = Array.from(ranker);

    return (a[0]*10000) + (b[0]*100) + c[0];
}