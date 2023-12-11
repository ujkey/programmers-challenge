/*
    채점 결과 - 실패(시간 초과)
    정확성: 72.2
    합계: 72.2 / 100.0
*/
function solution(ingredient) {
    let answer = 0;
    let numStr = ingredient.join('');

    while(numStr.includes('1231')) {
        numStr = numStr.replace('1231', '');
        answer++;
    }

    return answer;
}