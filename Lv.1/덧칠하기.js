/*
    [Array.prototype.fill(value, start, end)]
        배열의 인덱스 범위 내에 있는 모든 요소를 정적 값으로 변경한다
        수정된 배열을 반환
*/
function solutionB(n, m, section) {
    let count = 0;
    const arr = Array(n-1).fill(null);

    section.forEach((s) => {
        arr[s] = 1; //덧칠 해야할 구역 표시
    })

    section.forEach((s) => {
        if(arr[s]) {
            arr.fill(null, s, s+m);
            count++;
        }
    })

    return count;
}

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