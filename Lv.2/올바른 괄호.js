// https://school.programmers.co.kr/learn/courses/30/lessons/12909
class Stack {
    constructor(s) {
        this.items = [...s];
    }

    push(element) {
        this.items.push(element);
    }

    // 스택에서 요소 제거 및 반환
    pop() {
        if(this.isEmpty()) return '스택이 비어있습니다.'
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) return "스택이 비어있습니다.";
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    clear() {
        this.items = [];
    }
}

/* ------------------------------
    1️⃣- temp 배열에서 괄호쌍 찾기
    채점 결과_#시간초과
    정확성: 69.5
    효율성: 0.0
    **합계: 69.5 / 100.0

    [뇌피셜 솔루션]
    주로 반복적인 스택 연산과 배열 조작에서 시간 초과가 발생한 것으로 판단된다.
    특히, temp.slice(-2).join('') === '()'와 temp.splice(-2, 2) 부분에서 배열 조작이 많아 성능이 저하된 듯하다.
    최적화를 위해 배열 조작을 최소화하여 성능을 향상시키는 solutionB를 작성해보자.
 */
function solutionA(s){
    const stack = new Stack([...s].reverse()); //init
    const temp = [];

    while(stack.size()) {
        const cur = stack.pop();
        temp.push(cur);
        if(temp.slice(-2).join('') === '()') temp.splice(-2, 2);
    }

    return stack.isEmpty() && temp.length === 0;
}

/* ------------------------------
    2️⃣ - 배열 조작을 줄여서 최적화하기
    채점 결과_#통과
    정확성: 69.5
    효율성: 30.5
    **합계: 100.0 / 100.0
*/
function solutionB(s){
    const stack = new Stack([...s].reverse());
    const temp = [];

    while(stack.size()) {
        const cur = stack.pop();
        if(temp.length && temp[temp.length-1] + cur === '()') temp.pop();
        else temp.push(cur);
    }

    return stack.isEmpty() && temp.length === 0;
}