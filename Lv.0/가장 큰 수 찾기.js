function solution(array) {
    var answer = [];
    const max = Math.max(...array);
    answer.push(max, array.indexOf(max));

    return answer;
}