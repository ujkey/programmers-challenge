function solution(n) {
    var answer = 0;

    const arr = String(n).split(''); // ['1', '2' ...]
    const result = arr.reduce((acc, cur) => acc += Number(cur), 0);
    answer = result;

    return answer; //각 자리 숫자의 합
}