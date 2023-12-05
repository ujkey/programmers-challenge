// 2차
function solutionB(l, r) {
    let answer = [];

    const numArr = Array.from({length: r-l+1}, (_, i) => i+l);
    numArr.forEach((v) => {
        isOnly05Integer(v) && answer.push(v);
    })

    return answer.length ? answer : [-1];
}

// 1차
function solutionA(l, r) {
    let answer = [];

    for(let i=l; i<=r; i++) {
        isOnly05Integer(i) && answer.push(i);
    }
    return answer.length ? answer : [-1];
}

const isOnly05Integer = (num) => {
    const strNum =  num.toString();
    const noZeroFivePatten = /[^05]/; //0과 5 이외의 숫자를 찾기
    return !noZeroFivePatten.test(strNum);
}