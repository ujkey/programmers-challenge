function solution(array, n) {
    var answer = 0;

    const result = array.filter(item => item === n).length;
    answer = result;

    return answer;
}