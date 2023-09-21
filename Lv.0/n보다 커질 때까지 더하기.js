function solution(numbers, n) {
    var answer = 0;

    answer = numbers.reduce((acc, cur) => {
        return acc<=n ? acc+cur : acc;
    }, 0);

    return answer;
}