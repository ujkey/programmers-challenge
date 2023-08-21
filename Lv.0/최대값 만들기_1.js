/*
    solution
    1. 오름차순 정렬
    2. 마지막 두개의 곱

    1. Array.prototype.sort(compareFunction)
        - compareFunction 함수는 두개의 element를 파라미터로 입력받는다
            - 반환값 < 0, a가 b보다 앞에 오도록 정렬
            - 반환값 > 0, b가 a보다 앞에 오도록 정렬
*/

function solution(numbers) {
    // numbers : number[]
    var answer = 0;

    const arr = numbers.sort((a, b) => a - b); //ASC
    const max = arr[arr.length-1] * arr[arr.length-2];
    answer = max;

    return answer;
}