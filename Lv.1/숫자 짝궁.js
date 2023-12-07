/*
    1차
    채점 결과
    정확성: 63.2
    합계: 63.2 / 100.0
*/
function solution(X, Y) {
    const answer = []; // 짝궁 숫자 배열

    const arrX = [...X.toString()];
    const arrY = [...Y.toString()];

    arrX.forEach((v, i) => {
        if(arrY.includes(v)) {
            answer.push(v);
            arrY.splice(arrY.indexOf(v), 1); //제거
        }
    });

    const result = answer.sort().reverse().join('');

    return result || '-1';
}