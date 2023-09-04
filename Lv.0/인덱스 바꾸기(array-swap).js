/*
    [Array의 요소를 swap하는 방법]
    Js에는 별도의 swap 메서드가 없기 때문에 직접 구현

    1. temp 변수 사용
        const arr = [1, 2, 3];
        const temp = arr[1];
        arr[1] = arr[2];
        arr[2] = temp;

    2. 구조 분해 할당 사용
        const arr = [1, 2];
        [arr[1], arr[2]] = [arr[2], arr[1]];
*/

function solution(my_string, num1, num2) {
    var answer = '';

    const arr = [...my_string];
    [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
    answer = arr.join('');

    return answer;
}