/*
    채점 결과
    정확성: 100.0
    합계: 100.0 / 100.0
*/
function solutionA(n, m, section) {
    const arr = Array(n).fill(0).map((_, i) => section.includes(i + 1) ? 1 : 0);

    const { count } = arr.reduce(({count, sum}, cur, i) => {
        if(sum !== section.length && cur === 1) {
            arr.slice(i, i+m).forEach((v, j) => {
                if(v===1) {
                    sum++;
                    arr[i+j] = 0;
                }
            })
            count++;
        }
        return { count };
    }, {count: 0, sum: 0});


    return count;
}