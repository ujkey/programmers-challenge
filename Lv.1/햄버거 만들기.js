// 시간 복잡도 개선 - stack 활용
function solutionB(ingredient) {
    let answer = 0;
    const stack = [];

    for(let i of ingredient) {
        stack.push(i);

        if(stack.slice(-4).join('') === '1231') {
            stack.splice(-4);
            answer++;
        }
    }

    return answer;
}

/*
    채점 결과 - 실패(시간 초과)
    정확성: 72.2
    합계: 72.2 / 100.0
*/
function solutionA(ingredient) {
    let answer = 0;
    let numStr = ingredient.join('');

    while(numStr.includes('1231')) {
        numStr = numStr.replace('1231', '');
        answer++;
    }

    return answer;
}