function solution(arr) {
    var answer = [];

    answer = arr.slice(arr.indexOf(2), arr.lastIndexOf(2)+1);

    return answer.length ? answer : [-1];
}