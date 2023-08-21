/*
    Array.prototype.slice()
        - slice(start, end)
        - 특정 범위(start~end)를 복사한 값들을 담고 있는 새로운 배열을 만든다
        - 주의할 점: 두번째 인자로 넘어온 종료 인덱스가 가리키는 값은 포함하지 않음
*/

function solution(numbers, num1, num2) {
    // numbers : number[]
    var answer = [];

    answer = numbers.slice(num1, num2 + 1);
    return answer;
}